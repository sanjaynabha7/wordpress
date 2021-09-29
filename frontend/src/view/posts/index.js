import React, { Component } from 'react';
import { getAllPost, getUser, propsData } from "../../store/actions/index";
import { connect } from "react-redux";
import moment from "moment"
import { Link, Route } from "react-router-dom";
import EditPost from './editPost'

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
        debugger
        await this.props.getAllPost()
        this.setState({ postList: this.props.POST })
    }
    editPost = (post) => {
        debugger
        console.log("Workidddng", post)
        this.props.propsData(post)
        this.props.history.replace(`/post/${post._id}`)
        // this.setState({ singleData: post, editShow: true })
    }


    render() {
        const { postList, singleData, editShow } = this.state
        return (<>
            <div class="page-header">
                <div class="page-block">
                    <div class="row align-items-center">
                        <div class="col-md-12">
                            <div class="page-header-title">
                                <h5 class="m-b-10">All Posts</h5>
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
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <tbody>
                                                {postList.map((post, index) => (
                                                    <tr class="unread" key={index}>
                                                        <td><img class="rounded-circle" src={post.postImage} alt="activity-user" style={{ width: '50px' }} /></td>
                                                        <td>
                                                            <h6 class="mb-1">{post.postTitle}</h6>
                                                        </td>
                                                        <td>
                                                            <h6 class="text-muted"><i class="fas fa-circle text-c-green f-10 m-r-15"></i>{moment(post.createdAt).format('DD MMM YYYY')} </h6>
                                                        </td>
                                                        <td>
                                                            {/* <Link   to={`/post/${post._id}`}>
                                                                <button>View</button>
                                                            </Link>; */}

                                                            <span onClick={() => this.editPost(post)} class="label theme-bg2 text-white f-12">Edit</span>
                                                            {/* <span class="label theme-bg text-white f-12">Edit</span> */}
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
