/* eslint-disable react/jsx-no-duplicate-props */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { Link } from "react-router-dom";

import PageBanner from "../layouts/PageBanner";
import UpdateBlog from "./../components/Home/UpdateBlog";

import bg from "../assets/images/banner/bnr1.jpg";
import shape1 from "../assets/images/pattern/shape1.png";
import shape3 from "../assets/images/pattern/shape3.png";
import shape5 from "../assets/images/pattern/shape5.png";
import shape6 from "../assets/images/pattern/shape6.png";
import shape7 from "../assets/images/pattern/shape7.png";

const cardBlog = [
  {
    title: "Call Us",
    subtitle: "080",
    icon: "flaticon-phone-call-1",
  },
  { title: "Email Us", subtitle: "saikure@support.ng", icon: "flaticon-email" },
  {
    title: "Our Address",
    subtitle:
      "XGGP+9HQ, Zoo Rd, Albasa, Kano 700101, Kano",
    icon: "flaticon-pin",
  },
];

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gfykn6i",
        "template_iy1pb0b",
        e.target,
        "HccoOtZS6GHw-N-m6"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal("Good job!", "Form successfully submitted", "success");
        },
        (error) => {
          console.log(error.text);
          swal("Oops!", "Something went wrong. Please try again.", "error");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="page-content bg-white">
        {/* Page Banner */}
        <PageBanner maintitle="Contact SAIKURE" pagetitle="Get in Touch" background={bg} />

        {/* Contact Details Section */}
        <section className="content-inner-1 bg-light section-pattren1">
          <div className="container">
            <div className="row justify-content-center">
              {cardBlog.map((item, ind) => (
                <div className="col-lg-4 col-md-6 m-b20" key={ind}>
                  <div className="icon-bx-wraper box-hover style-3">
                    <div className="icon-lg">
                      <Link to={"/services-details"} className="icon-cell">
                        <i className={item.icon}></i>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-tilte m-b5 text-capitalize">
                        {item.title}
                      </h5>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img src={shape1} className="shape-1 move-1" alt="shape" />
          <img src={shape3} className="shape-3 move-1" alt="shape" />
          <img src={shape5} className="shape-4 rotating" alt="shape" />
          <img src={shape6} className="shape-5 rotating" alt="shape" />
        </section>

        {/* Google Maps Section */}
        <section className="content-inner map-wrapper1">
          <div className="container-fluid">
            <div className="map-iframe style-1">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.978823238272!2d8.5339186744555!3d11.975967088255302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81afd56ae39b%3A0x33ab3210206cef86!2sGEZAWAD%20COMMUNICATION!5e0!3m2!1sen!2sng!4v1728000046534!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.978823238272!2d8.5339186744555!3d11.975967088255302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81afd56ae39b%3A0x33ab3210206cef86!2sGEZAWAD%20COMMUNICATION!5e0!3m2!1sen!2sng!4v1728000046534!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            <div className="row justify-content-end">
              <div className="col-xl-6 col-lg-8 col-sm-12">
                <div className="contact-info form-wrapper style-1">
                  <h2 className="title">Send Us a Message</h2>
                  <div className="contact-area">
                    <form
                      className="dz-form dzForm contact-bx"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <div className="dzFormMsg"></div>
                      <input
                        type="hidden"
                        className="form-control"
                        name="dzToDo"
                        value="Contact"
                      />
                      <div className="row sp15">
                        <div className="col-md-6">
                          <label className="form-label">First Name</label>
                          <div className="input-group">
                            <input
                              name="dzFirstName"
                              required
                              type="text"
                              className="form-control"
                              placeholder="e.g. Yusuf"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Last Name</label>
                          <div className="input-group">
                            <input
                              name="dzLastName"
                              required
                              type="text"
                              className="form-control"
                              placeholder="e.g. Ali"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email Address</label>
                          <div className="input-group">
                            <input
                              name="dzEmail"
                              required
                              type="email"
                              className="form-control"
                              placeholder="info@example.com"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Phone Number</label>
                          <div className="input-group">
                            <input
                              name="dzPhoneNumber"
                              required
                              type="text"
                              className="form-control"
                              placeholder="+234"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <label className="form-label">Message</label>
                          <div className="input-group">
                            <textarea
                              name="dzMessage"
                              rows="7"
                              required
                              className="form-control"
                              placeholder="Write your message here"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            name="submit"
                            type="submit"
                            value="Submit"
                            className="btn btn-secondary"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={shape5} className="shape-2 move-2" alt="shape" />
          <img src={shape7} className="shape-1 move-2" alt="shape" />
          <img src={shape6} className="shape-3 move-2" alt="shape" />
        </section>

        {/* Call to Action */}
        <div className="call-action style-1 content-inner-1">
          <div className="container">
            <UpdateBlog />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
