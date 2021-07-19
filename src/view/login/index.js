import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions/productsA";
import GridExample from '../../components/ag'
import Header from '../../components/header'
import Footer from '../../components/footer'
class LoginView extends Component {
state = {
  data: []
}

 async componentDidMount() {
     await this.props.getProducts()   
     const allProduct = this.props.ProductsR
     this.setState({data:allProduct})
  }

  render() {
    const allData = this.state.data
    return (
      <>
  <div className="auth-wrapper">
        <div className="auth-content">
            <div className="auth-bg">
                <span className="r"></span>
                <span className="r s"></span>
                <span className="r s"></span>
                <span className="r"></span>
            </div>
            <div className="card">
                <div className="card-body text-center">
                    <div className="mb-4">
                        <i className="feather icon-unlock auth-icon"></i>
                    </div>
                    <h3 className="mb-4">Login</h3>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="input-group mb-4">
                        <input type="password" className="form-control" placeholder="password"/>
                    </div>
                    <button className="btn btn-primary shadow-2 mb-4">Login</button>
                    <p className="mb-2 text-muted">Forgot password? <a href="auth-reset-password.html">Reset</a></p>
                    <p className="mb-0 text-muted">Don’t have an account? <a href="auth-signup.html">Signup  </a></p>
                </div>
            </div>
        </div>
    </div>
      </>
    ); 
  }
}

const mapStateToProps = ({ ProductsR }) => ({ ProductsR });
export default connect(mapStateToProps, { getProducts})(LoginView);
