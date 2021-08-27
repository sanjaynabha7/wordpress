import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../../store/actions/users";
class SignUpView extends Component {
state = {
  data: []
}

 async componentDidMount() {
  }

  AddUser  = async ($e) => {
      debugger
    $e.preventDefault();
    let payload = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.Email,
        password: this.state.Password,
    }
    await this.props.addUser(payload);
  }

  render() {
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
                        <input type="text" class="form-control" placeholder="First Name" value={this.state.firstName}  onChange={(e) => this.setState({ firstName: e.target.value })}/>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Last Name" value={this.state.lastName}  onChange={(e) => this.setState({ lastName: e.target.value })}/>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email" value={this.state.Email}  onChange={(e) => this.setState({ Email: e.target.value })}/>
                    </div>
                    <div class="input-group mb-4">
                        <input type="password" class="form-control" placeholder="password" value={this.state.Password}  onChange={(e) => this.setState({ Password: e.target.value })}/>
                    </div>

                    <button class="btn btn-primary shadow-2 mb-4"  onClick={this.AddUser}>Sign up</button>
                    <p class="mb-0 text-muted">Allready have an account? <a href="auth-signin.html"> Log in</a></p>
                </div>
            </div>
        </div>
    </div>
      </>
    ); 
  }
}

const mapStateToProps = ({ USER_REDUCER }) => ({ USER_REDUCER });
export default connect(mapStateToProps, { addUser})(SignUpView);
