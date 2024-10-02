/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Dropdown, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

//images
import pic1 from "../../assets/images/project/normal.jpeg";
import logo from "../../assets/images/project/logo12.jpeg";
import { _postApi } from "../../layouts/api";

export const truncateHTMLContent = (html, maxLength) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  const textContent = div.textContent || div.innerText || "";
  return textContent.length > maxLength
    ? textContent.substring(0, maxLength) + "..."
    : textContent;
};

const ProjectMasonry = () => {
  const [dropbtn, setDropbtn] = useState("Newest");
  const [popular, setPopular] = useState([]);
  //   const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("");
  const [data, setData] = useState([]);
  const newForm = { query_type: "select" };
  const [loading, setLoading] = useState(false);

  const getBlogData = () => {
    setLoading(true);
    _postApi(
      "/blog",
      { newForm },
      (data) => {
        setLoading(false);
        setData(data.resp);
        setPopular(data.resp);
      },
      (err) => {
        console.log(err);
        setLoading(false);
      }
    );
  };
  useEffect(() => {
    getBlogData();
  }, []);

  const filtered =
    activeGenre === ""
      ? popular
      : data?.filter((card) => card?.doc_type.includes(activeGenre));

  return (
    <>
      {/* {loading && <Spinner />} */}
      {/* {JSON.stringify(activeGenre)} */}
      <div className="row m-b30">
        <div className="col-xl-10 col-lg-9">
          <div className="site-filters style-1 clearfix">
            <ul className="filters" data-bs-toggle="buttons">
              <li className={`btn ${activeGenre === "" ? "active" : ""}`}>
                <Link to={"#"} onClick={() => setActiveGenre("")}>
                  ALL PROJECTS
                </Link>
              </li>
              <li
                data-filter=".health"
                className={`btn ${activeGenre === "health" ? "active" : ""}`}
              >
                <Link to={"#"} onClick={() => setActiveGenre("health")}>
                  HEALTH
                </Link>
              </li>
              <li
                data-filter=".education"
                className={`btn ${activeGenre === "education" ? "active" : ""}`}
              >
                <Link to={"#"} onClick={() => setActiveGenre("education")}>
                  EDUCATION
                </Link>
              </li>
              <li
                data-filter=".shelter"
                className={`btn ${activeGenre === "shelter" ? "active" : ""}`}
              >
                <Link to={"#"} onClick={() => setActiveGenre("shelter")}>
                  SHELTER
                </Link>
              </li>
              <li
                data-filter=".food"
                className={`btn ${activeGenre === "food" ? "active" : ""}`}
              >
                <Link to={"#"} onClick={() => setActiveGenre("food")}>
                  FOOD & NUTRITION
                </Link>
              </li>
              <li
                data-filter=".child_protection"
                className={`btn ${
                  activeGenre === "child_protection" ? "active" : ""
                }`}
              >
                <Link
                  to={"#"}
                  onClick={() => setActiveGenre("child_protection")}
                >
                  CHILD PROTECTION
                </Link>
              </li>
              <li
                data-filter=".psycho_social"
                className={`btn ${
                  activeGenre === "psycho_social" ? "active" : ""
                }`}
                title="PSYCHO SOCIAL & HOUSEHOLD ECONOMIC STRENTHENING"
              >
                <Link to={"#"} onClick={() => setActiveGenre("psycho_social")}>
                  P.S.H.E.S
                </Link>
              </li>
              <li
                data-filter=".legal"
                className={`btn ${activeGenre === "legal" ? "active" : ""}`}
              >
                <Link to={"#"} onClick={() => setActiveGenre("legal")}>
                  LEGAL
                </Link>
              </li>
              <li
                data-filter=".gallery"
                className={`btn ${activeGenre === "gallery" ? "active" : ""}`}
              >
                <Link to={"#"} onClick={() => setActiveGenre("gallery")}>
                  GALLERY
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-xl-2 col-lg-3 text-start text-lg-end m-b20">
          <Dropdown className="select-drop">
            <Dropdown.Toggle as="div" className="i-false select-drop-btn">
              <span>{dropbtn}</span>
              <i className="fa-regular fa-angle-down"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setDropbtn("Newest")}>
                Newest
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropbtn("Oldest")}>
                Oldest
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {/* {JSON.stringify(data)} */}

      <div className="clearfix">
        <ul
          //layout
          id="masonry"
          className="row"
          //transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {filtered?.map((item, index) => {
              return (
                <motion.li
                  layout
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="card-container col-xl-4 col-lg-6 col-md-6 col-sm-12 Fashion m-b30"
                  key={index}
                  //transition={{ duration: 0.5 }}
                >
                  <div className="dz-card style-2 overlay-skew">
                    <div className="dz-media">
                      <Link to={`/fundraiser-detail?id=${item.id}`}>
                        <img src={item.attechment || pic1} alt="" />
                      </Link>
                    </div>
                    <div className="dz-info">
                      <ul className="dz-category">
                        <li>
                          <Link to={`/fundraiser-detail?id=${item.id}`}>
                            {item.title}
                          </Link>
                        </li>
                      </ul>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: truncateHTMLContent(item.content, 200),
                        }}
                      />
                      ....
                      <div className="progress-bx style-1">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-secondary progress-bar-striped progress-bar-animated"
                            style={{ width: "89%" }}
                          ></div>
                        </div>
                        {/* <ul className="progress-tag">
                          <li className="raised">
                            <i className="las la-coins"></i> Raised:{" "}
                            <span className="text-primary">
                              $ {item.raised}
                            </span>
                          </li>
                          <li className="goal">
                            <i className="lar la-calendar"></i> Goal:{" "}
                            <span className="text-primary">$70,000</span>
                          </li>
                        </ul> */}
                      </div>
                      <div className="author-wrappper">
                        <div className="author-media">
                          <img src={logo} alt="" />
                        </div>
                        <div className="author-content">
                          <div className="author-head">
                            <h6 className="author-name">{item.doc_type}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
      <div className="row">
        <div className="col-12 m-sm-t0 m-t30">
          <nav className="pagination-bx">
            <div className="page-item">
              <Link to={"#"} className="page-link prev">
                <i className="fas fa-chevron-left"></i>
              </Link>
            </div>
            <ul className="pagination">
              <li className="page-item">
                <Link to={"#"} className="page-link">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link to={"#"} className="page-link active">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link to={"#"} className="page-link">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link to={"#"} className="page-link">
                  4
                </Link>
              </li>
            </ul>
            <div className="page-item">
              <Link to={"#"} className="page-link next">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProjectMasonry;
