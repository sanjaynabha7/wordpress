import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions/productsA";
class SignUpView extends Component {
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
 <div class="auth-wrapper">
        <div class="auth-content">
            <div class="auth-bg">
                <span class="r"></span>
                <span class="r s"></span>
                <span class="r s"></span>
                <span class="r"></span>
            </div>
            <div class="card">
                <div class="card-body text-center">
                    <div class="mb-4">
                        <i class="feather icon-user-plus auth-icon"></i>
                    </div>
                    <h3 class="mb-4">Sign up</h3>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username"/>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email"/>
                    </div>
                    <div class="input-group mb-4">
                        <input type="password" class="form-control" placeholder="password"/>
                    </div>

                    <button class="btn btn-primary shadow-2 mb-4">Sign up</button>
                    <p class="mb-0 text-muted">Allready have an account? <a href="auth-signin.html"> Log in</a></p>
                </div>
            </div>
        </div>
    </div>
      </>
    ); 
  }
}

const mapStateToProps = ({ ProductsR }) => ({ ProductsR });
export default connect(mapStateToProps, { getProducts})(SignUpView);
