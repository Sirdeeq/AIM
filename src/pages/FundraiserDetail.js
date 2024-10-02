import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import PageBanner from "../layouts/PageBanner";

import bg from "../assets/images/banner/bnr4.jpg";
import blog1 from "../assets/images/project/normal.jpeg";
import UpdateBlog from "../components/Home/UpdateBlog";
import { _postApi, useQuery } from "../layouts/api";

const FundraiserDetail = () => {
  const query = useQuery();
  const id = query.get("id");

  const [modalDonate, setModalDonate] = useState(false);
  const [referModal, setReferModal] = useState(false);
  const [data, setData] = useState({});
  const newForm = { query_type: "view", id };
  const getBlogData = () => {
    _postApi(
      "/blog",
      { newForm },
      (data) => {
        setData(data.resp[0]);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  useEffect(() => {
    getBlogData();
  });

  return (
    <>
      <div className="page-content bg-white">
        <PageBanner maintitle="Page" pagetitle={data.title} background={bg} />
        <section className="content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 m-b30">
                <div className="fundraiser-single">
                  <div className="swiper fundraiser-gallery-wrapper">
                    <img src={data.attechment || blog1} alt="" />
                  </div>
                  <h2 className="title">{data.title}</h2>
                  {/* {JSON.stringify(data)} */}
                  <div dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <aside className="side-bar sticky-top">
                  <div className="widget style-1 widget_donate">
                    <Link
                      to={"#"}
                      className="btn btn-donate btn-primary w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDonate"
                    >
                      <i className="flaticon-like me-3"></i> Donate Now{" "}
                    </Link>
                    <div className="tagcloud">
                      <Link
                        to={"#"}
                        data-bs-toggle="modal"
                        data-bs-target="#modalDonate"
                      >
                        Cards
                      </Link>
                      <Link
                        to={"#"}
                        data-bs-toggle="modal"
                        data-bs-target="#modalDonate"
                      >
                        Net Banking
                      </Link>
                      <Link
                        to={"#"}
                        data-bs-toggle="modal"
                        data-bs-target="#modalDonate"
                      >
                        UPI
                      </Link>
                    </div>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary facebook w-100 btn-bottom"
                    >
                      <i className="fa-brands fa-facebook-square me-2"></i>{" "}
                      Spread The World
                    </a>
                  </div>

                  {/* <!-- Top Donors --> */}
                </aside>
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
      <Modal
        className="modal fade modal-wrapper"
        id="modalRefer"
        show={referModal}
        onHide={setReferModal}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title">Refer a Friend</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setReferModal(false)}
          >
            <i className="flaticon-close"></i>
          </button>
        </div>
        <div className="modal-body">
          <form className="dz-form contact-bx" method="POST">
            <div className="form-group style-1 align-items-center">
              <label className="form-label">Name</label>
              <div className="input-group">
                <input
                  name="dzName"
                  required=""
                  type="text"
                  className="form-control"
                  placeholder="Jakob Bothman"
                />
              </div>
            </div>
            <div className="form-group style-1 align-items-center">
              <label className="form-label">Email address</label>
              <div className="input-group">
                <input
                  name="dzEmail"
                  required=""
                  type="text"
                  className="form-control"
                  placeholder="marseloque@mail.com"
                />
              </div>
            </div>
            <div className="form-group style-1 align-items-center">
              <label className="form-label">Phone Number</label>
              <div className="input-group">
                <input
                  name="dzPhoneNumber"
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="form-group mb-0 text-center">
              <button
                name="submit"
                type="submit"
                value="Submit"
                className="btn btn-primary"
              >
                Refer Now
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        className="modal fade modal-wrapper"
        id="modalDonate"
        show={modalDonate}
        onHide={setModalDonate}
      >
        <div className="modal-header">
          <h5 className="modal-title">Choose a donation amount</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setModalDonate(false)}
          >
            <i className="flaticon-close"></i>
          </button>
        </div>
        <div className="modal-body">
          <form action="index.html">
            <div className="row">
              <div className="col-lg-12">
                <div className="tag-donate style-1">
                  <div className="donate-categories">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        $500
                      </label>
                    </div>
                  </div>
                  <div className="donate-categories">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        $1000
                      </label>
                    </div>
                  </div>
                  <div className="donate-categories">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        $2000
                      </label>
                    </div>
                  </div>
                  <div className="donate-categories">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault4"
                      >
                        $5000
                      </label>
                    </div>
                  </div>
                  <p>
                    Most Donors donate approx <span>$1000</span> to this
                    Fundraiser
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label">Other Amount</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Other Amount"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <div className="input-group">
                    <input
                      name="dzName"
                      required=""
                      type="text"
                      className="form-control"
                      placeholder="Jakob Bothman"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label">Email address</label>
                  <div className="input-group">
                    <input
                      name="dzEmail"
                      required
                      type="text"
                      className="form-control"
                      placeholder="info@mail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <div className="input-group">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label">Pancard</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Pancard"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-0 text-center">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="btn btn-primary btn-block"
                  >
                    Proceed To Pay
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default FundraiserDetail;
