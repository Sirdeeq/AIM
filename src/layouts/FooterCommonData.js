/* eslint-disable react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';

const FooterCommonData = ({logoImage, iconStyle}) => {
    return (
        <>
            <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="widget widget_about">
                    <div className="footer-logo logo-white">
                        <Link to={"/"}><img src={logoImage} alt="" /></Link> 
                    </div>
                    <p>AHMAD IBRAHIM MUHAMMAD </p>
                    <div className="dz-social-icon style-1">
                        <ul>
                            <li><a target="_blank" className="fab fa-facebook-f"  rel="noreferrer" href="https://www.facebook.com/"></a></li>
                            {" "}<li><a target="_blank" className="fab fa-linkedin"  rel="noreferrer" href="https://www.linkedin.com/in/AIM-bauchi-4513a6215/recent-activity/images/"></a></li>
                            {" "}<li><a target="_blank" className="fab fa-twitter"  rel="noreferrer" href="https://twitter.com/"></a></li>
                            {" "}<li><a target="_blank" className="fab fa-youtube"  rel="noreferrer" href="https://youtube.com/"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
           
            <div className="col-xl-2 col-lg-4 col-md-3 col-6">
                <div className="widget widget_services">
                    <h5 className="footer-title">Links</h5>
                    <ul>
                        <li><Link to={"/about-us"}>About Us</Link></li>
                      
                        
                        <li><Link to={"/project"}>Project</Link></li>
                        <li><Link to={"/contact-us"}>Contact Us</Link></li>
                        {/* <li><Link to={"/faq"}>Faq</Link></li> */}
                    </ul>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="widget widget_getintuch">
                    <h5 className="footer-title">Get in Touch with Us</h5>
                    <ul>
                        <li>
                            {iconStyle   ? 
                                <i className="fas fa-map-marker-alt text-primary"></i>
                                :  
                                <i className="fas fa-map-marker-alt"></i>
                            }
                            <span>XGGP+9HQ, Zoo Rd, Albasa, Kano 700101, Kano</span>
                        </li>
                        <li>
                            {iconStyle   ? 
                                <i className="fa-solid fa-phone text-primary"></i>
                                :
                                <i className="fa-solid fa-phone"></i>
                            }
                            <span>080</span>
                        </li>
                        <li>
                            {iconStyle   ? 
                                <i className="fa fa-envelope text-primary"></i> 
                                :
                                <i className="fa fa-envelope"></i> 
                            }
                            <span>saikure@support.ng</span>
                        </li>
                    </ul>
                </div>
            </div> 
        </>
    );
};

export default FooterCommonData;
