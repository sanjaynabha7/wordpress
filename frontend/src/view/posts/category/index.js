import React, { Component } from 'react';
import { addCategory, getCategories, propsData } from "../../../store/actions";
import { connect } from "react-redux";
import moment from "moment"
import EditPost from './edit'
import './style.css'
import Button from 'react-bootstrap/Button'
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            singleData: [],
            editShow: false,
            show: false,
            editForm: false
        }
    }
    async componentDidMount() {
        debugger
        await this.props.getCategories()
        this.setState({ categoryList: this.props.CATEGORY })
    }
    async componentDidUpdate() {
   debugger
        // await this.props.getCategories()
    }

    editPost = (post) => {
        this.props.propsData(post)
        this.setState({ singleData: post, editShow: true, editForm: true })
    }

    showPopup = () => {
        this.setState({ show: true, editShow: true, editForm: false })
    }
    hidePopup = async () => {
        this.props.propsData()
        this.setState({ show: false, editShow: false })
        await this.props.getCategories()
    }

    render() {
        const { categoryList, singleData, editShow, editForm } = this.state
        return (<>
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h5 className="m-b-10">All Categories</h5><Button variant="primary" onClick={this.showPopup}>Add Category</Button>
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

                                                {categoryList.map((category, index) => (
                                                    <tr className="unread" key={index}>
                                                        <td><img className="rounded-circle" src={category.categoryImage} alt="activity-user" style={{ width: '50px' }} /></td>
                                                        <td>
                                                            <h6 className="mb-1">{category.categoryName}</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>{moment(category.createdAt).format('DD MMM YYYY')} </h6>
                                                        </td>
                                                        <td>
                                                            <span onClick={() => this.editPost(category)} className="label theme-bg2 text-white f-12">Edit</span>
                                                            {/* <span className="label theme-bg text-white f-12">Edit</span> */}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {editShow ? <EditPost data={singleData} showPopup={this.showPopup} hidePopup={this.hidePopup} editForm={editForm} /> : null}
                        </div>
                    </div>

                </div>
            </div>

        </>);
    }
}
const mapStateToProps = ({ CATEGORY, PROPS_DATA }) => ({ CATEGORY, PROPS_DATA });
export default connect(mapStateToProps, { getCategories, addCategory, propsData })(Category);
