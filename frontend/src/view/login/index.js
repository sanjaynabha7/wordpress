import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/actions";
import { addUser } from "../../store/actions/users";
import { Link } from 'react-router-dom'
class LoginView extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    debugger
    let data = JSON.parse(localStorage.getItem("USER"));
    if (data) {
      this.props.history.push('/');
    }
  }
  componentDidUpdate() {
    if (this.props.LOGIN.User) {
      this.checkUserAndRedirect();
    }
  }


  login = async ($e) => {
    $e.preventDefault();
    let payload = {
      email: this.state.email,
      password: this.state.password,
      isLogin: true
    }
    await this.props.login(payload);

    console.log("Working")
  }

  checkUserAndRedirect = () => {

    if (this.props.LOGIN.User) {


      this.props.history.push('/');

    }
  }

  render() {

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
                  <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                </div>
                <div className="input-group mb-4">
                  <input type="password" className="form-control" placeholder="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <button className="btn btn-primary shadow-2 mb-4" onClick={this.login}>Login</button>
                {/* <p className="mb-2 text-muted">Forgot password? <a href="auth-reset-password.html">Reset</a></p> */}
                <p className="mb-0 text-muted">Don???t have an account? <Link to={"/sign-up"}>Signup</Link> </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ USER, LOGIN }) => ({ USER, LOGIN });
export default connect(mapStateToProps, { login })(LoginView);
