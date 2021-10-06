import React, { Component } from 'react'
import { addCategory, updateCategory, fileImageUpload } from "../../../../store/actions";
import { connect } from "react-redux";
import Editor from '../../../../components/textEditor/text-editor'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class AddCategory extends Component {
    state = {
        isEdit: false,
        categoryName: '',
        cateUrl: ''
    }
    componentDidMount() {
        const editData = this.props.data
        this.setState({
            categoryName: editData.categoryName,
            categoryDescription: editData.categoryDescription,
            categoryImage: editData.categoryImage,
        })

    }
    textChange = (data) => {
        console.log("Working", data)
        this.setState({ categoryDescription: data })
        console.log(this.state.categoryDescription)
    }

    titleChange = (event) => {
        const categoryName = event.target.value
        const lowerCase = categoryName.toLowerCase()
        const cateUrl = lowerCase.replace(/ /g, "-");
        this.setState({ cateUrl, categoryName })
    }

    addCategory = async ($e) => {
        $e.preventDefault();
        let payload = {
            categoryName: this.state.categoryName,
            categoryDescription: this.state.categoryDescription,
            categoryImage: this.state.categoryImage,
            categoryUrl: this.state.cateUrl
        }
        await this.props.addCategory(payload);
        this.props.hidePopup()
    }




    onSelectFile = (e) => {
        debugger
        let file =  e.target.files[0];

        const fd = new FormData();

        fd.append("itemImage", file);

        fileImageUpload(fd).then(result => {
          console.log(result)

          this.setState({
          file: file,
          imageFileError: null,
          itemFileName: file.name,
        });

         })
           
    
        
        
      };
    

    updateCategory = async ($e) => {
        $e.preventDefault();
        let payload = {
            id: this.props.data._id,
            categoryName: this.state.categoryName,
            categoryDescription: this.state.categoryDescription,
            categoryImage: this.state.categoryImage,
            categoryUrl: this.state.cateUrl
        }
        await this.props.updateCategory(payload);
        this.props.hidePopup()
    }

    render() {
        const { editForm } = this.props
        const { categoryDescription } = this.props.data
        return (
            <>
                <Modal show={this.props.showPopup} onHide={this.props.hidePopup} animation={true} size="lg">
                    <Modal.Header>
                        <Modal.Title>Category</Modal.Title>
                        <button className="btn close-btn" onClick={this.props.hidePopup}> x </button>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="page-wrapper">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card Recent-Users">
                                        <div className="card-header">
                                            <h5>{editForm ? "Edit Category" : "Add New Category"}</h5>
                                        </div>
                                        <div className="card-block">
                                            <div className="card-block px-0 py-3">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <form>
                                                            <div className="form-group">
                                                                <label>Name</label>
                                                                <input type="text" className="form-control" placeholder="Name" value={this.state.categoryName} onChange={this.titleChange} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Image</label>
                                                                <input type="text" className="form-control" placeholder="Image" value={this.state.categoryImage} onChange={(e) => this.setState({ categoryImage: e.target.value })} />
                                                                <input
                                                                    accept=".PNG,.png,.jpg,JPEG" className="dn" type="file" id="upld_image" onChange={this.onSelectFile} ref={this.fileInput}
                                                                ></input>
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="exampleFormControlTextarea1">Category Description</label>
                                                                <Editor value={categoryDescription} onChange={this.textChange} />
                                                                {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.postDescription} onChange={(e) => this.setState({ postDescription: e.target.value })}></textarea> */}
                                                            </div>


                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.hidePopup}>
                            Close
                        </Button>

                        {editForm ? <Button variant="primary" onClick={this.updateCategory}> Update </Button>
                            : <Button variant="primary" onClick={this.addCategory}> Save </Button>}


                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = ({ PROPS_DATA }) => ({ PROPS_DATA });
export default connect(mapStateToProps, { addCategory, updateCategory })(AddCategory);
