import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

import PageBanner from './../layouts/PageBanner';
import bgImage from './../assets/images/banner/bnr4.jpg';
import project3 from './../assets/images/project/pic3.jpg';
import project2 from './../assets/images/project/pic2.jpg';
import project6 from './../assets/images/project/pic6.jpg';
import UpdateBlog from '../components/Home/UpdateBlog';

// FAQ Content about Ahmad Ibrahim Muhammad
const accordBlog = [
    { title: "What is Ahmad Ibrahim Muhammad's Vision for Tarauni?" },
    { title: "How does Ahmad Ibrahim plan to empower vulnerable groups?" },
    { title: "What experience does Ahmad Ibrahim bring to the role of Chairman?" },
];

const Faq = () => {
    function isScrolledIntoView(elem) {
        const spliBox = document.querySelectorAll(elem);
        spliBox.forEach(myFunction);
        function myFunction(item, index) {
            console.log('splitbox', item);
            const docViewTop = window.scrollY;
            const docViewBottom = docViewTop + window.innerHeight;
            let elemTop = item.getBoundingClientRect().top + docViewTop;
            const elemBottom = elemTop + item.offsetHeight;
            if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
                item.classList.add('split-active');
            }
        }
    }
    window.addEventListener("scroll", () => {
        isScrolledIntoView('.split-box');
    });

    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Home" pagetitle="FAQ about Ahmad Ibrahim Muhammad" background={bgImage} />
                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center flex-column-reverse flex-lg-row">
                            <div className="col-lg-6 align-self-center">
                                <div className="section-head m-b30">
                                    <h2 className="title">Who is Ahmad Ibrahim Muhammad?</h2>
                                    <p>Ahmad Ibrahim Muhammad, also known as Sekure, is running for the position of Chairman of Tarauni Local Government in the 2024 Local Government Elections. With a strong background in community empowerment and leadership, Ahmad is committed to bringing positive change to the people of Tarauni.</p>
                                </div>
                                <Accordion className="accordion dz-accordion accordion-sm" id="accordionFaq1">
                                    {accordBlog.map((item, index) => (
                                        <Accordion.Item className="accordion-item" key={index} eventKey={index}>
                                            <Accordion.Header as="h2" id="headingOne1">
                                                {item.title}
                                                <span className="toggle-close"></span>
                                            </Accordion.Header>
                                            <div id="collapseOne1" className="accordion-collapse " eventKey={index}>
                                                <Accordion.Body >
                                                    <p className="m-b0">
                                                        {index === 0 && "Ahmad Ibrahim Muhammad's vision for Tarauni focuses on community-driven solutions, improving local infrastructure, ensuring quality education, and empowering the most vulnerable members of society through targeted programs."}
                                                        {index === 1 && "Ahmad has successfully conducted empowerment programs for vulnerable groups in 2022 and 2023, providing essential skills and resources to orphans, vulnerable children, and women. His commitment to uplifting the community is unwavering."}
                                                        {index === 2 && "With a proven track record of community leadership and social impact, Ahmad's experience in public service and grassroots initiatives makes him an ideal candidate to lead Tarauni towards sustainable growth and inclusivity."}
                                                    </p>
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 m-b30">
                                <div className="dz-media split-box rounded">
                                    <div>
                                        <img src={project3} alt="Ahmad Ibrahim Muhammad" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-light content-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 m-b30">
                                <div className="dz-media split-box rounded">
                                    <div>
                                        <img src={project2} alt="Empowerment Program" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center m-b10">
                                <div className="section-head m-b30">
                                    <h2 className="title">How Does Ahmad Ensure Accountability?</h2>
                                    <p>Ahmad Ibrahim Muhammad believes in transparent governance and community participation. His approach is grounded in the principles of the Kwankwasiyyah movement, ensuring that resources are managed responsibly for the benefit of Tarauni residents.</p>
                                </div>
                                <Accordion className="accordion dz-accordion accordion-sm" id="accordionFaq2">
                                    {accordBlog.map((item, index) => (
                                        <Accordion.Item className="accordion-item" key={index} eventKey={index}>
                                            <Accordion.Header as="h2" id="headingTwo1">
                                                {item.title}
                                                <span className="toggle-close"></span>
                                            </Accordion.Header>
                                            <div id="collapseTwo1" className="accordion-collapse" eventKey={index}>
                                                <Accordion.Body>
                                                    <p className="m-b0">
                                                        {index === 0 && "Ahmad's vision is to create a more inclusive, transparent, and people-oriented leadership in Tarauni, focusing on addressing key challenges such as unemployment, healthcare, and infrastructure."}
                                                        {index === 1 && "Empowering vulnerable groups is central to Ahmad's strategy. He has consistently worked with orphans, vulnerable children, and marginalized women, ensuring they receive skills training and support."}
                                                        {index === 2 && "With years of experience in social development, Ahmad's leadership is rooted in his ability to connect with the community and understand their needs. His previous empowerment programs are a testament to his dedication."}
                                                    </p>
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-inner-2">
                    <div className="container">
                        <div className="row align-items-center flex-column-reverse flex-lg-row">
                            <div className="col-lg-6 align-self-center">
                                <div className="section-head m-b30">
                                    <h2 className="title">Frequently Asked Questions</h2>
                                    <p>Learn more about Ahmad Ibrahim Muhammad's campaign, his approach to leadership, and how he plans to address the needs of Tarauni's diverse community.</p>
                                </div>
                                <Accordion className="accordion dz-accordion accordion-sm" id="accordionFaq3">
                                    {accordBlog.map((item, index) => (
                                        <Accordion.Item className="accordion-item" key={index} eventKey={index}>
                                            <Accordion.Header as="h2" id="headingThree1">
                                                {item.title}
                                                <span className="toggle-close"></span>
                                            </Accordion.Header>
                                            <div id="collapseThree1" className="accordion-collapse " eventKey={index}>
                                                <Accordion.Body>
                                                    <p className="m-b0">
                                                        {index === 0 && "Ahmad's vision is to build a prosperous Tarauni through education, youth and women empowerment, and enhancing public infrastructure."}
                                                        {index === 1 && "His empowerment programs focus on giving the vulnerable groups in the community the tools and resources they need to improve their livelihoods and become self-sufficient."}
                                                        {index === 2 && "Ahmad has a history of impactful leadership and will bring his experience in community engagement, policy development, and social welfare to the role of Chairman."}
                                                    </p>
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 m-b30">
                                <div className="dz-media split-box rounded">
                                    <div>
                                        <img src={project6} alt="Leadership and Empowerment" />
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default Faq;

