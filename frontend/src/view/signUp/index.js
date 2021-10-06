import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../../store/actions/users";
import { Link } from 'react-router-dom'
class SignUpView extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
    }

    AddUser = async ($e) => {
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
                                    <i className="feather icon-user-plus auth-icon"></i>
                                </div>
                                <h3 className="mb-4">Sign up</h3>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="First Name" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" value={this.state.Email} onChange={(e) => this.setState({ Email: e.target.value })} />
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="password" value={this.state.Password} onChange={(e) => this.setState({ Password: e.target.value })} />
                                </div>

                                <button className="btn btn-primary shadow-2 mb-4" onClick={this.AddUser}>Sign up</button>
                                <p className="mb-0 text-muted">Allready have an account? <Link to={"/login"}>Log in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ USER_REDUCER }) => ({ USER_REDUCER });
export default connect(mapStateToProps, { addUser })(SignUpView);
