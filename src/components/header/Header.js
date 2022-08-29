import React from "react";
import "./Header.css";
import logo from './../../assets/images/logo.png';
import cart from './../../assets/images/cart.png';

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-sm-bg" style={{background: 'white', paddingTop: '30px', paddingBottom: '20px'}}>
            <a href="/" className="navbar-brand"><img src={logo} alt=""/> </a>
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <div className="navbar-nav nav-margin" style={{marginLeft: '60px'}}>
                    <div className="nav-item">
                        <a href="/" className="nav-item nav-link">Home</a>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">About</a>
                        <div className="dropdown-menu arrow-top">
                            <a href="#" className="dropdown-item">Blogs</a>
                            <a href="#" className="dropdown-item">Partner With Us</a>
                            <a href="#" className="dropdown-item">FAQs</a>
                            <a href="#" className="dropdown-item">Support</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Learner</a>
                        <div className="dropdown-menu arrow-top">
                            <a href="#" className="dropdown-item">Why Join Us?</a>
                            <a href="#" className="dropdown-item">Blogs</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Tutor</a>
                        <div className="dropdown-menu arrow-top">
                            <a href="#" className="dropdown-item">Why Join Us?</a>
                            <a href="#" className="dropdown-item">Blogs</a>
                        </div>
                    </div>
                </div>
                <div className="navbar-nav action-buttons ml-lg-auto d-flex flex-md-row align-items-center ml-md-3 mt-md-2 ml-lg-0 mt-lg-0">
                    <a href="#" className="position-relative mr-3">
                        <img src={cart} alt="" width="40px" height="40px"/>
                        <span className="badge badge-pill badge-dark " style={{position: 'absolute', top: '-5px', right: '-6px'}} >0</span>
                    </a>
                    <a href="#" data-toggle="" className="nav-item nav-link dropdown-toggle mr-3 login_btn"  style={{background: 'white'}} >Login</a>
                    <a href="#" className="signup_btn">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}