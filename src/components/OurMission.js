import React from 'react';
import {Link} from 'react-router-dom';
// import CountUp from 'react-countup';


import slide from './../assets/images/main-slider/pic1.png';

const CounterBlog = [
    {title:"Total Donor", number:"4556"},
    {title:"Volunteer", number:"874"},
    {title:"Total Donation", number:"195234"},
];

const OurMission = () =>{
    return(
        <>
            <div className="col-lg-5">
                <div className="dz-media">
                    <img src={slide} alt="image" />
                </div>
            </div>
            <div className="col-lg-7 m-b50">
                <div className="section-head">
                    <h5 className="sub-title">About us</h5>
                    <h2>Empowering Orphans and Vulnerable Children</h2>
                    <p className="m-t20">At the Bauchi State AHMAD IBRAHIM MUHAMMAD , our mission is to provide support and create opportunities for a brighter future for children in need. Through our dedicated programs and compassionate care, we focus on addressing the unique challenges faced by orphans and vulnerable children in our community. By fostering hope and resilience, we AIM to build a foundation where every child can thrive and reach their full potential.</p>
                </div>
                <div className="row">
                    {CounterBlog.map((item, index)=>(
                        <div className="col-lg-3 col-sm-4 col-6 m-b30" key={index}>
                            
                          
                        </div>
                    ))} 
                </div>
                <Link to={"/project"} className="m-r30 m-sm-r10 btn btn-secondary">See Projects <i className="flaticon-right-arrows ps-3"></i></Link>
            
            </div>
        </>
    )
}
export default OurMission;