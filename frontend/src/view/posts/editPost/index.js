import React, { Component } from 'react'
import { updatePost } from "../../../store/actions/index";
import { connect } from "react-redux";
import Editor from '../../../components/textEditor/text-editor'
class EditPost extends Component {
    state = {
        postTitle: "",
        postDescription: "",
        postImage: "",
        _id:""
    }

    componentDidMount() {
        debugger
        const { postTitle, postDescription, postImage, _id } = this.props.PROPS_DATA
        this.setState({ postTitle, postDescription, postImage, _id})
    }
    textChange = (data) => {
        debugger
        console.log("Working", data)
        this.setState({postDescription:data})
        console.log(this.state.postDescription)
    }

    UpdatePost = async ($e) => {
        debugger
        $e.preventDefault();
        let payload = {
            id: this.state._id,
            postTitle: this.state.postTitle,
            postDescription: this.state.postDescription,
            postImage: this.state.postImage,
        }
        await this.props.updatePost(payload);
    }


    render() {


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
                                                        <input type="text" className="form-control" placeholder="Title" value={this.state.postTitle} onChange={(e) => this.setState({ postTitle: e.target.value })} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Image</label>
                                                        <input type="text" className="form-control" placeholder="Image" value={this.state.postImage} onChange={(e) => this.setState({ postImage: e.target.value })} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlTextarea1">Example textarea</label>
                                                        <Editor value={this.state.postDescription} onChange={this.textChange}/>
                                                        {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.postDescription} onChange={(e) => this.setState({ postDescription: e.target.value })}></textarea> */}
                                                    </div>

                                                    <div className="form-group">
                                                        <label for="exampleFormControlSelect1">Example select</label>
                                                        <select className="form-control" id="exampleFormControlSelect1">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
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

const mapStateToProps = ({ USER_REDUCER, PROPS_DATA }) => ({ USER_REDUCER, PROPS_DATA });
export default connect(mapStateToProps, { updatePost })(EditPost);
