import React from 'react';
// import {Link} from 'react-router-dom';

//images
import pic1 from './../../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/1.jpeg';
import pic2 from './../../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/11.jpeg';
import pic3 from './../../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/24.jpeg';
import avatar from './../../assets/images/aim/basovca logo.png';

const StoryBlog = () => {
    function isScrolledIntoView(elem){
        const spliBox = document.querySelectorAll(elem);
        
        spliBox.forEach(myFunction);
        function myFunction(item) {

            const docViewTop = window.scrollY;

            const docViewBottom = docViewTop + window.innerHeight;

            let elemTop = item.getBoundingClientRect().top + docViewTop;

            const elemBottom = elemTop + item.offsetHeight;

            if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){               
                item.classList.add('split-active');
            }
          }
    }
    window.addEventListener("scroll", () => {
        isScrolledIntoView('.split-box');
    });   
    return(
        <>
            {/* Activity 1 */}
            <div className="row align-items-center project-bx left m-b30">
                <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.2s">    
                    <div className="dz-media split-box">
                        <div>
                            <img src={pic1} alt="Empowerment program 2023" className="app-1" />
                        </div>
                    </div> 
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="dz-content wow fadeInUp" data-wow-delay="0.4s">
                        <h3 className="title m-b15">Empowerment Program for HHS 2023</h3>
                        <p className="m-b0">
                        Ahmad Ibrahim Muhammad successfully led an empowerment program for the HHS in 2023. The initiative provided essential skills and resources to vulnerable individuals, empowering them for a sustainable future.
                        </p>
                        <div className="fund-count m-t30 m-md-t20">
                            <div className="icon-content">
                                <h2 className="text-primary"> <span className="counter">25-07-2023</span></h2>
                                <h6>Kano State</h6>
                            </div>
                        </div>
                        <div className="author-wrappper">
                            <div className="author-media">
                                <img src={avatar} alt="Ahmad Ibrahim Muhammad" /> 
                            </div>
                            <div className="author-content">
                                <div className="author-head">
                                    <h6 className="author-name">Ahmad Ibrahim Muhammad</h6>
                                    <ul className="rating-list">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star gray-light"></i></li>
                                        <li><i className="fa fa-star gray-light"></i></li>
                                    </ul>
                                </div>
                                <ul className="author-meta">
                                    <li className="location">Kano State, Nigeria</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            {/* Activity 2 */}
            <div className="row align-items-center project-bx left m-b30">
                <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.2s">    
                    <div className="dz-media split-box">
                        <div>
                            <img src={pic2} alt="Empowerment program 2022" className="app-1" />
                        </div>
                    </div> 
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="dz-content wow fadeInUp" data-wow-delay="0.4s">
                        <h3 className="title m-b15">Empowerment Program for HHS 2022</h3>
                        <p className="m-b0">
                        In 2022, Ahmad Ibrahim Muhammad launched another successful program SAIKUREed at equipping individuals with skills to improve their livelihoods. This program laid the foundation for sustainable development among the participants.
                        </p>
                        <div className="fund-count m-t30 m-md-t20">
                            <div className="icon-content">
                                <h2 className="text-primary"> <span className="counter">12-08-2022</span></h2>
                                <h6>Kano State</h6>
                            </div>
                        </div>
                        <div className="author-wrappper">
                            <div className="author-media">
                                <img src={avatar} alt="Ahmad Ibrahim Muhammad" /> 
                            </div>
                            <div className="author-content">
                                <div className="author-head">
                                    <h6 className="author-name">Ahmad Ibrahim Muhammad</h6>
                                    <ul className="rating-list">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star gray-light"></i></li>
                                        <li><i className="fa fa-star gray-light"></i></li>
                                    </ul>
                                </div>
                                <ul className="author-meta">
                                    <li className="location">Kano State, Nigeria</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Activity 3 */}
            <div className="row align-items-center project-bx left m-b30">
                <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.2s">    
                    <div className="dz-media split-box">
                        <div>
                            <img src={pic3} alt="Ongoing training program" className="app-1" />
                        </div>
                    </div> 
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="dz-content wow fadeInUp" data-wow-delay="0.4s">
                        <h3 className="title m-b15">Ongoing Training for Community Members</h3>
                        <p className="m-b0">
                        Currently, Ahmad Ibrahim Muhammad is spearheading a training program to equip community members with technical skills. This initiative SAIKUREs to reduce unemployment and foster self-reliance among the vulnerable.
                        </p>
                        <div className="fund-count m-t30 m-md-t20">
                            <div className="icon-content">
                                <h2 className="text-primary"> <span className="counter">15-09-2024</span></h2>
                                <h6>Kano State</h6>
                            </div>
                        </div>
                        <div className="author-wrappper">
                            <div className="author-media">
                                <img src={avatar} alt="Ahmad Ibrahim Muhammad" /> 
                            </div>
                            <div className="author-content">
                                <div className="author-head">
                                    <h6 className="author-name">Ahmad Ibrahim Muhammad</h6>
                                    <ul className="rating-list">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star gray-light"></i></li>
                                        <li><i className="fa fa-star gray-light"></i></li>
                                    </ul>
                                </div>
                                <ul className="author-meta">
                                    <li className="location">Kano State, Nigeria</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StoryBlog;
