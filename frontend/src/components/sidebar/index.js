import React, { Component } from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import PagesIcon from '@material-ui/icons/Pages';
import {Link} from 'react-router-dom'
class Sidebar extends Component {
    constructor(props) { 
        super(props);
        this.state = {}
    }
    render() {
        return (<>
            {/*   
                <div className="loader-bg">
                    <div className="loader-track">
                        <div className="loader-fill"></div>
                    </div>
                </div> */}

            <nav className="pcoded-navbar">
                <div className="navbar-wrapper">
                    <div className="navbar-brand header-logo">
                        <a href="index.html" className="b-brand">
                            <div className="b-bg">
                                <i className="feather icon-trending-up"></i>
                            </div>
                            <span className="b-title">Wordpress</span>
                        </a>
                        <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
                    </div>
                    <div className="navbar-content scroll-div">
                        <ul className="nav pcoded-inner-navbar">
                            <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item ">
                                <a href="index.html" className="nav-link "><span className="pcoded-micon"><DashboardIcon/></span><span className="pcoded-mtext">Dashborad</span></a>
                            </li>
                            <li data-username="form elements advance componant validation masking wizard picker select" className="nav-item active">
                                <Link to={"/posts"} className="nav-link "><span className="pcoded-micon"><PostAddIcon/></span><span className="pcoded-mtext">Posts</span></Link>
                                <Link to={"/new-post"} className="nav-link "><span className="pcoded-mtext">Add post</span></Link>
                                <Link to={"/category"} className="nav-link "><span className="pcoded-mtext">Category</span></Link>
                            </li>
                            <li data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
                                <a href="form_elements.html" className="nav-link "><span className="pcoded-micon"><PermMediaIcon/></span><span className="pcoded-mtext">Media</span></a>
                            </li>
                            <li data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
                                <a href="form_elements.html" className="nav-link "><span className="pcoded-micon"><PagesIcon/></span><span className="pcoded-mtext">Pages</span></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>);
    }
}

export default Sidebar;