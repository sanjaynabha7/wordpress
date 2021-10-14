import React, { Component } from 'react'
import { updatePost, getCategories, fileImageUpload } from "../../../store/actions";
import { connect } from "react-redux";
import Editor from '../../../components/textEditor/text-editor'
class EditPost extends Component {
    state = {
        postTitle: "",
        replaced:"",
        postDescription: "",
        postImage: "",
        _id: "",
        postCategory: "",
        categoryList: [],
        category: "",
        itemFileName: null,
        src: null
    }

    async componentDidMount() {
        const { postTitle, postDescription, postImage, _id, postCategory } = this.props.PROPS_DATA
        this.setState({ postTitle, postDescription, postImage, _id, postCategory: postCategory.categoryName })
        console.log("ssss", postDescription)
        await this.props.getCategories()
        this.setState({ categoryList: this.props.CATEGORY })
    }
    textChange = (data) => {
        console.log("ssss", data)
        this.setState({ postDescription: data })
        console.log(this.state.postDescription)
    }
    titleChange = (event) => {
        const postTitle = event.target.value
        const lowerCase = postTitle.toLowerCase()
        const replaced = lowerCase.replace(/ /g, "-");
        this.setState({ replaced, postTitle })
    }

    changeCategory = (event) => {
        this.setState({ category: event.target.value })
    }

    UpdatePost = async ($e) => {
        $e.preventDefault();
        let payload = {
            id: this.state._id,
            postTitle: this.state.postTitle,
            postDescription: this.state.postDescription,
            postImage: this.state.src,
            postUrl: this.state.replaced,
            postCategory: this.state.category
        }
        await this.props.updatePost(payload);
        this.props.history.replace('/posts')
    }
    fileChangedHandler = (event) => {
        let file = event.target.files[0];
        const fd = new FormData();
        fd.append("itemImage", file);
        fileImageUpload(fd).then(result => {
            console.log(result)
            let reader = new FileReader();
            this.setState({
                file: file,
                imageFileError: null,
                itemFileName: file.name,
            });
            reader.readAsDataURL(file);
            reader.onload = (res) =>
                this.setState({
                    src: res.target.result,
                    imageUrl: result.url

                });
        })

    }

    render() {
        console.log(`this.props=========`, this.props)

        const { postDescription } = this?.props?.PROPS_DATA
        return (
            <>
                <div className="page-header">
                    <div className="page-block">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="page-header-title">
                                    <h5 className="m-b-10">Edit Post</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card Recent-Users">
                                <div className="card-header">
                                    <h5>Posts</h5>
                                </div>
                                <div className="card-block">
                                    <div className="card-block px-0 py-3">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <form>
                                                    <div className="form-group">
                                                        <label>Title</label>
                                                        <input type="text" className="form-control" placeholder="Title" value={this.state.postTitle} onChange={this.titleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Image</label>
                                                        <input type="file" onChange={this.fileChangedHandler} />
                                                    </div>
                                                    <div className="upld_lbld">
                                                        <img className="thambsImage" src={this.state.postImage} alt={this.state.postImage} />
                                                        {this.state.imageUrl}
                                                    </div>
                                                    {this.state.itemFileName && (

                                                        <div className="upld_lbld">
                                                            <img className="thambsImage" src={this.state.src} alt={this.state.itemFileName} />
                                                            {this.state.imageUrl}
                                                        </div>
                                                    )}
                                                    <div className="form-group">
                                                        <label for="exampleFormControlTextarea1">Example textarea</label>
                                                        <Editor value={postDescription} onChange={this.textChange} />

                                                    </div>

                                                    <div className="form-group">
                                                        <label for="exampleFormControlSelect1">Select Category : <strong>{this.state.postCategory}</strong> </label>
                                                        <select className="form-control" id="exampleFormControlSelect1" value={this.state.category} onChange={this.changeCategory}>
                                                            {this.state.categoryList.map(el => (
                                                                <option key={el._id} value={el._id}>{el.categoryName}</option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <button type="submit" className="btn btn-primary" onClick={this.UpdatePost}>Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({ USER_REDUCER, PROPS_DATA, CATEGORY }) => ({ USER_REDUCER, PROPS_DATA, CATEGORY });
export default connect(mapStateToProps, { updatePost, getCategories })(EditPost);
