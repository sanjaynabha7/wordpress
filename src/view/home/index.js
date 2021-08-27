import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts, getUser } from "../../store/actions";
import GridExample from '../../components/ag'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Sidebar from '../../components/sidebar'
import Dashboard from '../dashboard'

class HomeView extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    debugger
    await this.props.getUser()
    const allProducta = this.props.USER_REDUCER
    this.setState({ data: allProducta })
    debugger

  }



  render() {
    const allData = this.state.data
    console.log(allData)
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
                    <Route path='/' component={Dashboard} />
                    <Route path='/grid-example' component={GridExample} />
                      {allData.map((task, index) => (
                        <li key={index}>{task.firstName}</li>
                      ))}
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

const mapStateToProps = ({ ProductsR, USER_REDUCER }) => ({ ProductsR, USER_REDUCER });
export default connect(mapStateToProps, { getProducts, getUser })(HomeView);
