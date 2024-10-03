/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { MenuListArray2 } from "./Menu";
import logo from "./../assets/images/aim/basovca logo.png";
import { _postApi } from "./api";

const Header = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Modal states
  const [loginModal, setloginModal] = useState(false);
  const [resetModal, setResetModal] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setloginModal(false);
    _postApi(
      "/users/login",
      form,
      (res) => {
        if (res.success) {
          localStorage.setItem("@@app_token", res.token);
          nav("/dashboard");
          alert("Login successful");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  /* for sticky header */
  const [headerFix, setheaderFix] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    const mainMenu = document.getElementById("OpenMenu");
    if (mainMenu) {
      if (sidebarOpen) {
        mainMenu.classList.add("show");
      } else {
        mainMenu.classList.remove("show");
      }
    }
  });

  const handleLinkClick = () => {
    if (window.innerWidth <= 992) {
      // Check if screen size is mobile/tablet
      setSidebarOpen(false); // Close sidebar
    }
  };

  // Menu dropdown list
  const reducer = (previousState, updatedState) => ({
    ...previousState,
    ...updatedState,
  });
  const initialState = {
    active: "",
    activeSubmenu: "",
  };
  const [state, setState] = useReducer(reducer, initialState);
  const handleMenuActive = (status) => {
    setState({ active: status });
    if (state.active === status) {
      setState({ active: "" });
    }
  };
  const handleSubmenuActive = (status) => {
    setState({ activeSubmenu: status });
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  return (
    <>
      <header className="site-header mo-left header style-1">
        <div className="top-bar">
          <div className="container">
            <div className="dz-topbar-inner d-flex justify-content-between align-items-center">
              <div className="dz-topbar-left">
                <ul>
                  <li>AHMAD IBRAHIM MUHAMMAD </li>
                  <li>
                    <Link
                      to={"#"}
                      className="badge badge-primary btn-login"
                      data-bs-toggle="modal"
                      data-bs-target="#modalLogin"
                      onClick={() => setloginModal(true)}
                    >
                      <i className="flaticon-logout me-2"></i>Admin
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dz-topbar-right">
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> 080
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>saikure@support.ng
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              <div className="logo-header mostion logo-dark">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <button
                className={`navbar-toggler navicon justify-content-end ${
                  sidebarOpen ? "open" : "collapsed"
                }`}
                type="button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link
                    to={"/coming-soon"}
                    className="btn btn-outline-secondary btnhover1"
                  >
                    <i className="fa-solid fa-user"></i>
                    <span className="m-l10">My Account</span>
                  </Link>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  sidebarOpen ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header logo-dark">
                  <Link to={"/"}>
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <ul className="nav navbar-nav navbar navbar-left">
                  {MenuListArray2.map((data, index) => {
                    let menuClass = data.classChange;
                    if (menuClass !== "sub-menu-down") {
                      return (
                        <li className={menuClass} key={index}>
                          <Link to={data.to} onClick={handleLinkClick}>
                            {data.title}
                          </Link>
                        </li>
                      );
                    } else {
                      return (
                        <li
                          className={`${menuClass} ${
                            state.active === data.title ? "open" : ""
                          }`}
                          key={index}
                        >
                          {data.content && data.content.length > 0 ? (
                            <Link
                              to={"#"}
                              onClick={() => {
                                handleMenuActive(data.title);
                              }}
                            >
                              {data.title}
                            </Link>
                          ) : (
                            <Link to={data.to} onClick={handleLinkClick}>
                              {data.title}
                            </Link>
                          )}
                          <Collapse
                            in={state.active === data.title ? true : false}
                          >
                            <ul
                              className={`sub-menu ${
                                menuClass === "mm-collapse" ? "open" : ""
                              }`}
                            >
                              {data.content &&
                                data.content.map((data, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className={`${
                                        state.activeSubmenu === data.title
                                          ? "open"
                                          : ""
                                      }`}
                                    >
                                      {data.content &&
                                      data.content.length > 0 ? (
                                        <>
                                          <Link
                                            to={data.to}
                                            onClick={() => {
                                              handleSubmenuActive(data.title);
                                            }}
                                          >
                                            {data.title}
                                            <i className="fa fa-angle-right" />
                                          </Link>
                                          <Collapse
                                            in={
                                              state.activeSubmenu === data.title
                                                ? true
                                                : false
                                            }
                                          >
                                            <ul
                                              className={`sub-menu ${
                                                menuClass === "mm-collapse"
                                                  ? "open"
                                                  : ""
                                              }`}
                                            >
                                              {data.content &&
                                                data.content.map(
                                                  (data, index) => {
                                                    return (
                                                      <li key={index}>
                                                        <Link
                                                          to={data.to}
                                                          onClick={
                                                            handleLinkClick
                                                          }
                                                        >
                                                          {data.title}
                                                        </Link>
                                                      </li>
                                                    );
                                                  }
                                                )}
                                            </ul>
                                          </Collapse>
                                        </>
                                      ) : (
                                        <Link
                                          to={data.to}
                                          onClick={handleLinkClick}
                                        >
                                          {data.title}
                                        </Link>
                                      )}
                                    </li>
                                  );
                                })}
                            </ul>
                          </Collapse>
                        </li>
                      );
                    }
                  })}
                </ul>
                <div className="header-bottom">
                  <Link
                    to={"#"}
                    className="btn btn-light btn-login btn-sm"
                    data-bs-target="#modalLogin"
                    onClick={() => setloginModal(true)}
                  >
                    <i className="flaticon-logout me-3"></i>Login
                  </Link>
                  <div className="dz-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fab fa-facebook-f"
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>{" "}
                      <li>
                        <a
                          className="fab fa-twitter"
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>{" "}
                      <li>
                        <a
                          className="fab fa-linkedin-in"
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>{" "}
                      <li>
                        <a
                          className="fab fa-instagram"
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Modal
                className="modal fade modal-bx-info editor"
                show={loginModal}
                onHide={() => setloginModal(false)}
                id="modalLogin"
              >
                <div className="modal-dialog">
                  <form className="modal-content" onSubmit={formSubmit}>
                    <div className="modal-header">
                      <h6 className="modal-title">Login</h6>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setloginModal(false)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group mb-3">
                        <input
                          name="email"
                          required
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          name="password"
                          required
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-6 mb-3">
                            <button
                              type="submit"
                              className="btn btn-secondary btnhover w-100"
                            >
                              Login
                            </button>
                          </div>
                          <div className="col-sm-6 mb-3">
                            <Link
                              to={"#"}
                              className="btn btn-primary w-100"
                              onClick={() => {
                                setResetModal(true);
                                setloginModal(false);
                              }}
                            >
                              Forget Password
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
