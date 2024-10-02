import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import PageBanner from '../layouts/PageBanner';
import ProjectMasonry from '../components/Project/ProjectMasonry';
import UpdateBlog from '../components/Home/UpdateBlog';

import bg from '../assets/images/banner/bnr1.jpg';

const Experience = () => {
    const [dropbtn2, setDropbtn2] = useState('All Category');
    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Ahmad Ibrahim Muhammad" pagetitle="Experience" background={bg} />
                <div className="find-bx-wrapper">
                    <div className="container">
                        <div className="find-bx bg-white">
                            <form>
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="">
                                            <Dropdown className="select-drop-2">
                                                <Dropdown.Toggle as="div" className="i-false select-drop-btn-2">
                                                    <span>{dropbtn2}</span>
                                                    <i className="fa-regular fa-angle-down"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => setDropbtn2('All Category')}>All Category</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setDropbtn2('Education')}>Education</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setDropbtn2('Political Experience')}>Political Experience</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-8">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Experience" />
                                            <div className="input-group-prepend">
                                                <button className="btn"><i className="las la-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="tag-list">
                            <span className="title text-black">Popular Search:</span>
                            <Link to={"#"}>Education,</Link>
                            <Link to={"#"}>Politics,</Link>
                            <Link to={"#"}>Leadership,</Link>
                            <Link to={"#"}>Development</Link>
                        </div>
                    </div>
                </div>

                <section className="content-inner-2">
                    <div className="container">
                        <h2>Academic Qualifications</h2>
                        <ul>
                            <li>Masters in Developmental Studies - Nassarawa State University (2018)</li>
                            <li>Postgraduate Diploma in Education (PGDE) - FCE Kano (2015)</li>
                            <li>BSc in Geography - Bayero University Kano (1999)</li>
                            <li>Senior Secondary School Certificate - Government Secondary School Dambatta (1993)</li>
                        </ul>

                        <h2>Political Experience</h2>
                        <ul>
                            <li>Chairman, Kwankwasiya Tarauni Local Government (2016-2023)</li>
                            <li>Caucus Chairman, Tarauni Local Government (2023-2024)</li>
                            <li>Member, His Excellency Engr. Dr. Rabiu Musa Kwankwaso Presidential Election Committee (2015, 2019, 2023)</li>
                            <li>Chairmanship Aspirant, Tarauni Local Government (2007)</li>
                            <li>Member, Governorship Campaign Committee for His Excellency Engr. Dr. Rabiu Musa Kwankwaso (2011)</li>
                        </ul>
                    </div>
                </section>

                <div className="call-action style-1 content-inner-1">
                    <div className="container">
                        <UpdateBlog />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;
