import React, { Component } from 'react';
import { getAllPost, getUser, propsData } from "../../store/actions/index";
import { connect } from "react-redux";
import moment from "moment"
import { Link, Route } from "react-router-dom";
import EditPost from './editPost'
import TextEditor from '../../components/textEditor/text-editor'
import './style.css'
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
            singleData: [],
            editShow: false,
        }
    }


    async componentDidMount() {
        await this.props.getAllPost()
        this.setState({ postList: this.props.POST })
    }
    editPost = (post) => {
        //console.log("Workidddng", post)
        this.props.propsData(post)
        this.props.history.replace(`/post/${post._id}`)
        // this.setState({ singleData: post, editShow: true })
    }
    deletePost = (id) => {

    }
    

    render() {
    console.log(`this.props`, this.props)

        const { postList, singleData, editShow } = this.state
        return (<>
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h5 className="m-b-10">All Posts</h5>
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
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <tbody>
                                            <tr>
                                                    <th>Image</th><th>Title</th><th>Category</th><th>Date</th> <th>Action</th>
                                                </tr>
                                                {postList.map((post, index) => (
                                                    <tr className="unread" key={index}>
                                                        <td><img className="rounded-circle" src={post.postImage} alt="activity-user" style={{ width: '50px' }} /></td>
                                                        <td>
                                                            <h6 className="mb-1">{post.postTitle}</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="mb-1">{post.postCategory.categoryName}</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>{moment(post.createdAt).format('DD MMM YYYY')} </h6>
                                                        </td>
                                                        <td>
                                                            <span onClick={() => this.editPost(post)} className="label theme-bg2 text-white f-12">Edit</span>
                                                             <span className="label theme-bg text-white f-12"  onClick={() => this.deletePost(post._id)}>Delete</span> 
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* {editShow ? <EditPost data={singleData} /> : null} */}
                        </div>
                    </div>

                </div>
            </div>

        </>);
    }
}
const mapStateToProps = ({ POST, UserReducer, PROPS_DATA }) => ({ POST, UserReducer, PROPS_DATA });
export default connect(mapStateToProps, { getAllPost, getUser, propsData })(Posts);
