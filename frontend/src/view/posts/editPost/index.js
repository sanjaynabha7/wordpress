import React, { Component } from 'react'
import { updatePost } from "../../../store/actions/index";
import { connect } from "react-redux";

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
                <div class="page-header">
                    <div class="page-block">
                        <div class="row align-items-center">
                            <div class="col-md-12">
                                <div class="page-header-title">
                                    <h5 class="m-b-10">Edit Post</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-wrapper">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card Recent-Users">
                                <div class="card-header">
                                    <h5>Posts</h5>
                                </div>
                                <div class="card-block">
                                    <div class="card-block px-0 py-3">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <form>
                                                    <div class="form-group">
                                                        <label>Title</label>
                                                        <input type="text" class="form-control" placeholder="Title" value={this.state.postTitle} onChange={(e) => this.setState({ postTitle: e.target.value })} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Image</label>
                                                        <input type="text" class="form-control" placeholder="Image" value={this.state.postImage} onChange={(e) => this.setState({ postImage: e.target.value })} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlTextarea1">Example textarea</label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.postDescription} onChange={(e) => this.setState({ postDescription: e.target.value })}></textarea>
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="exampleFormControlSelect1">Example select</label>
                                                        <select class="form-control" id="exampleFormControlSelect1">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>

                                                    <button type="submit" class="btn btn-primary" onClick={this.UpdatePost}>Submit</button>
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
