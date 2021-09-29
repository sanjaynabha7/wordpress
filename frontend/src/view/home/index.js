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
        <div class="pcoded-main-container">
          <div class="pcoded-wrapper">
            <div class="pcoded-content">
              <div class="pcoded-inner-content">
                <div class="main-body">
                  <div class="page-wrapper">
                    <div className="api_sec inner_wrpr">
                      {/* <Route path='/' component={Dashboard} /> */}
                      <Route path='/posts' component={Posts} />
                      <Route path='/new-post' component={AddPost} />
                      <Route path='/post/:id' component={EditPost} />
                      <Route path='/grid-example' component={GridExample} />
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
