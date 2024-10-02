import React, { useState } from "react";
import Dashboard1 from "./Dashboard1";
import { Button, Col, Row } from "react-bootstrap";
import logo from "./../assets/images/logo.png";
import { Link } from "react-router-dom";
import bg from "../assets/images/banner/bnr4.jpg";
import BlogList from "./BlogList";
import { FaTachometerAlt, FaList, FaSave, FaFileAlt } from "react-icons/fa";


export default function Dashboard() {
  const [activeGenre, setActiveGenre] = useState("Blog");
  return (
    // {admin !== '' &&
    <div>
      <Row className="m-0 p-0">
        <Col md="2" className="m-0 p-0">
          <div className="m-4">
            <div className="logo-header mostion logo-dark">
              <Link to={`/`}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <Link to={`/`}>
              <Button
                color="success"
                className="px-5"
                size="sm"
                onClick={() => {
                  return localStorage.removeItem("@@app_token");
                }}
              >
                <i className="flaticon-logout me-2"></i> Logout
              </Button>
            </Link>
          </div>
          <div className="site-filters style-1 clearfix">
            <ul className="filters" data-bs-toggle="buttons">
              <li
                data-filter=".Blog"
                className={`btn ${activeGenre === "Blog" ? "active" : ""}`}
              >
                <Link
                  to={"#"}
                  onClick={() => setActiveGenre("Blog")}
                  style={{ width: "17em" }}
                >
                  <FaTachometerAlt className="me-2" />
                  Dashboard
                </Link>
              </li>
              <li
                data-filter=".BlogList"
                className={`btn ${activeGenre === "BlogList" ? "active" : ""}`}
              >
                <Link
                  to={"#"}
                  onClick={() => setActiveGenre("BlogList")}
                  style={{ width: "17em" }}
                >
                  <FaList className="me-2" />
                  Blog List
                </Link>
              </li>
              <li
                data-filter=".SaveFile"
                className={`btn ${activeGenre === "SaveFile" ? "active" : ""}`}
              >
                <Link
                  to={"#"}
                  onClick={() => setActiveGenre("SaveFile")}
                  style={{ width: "17em" }}
                >
                  <FaSave className="me-2" />
                  Save File
                </Link>
              </li>
              <li
                data-filter=".FileList"
                className={`btn ${activeGenre === "FileList" ? "active" : ""}`}
              >
                <Link
                  to={"#"}
                  onClick={() => setActiveGenre("FileList")}
                  style={{ width: "17em" }}
                >
                  <FaFileAlt className="me-2" />
                  File List
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md="10" style={{ borderLeft: 2 }} className="m-0 p-0">
          <div
            className=" dz-bnr-inr-sm style-1 text-center overlay-primary-dark"
            style={{ backgroundImage: "url(" + bg + ")", height: 90 }}
          >
            <div className="container">
              <div className="dz-bnr-inr-entry">
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item active">{activeGenre}</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {activeGenre === "Blog" ? (
            <Dashboard1 />
          ) : activeGenre === "BlogList" ? (
            <BlogList setActiveGenre={setActiveGenre} />
          ) : activeGenre === "SaveFile" ? (
            <h1>SaveFile</h1>
          ) : activeGenre === "FileList" ? (
            <h1>FileList</h1>
          ) : null}
        </Col>
      </Row>
    </div>
    // }
  );
}
