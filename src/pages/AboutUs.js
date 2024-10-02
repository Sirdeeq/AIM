
import React from 'react';
import { Link } from 'react-router-dom';

import PageBanner from './../layouts/PageBanner';

//images
import bgImage from './../assets/images/banner/bnr1.jpg';
import pic1 from './../assets/images/aim/basovca logo.png';
import about from './../assets/images/aim/pic.png';
import bg4 from './../assets/images/background/bg4.jpg';

//import shape1 from './../assets/images/pattern/shape1.png';
//import shape2 from './../assets/images/pattern/shape2.png';
//import shape3 from './../assets/images/pattern/shape3.png';
//import shape5 from './../assets/images/pattern/shape5.png';
//import shape6 from './../assets/images/pattern/shape6.png';
// import NewsSlider from '../components/Home/NewsSlider';
import UpdateBlog from '../components/Home/UpdateBlog';
import OurMission from '../components/OurMission';
import { IMAGES } from '../constant/theme';
// import { color } from 'chart.js/helpers';

const iconBlog = [
    { title: "Mission and Vision" },

];

const wrapperBlog = [
    { icon: "flaticon-vr-glasses", title: "Comprehensive Support" },
    { icon: "flaticon-transformation", title: "Deep Local Impact" },
    { icon: "flaticon-doctor-bag", title: "Transparency and Accountability" },
    { icon: "flaticon-open-book", title: "Community Engagement:" },
];


const AboutUs = () => {
    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Home" pagetitle="About Us" background={bgImage} />
                <section className="content-inner section-wrapper5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="section-head">
                                    <h5 className="sub-title">Who We Are</h5>
                                    <h2>ABOUT AIM</h2>
                                    <p className="m-t20">Ahmad Ibrahim Muhammad is a visionary political figure with a strong commitment to public service, governance, and community development. His vast experience across various leadership roles in politics and government institutions has shaped his unwavering dedication to enhancing social justice and equitable access to essential services in Nigeria.</p>
                                </div>
                                {iconBlog.map((data, index) => (
                                    <div className="icon-bx-wraper box-hover style-2 m-b30" key={index}>
                                        <div className="icon-lg">
                                            <Link to={"/services-details"} className="icon-cell">
                                                <i className="flaticon-shield"></i>
                                            </Link>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dz-tilte m-b5 text-capitalize">{data.title}</h5>
                                            <p>
                                                <p>Mission</p>
                                                To utilize my political and leadership experience to promote inclusive governance, social equity, and sustainable development, ensuring that every Nigerian has access to basic social services, opportunities, and justice.
                                            </p>
                                            <p>
                                                <p>Vision</p>
                                                To create a society where governance is transparent, communities are empowered, and every citizen, regardless of background, enjoys equal opportunities in health, education, and socioeconomic growth.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-lg-5 m-b30">
                                <div className="dz-media">
                                    <img src={pic1} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="content-inner-2 bg-light section-pattren1">
                    <div className="container">
                        <div className="row about-bx3 align-items-center">
                            <OurMission />
                        </div>
                    </div>
                    <img src={IMAGES.Shape1} className="shape-1 move-1" alt="shape" />
                    <img src={IMAGES.Shape2} className="shape-2 move-2" alt="shape" />
                    <img src={IMAGES.Shape3} className="shape-3 move-1" alt="shape" />
                    <img src={IMAGES.Shape5} className="shape-4 rotating" alt="shape" />
                    <img src={IMAGES.Shape6} className="shape-5 rotating" alt="shape" />
                    <img src={IMAGES.Shape6} className="shape-6 rotating" alt="shape" />
                </section> */}

                <section className="content-inner">
                    <div className="container">
                        <div className="section-head text-center">
                            <h5 className="sub-title">ABOUT AHMAD IBRAHIM MUHAMMAD</h5>
                        </div>
                        <div className="row">
                            {wrapperBlog.map((item, ind) => (
                                <div className="col-lg-6 col-md-12 col-sm-12" key={ind}>
                                    <div className="icon-bx-wraper box-hover style-2 m-b30">
                                        <div className="icon-lg">
                                            <Link to={"/services-details"} className="icon-cell">
                                                <i className={item.icon}></i>
                                            </Link>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dz-title m-b10 text-capitalize">{item.title}</h5>
                                            <p>Ahmad Ibrahim Muhammad, a seasoned politician from Tarauni, Kano State, has dedicated his career to public service and community development. His journey in politics began in 2003 as an Exco member for Babban Giji Ward, Tarauni, and has spanned leadership roles such as Chairman of Kwankwasiya Tarauni Local Government and a key member of various election committees for His Excellency Engr Dr Rabiu Musa Kwankwaso. With a Master’s degree in Developmental Studies, Ahmad brings a deep understanding of governance, paired with decades of experience in both governmental and intergovernmental roles, shaping him as a formidable leader committed to impactful governance.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* <section className="content-inner-2 overlay-primary-dark about-wrapper2 bg-img-fix" style={{backgroundImage:"url("+ bg4 +")",  backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className="container">
                        <div className="about-bx2">
                            <div className="row g-0">
                                <div className="col-lg-4">
                                    <div className="dz-media">
                                        <img src={about} alt="image" />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="dz-info">
                                        <h2 className="title m-b30 m-md-b20">About Haj.Yalwa T Balewa</h2>
                                        <h5 className="title m-b30 m-md-b20">The Executive Chairperson AIM Bauchi</h5>
                                     
                                        <div className="signature">
                                            
                                            <p className="text-dark m-t15 mb-0"> The Executive Chairperson of the Bauchi State AHMAD IBRAHIM MUHAMMAD  (AIM) is a dedicated leader focused on improving the lives of orphans and vulnerable children in Bauchi State. With a background in child welfare and community development, the Chairperson is committed to creating a safe environment where every child can thrive.
Under their leadership, AIM has strengthened its efforts in providing essential services like education, healthcare, and psychosocial support. Their strategic approach and passion for the cause have been instrumental in driving the agency’s mission forward.
</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <div className="call-action style-1 content-inner-1">
                    <div className="container">
                        <UpdateBlog />
                    </div>
                </div>
            </div>
        </>
    );
};


export default AboutUs;