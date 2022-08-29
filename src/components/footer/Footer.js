import React from "react";
import "./Footer.css";
import footerLogo from './../../assets/images/footer-tutor-logo.png';

export default function Footer(props) {
  return (
    <footer className="section bg-footer">
        <div className="container-fluid pl-5 pr-5">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div>
                        <img src={footerLogo} width="140px" height="54px" alt="" />
                        <ul className="list-inline footer-social-icons">
                            <li className="list-inline-item facebookicon">
                                <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li className="list-inline-item twittericon">
                                <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                            </li>
                            <li className="list-inline-item instagramicon">
                                <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="">
                                <h6 className="footer-heading  text-white">About Us</h6>
                                <ul className="list-unstyled footer-link mt-2">
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#" >Blogs</a></li>
                                    <li><a href="#">Partner With Us</a></li>
                                    <li><a href="#">About Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="">
                                <h6 className="footer-heading  text-white">Learn</h6>
                                <ul className="list-unstyled footer-link mt-2">
                                    <li> <a href="#" className="">Learner</a></li>
                                    <li> <a href="#" className="">Tutor</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="">
                                <h6 className="footer-heading  text-white">Support</h6>
                                <ul className="list-unstyled footer-link mt-2">
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-5 justify-content-center d-flex col-md-6">
                    <div>
                        <h6 className="footer-heading  text-white"></h6>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-7">
                    <p className="footer-alt mb-0 f-14">©2022 Pangiah. All Rights Reserved. </p>
                </div>
                <div className="col-2 ml-5 ">
                    <a href="#">
                        <p className="footer-alt mb-0 f-14">Terms & Conditions  </p>
                    </a>
                </div>
                <div className="col-2 d-flex ">
                <a href="#">
                    <p className="footer-alt mb-0 f-14"> Privacy Policy</p>
                </a>
                </div>
            </div>
        </div>
    </footer>
  );
}

