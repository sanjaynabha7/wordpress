import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts, getAllPost } from "../../store/actions";
import GridExample from '../../components/ag'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Sidebar from '../../components/sidebar'
import Dashboard from '../dashboard'
import Posts from '../posts'
import AddPost from '../posts/addpost'
import EditPost from '../posts/editPost'
import Menu from '../../components/menu'
import Category from '../posts/category'




class HomeView extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    // await this.props.getAllPost()
    await this.props.getAllPost()
    const allProducta = this.props


  }



  render() {
    return (
      <>
        <Sidebar />
        <Header />
        <div className="pcoded-main-container">
          <div className="pcoded-wrapper">
            <div className="pcoded-content">
              <div className="pcoded-inner-content">
                <div className="main-body">
                  <div className="page-wrapper">
                    <div className="api_sec inner_wrpr">
                      {/* <Route path='/' component={Dashboard} /> */}
                      <Route path='/posts' component={Posts} />
                      <Route path='/new-post' component={AddPost} />
                      <Route path='/post/:id' component={EditPost} />
                      <Route path='/grid-example' component={GridExample} />
                      <Route path='/menu' component={Menu} />
                      <Route path='/category' component={Category} />
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ ProductsR, POST }) => ({ ProductsR, POST });
export default connect(mapStateToProps, { getProducts, getAllPost })(HomeView);
