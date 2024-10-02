import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Swiper styles
import "swiper/css";

//Images
import pic1 from "./../../assets/images/project/normal.jpeg";
import logo from "../../assets/images/project/logo12.jpeg";

// import Swiper core and required modules
import { Autoplay } from "swiper";
import { _postApi } from "../../layouts/api";

//SwiperCore.use([EffectCoverflow,Pagination]);

const RecentProjectsSlider = () => {
  const [data, setData] = useState([]);
  const getBlogData = () => {
    const newForm = { query_type: "select" };
    _postApi(
      "/blog",
      { newForm },
      (data) => {
        setData(data.resp);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <Swiper
        className="recent-blog p-b5"
        speed={1500}
        //parallax= {true}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="dz-card style-2 overlay-skew wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <Link to={"/fundraiser-detail"}>
                  <img src={item.attechment || pic1} alt="" />
                </Link>
              </div>
              <div className="dz-info">
                <ul className="dz-category">
                  <li>
                    <Link to={"#"}>{item.doc_type}</Link>
                  </li>
                </ul>
                <h5 className="dz-title">
                  <Link to={`/fundraiser-detail?id=${item.id}`}>
                    {item.title}
                  </Link>
                </h5>
                <div className="progress-bx style-1">
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-secondary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="author-wrappper">
                  <div className="author-media">
                    <img src={logo} alt="" />
                  </div>
                  <div className="author-content">
                    <div className="author-head">
                      <h6 className="author-name">AIM</h6>
                      <ul className="rating-list">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star gray-light"></i>
                        </li>
                        <li>
                          <i className="fa fa-star gray-light"></i>
                        </li>
                      </ul>
                    </div>
                    <ul className="author-meta">
                      <li className="campaign">12 Campaign</li>
                      <li className="location">Bauchi, Nigeria</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RecentProjectsSlider;
