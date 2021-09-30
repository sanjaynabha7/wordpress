import React, { Component } from 'react'
import { addNewPost } from "../../../store/actions/index";
import { connect } from "react-redux";
import Editor from '../../../components/textEditor/text-editor'
class AddPost extends Component {
    state = {

    }


    componentDidMount() {
        debugger

    }
    textChange = (data) => {
        debugger
        console.log("Working", data)
        this.setState({postDescription:data})
        console.log(this.state.postDescription)
    }


    AddNewPost = async ($e) => {
        debugger
        $e.preventDefault();
        let payload = {
            postTitle: this.state.postTitle,
            postDescription: this.state.postDescription,
            postImage: this.state.postImage,
        }
        await this.props.addNewPost(payload);
    }


    render() {
        return (
            <>
                <div className="page-header">
                    <div className="page-block">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="page-header-title">
                                    <h5 className="m-b-10">Add New Post</h5>
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
                                                        <label for="exampleFormControlTextarea1">Post Description</label>
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

                                                    <button type="submit" className="btn btn-primary" onClick={this.AddNewPost}>Submit</button>
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

const mapStateToProps = ({ USER_REDUCER }) => ({ USER_REDUCER });
export default connect(mapStateToProps, { addNewPost })(AddPost);
