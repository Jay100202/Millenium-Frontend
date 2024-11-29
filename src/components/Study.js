import amls1 from "../assets/images/about/amls-01.jpg";
import amls2 from "../assets/images/about/amls-02.jpg";
import amls3 from "../assets/images/about/amls-03.jpg";
import amls4 from "../assets/images/about/amls-04.jpg";
import amls5 from "../assets/images/about/amls-05.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Study() {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  const [allgallary, setGallary] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const newsres = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getallNews`
      );
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/list/GallerycategoryMaster`
      );

      // Filter out the items where Isactive is true
      const activeGalleries = response.data.filter((item) => item.IsActive);

      // Get the first four items from the filtered array
      const firstFourActiveGalleries = activeGalleries.slice(0, 4);

      // Set the state with the first four active galleries
      setGallary(firstFourActiveGalleries);
      console.log(firstFourActiveGalleries);

      setNewsData(newsres.data);
      console.log(newsres.data);
    };
    fetchData();
  }, []);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
    ],
  };
  function gallaryChange(id) {
    localStorage.setItem("gallaryId", id);
    navigate("/innerGallary"); // Navigate to the '/innerGallary' route
  }
  return (
    <>
      {/* <!-- Start Study Area --> */}
      <section className="study-area pt-100 pb-70">
        <div className="container">
          <div className="section-title white-title text-center">
            <h2>The Clay Learning System (CLS)</h2>
            <p>UNIQUE FEATURES OF OUR PROGRAMS</p>
          </div>

          <div className="row justify-content-center">
            <Slider
              {...settings}
              className="study-slider owl-carousel owl-theme"
            >
              <div className="team">
                <div className="team-img">
                  <img className="img-fluid" src={amls1} alt="" />
                </div>
                <div className="team-info">
                  <Link to="/learningSystem" className="team-name">
                    Beginners
                  </Link>
                  <p className="team-leader">
                    <Link to="/learningSystem" className="team-name">
                      See More
                    </Link>
                  </p>
                </div>
              </div>
              <div className="team">
                <div className="team-img">
                  <img className="img-fluid" src={amls2} alt="" />
                </div>
                <div className="team-info">
                  <Link to="/learningSystem" className="team-name">
                    Level 1
                  </Link>
                  <p className="team-leader">
                    <Link to="/learningSystem" className="team-name">
                      See More
                    </Link>{" "}
                  </p>
                </div>
              </div>
              <div className="team">
                <div className="team-img">
                  <img className="img-fluid" src={amls3} alt="" />
                </div>
                <div className="team-info">
                  <Link to="/learningSystem" className="team-name">
                    Level 2
                  </Link>
                  <p className="team-leader">
                    <Link to="/learningSystem" className="team-name">
                      See More
                    </Link>{" "}
                  </p>
                </div>
              </div>
              <div className="team">
                <div className="team-img">
                  <img className="img-fluid" src={amls4} alt="" />
                </div>
                <div className="team-info">
                  <Link to="/learningSystem" className="team-name">
                    Grade 1
                  </Link>
                  <p className="team-leader">
                    <Link to="/learningSystem" className="team-name">
                      See More
                    </Link>{" "}
                  </p>
                </div>
              </div>
              <div className="team">
                <div className="team-img">
                  <img className="img-fluid" src={amls5} alt="" />
                </div>
                <div className="team-info">
                  <Link to="/learningSystem" className="team-name">
                    Grade 2
                  </Link>
                  <p className="team-leader">
                    <Link to="/learningSystem" className="team-name">
                      See More
                    </Link>{" "}
                  </p>
                </div>
              </div>
              <div className="team">
                <div className="team-img">
                  <img className="img-fluid" src={amls4} alt="" />
                </div>
                <div className="team-info">
                  <Link to="/learningSystem" className="team-name">
                    Grade 3
                  </Link>
                  <p className="team-leader">
                    <Link to="/learningSystem" className="team-name">
                      See More
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* <!-- End Study Area --> */}

      {/* <----   Event --> */}
      <section className="news-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-7 col-6">
                  <div className="section-title">
                    <h2>NEWS & EVENTS</h2>
                  </div>
                </div>
                <div className="col-md-5 text-md-right mb-4 col-6 mb-md-0">
                  <Link
                    className="btn btn-primary btn-round"
                    to="/newsandevents"
                  >
                    View All
                  </Link>
                </div>
              </div>
              <div className="row">
                {newsData.slice(0, 4).map((data, index) => {
                  return (
                    <div className="col-lg-6 mt-4" key={index}>
                      <div className="blog-post d-flex align-items-center shadow border-radius">
                        <div className="blog-date">
                          <h3>{new Date(data.date).getDate()}</h3>
                          <span>
                            {new Date(data.date).toLocaleString("default", {
                              month: "short",
                            })}
                          </span>
                          <span>{new Date(data.date).getFullYear()}</span>
                        </div>
                        <div className="blog-contant">
                          <h5 className="mt-0 mb-3">
                            <a href={`/dynamicNews/${data._id}`}>
                              {data.Title}
                            </a>
                          </h5>
                          <Link
                            className="btn p-0"
                            to="/newsandevents"
                            // href={`/dynamicNews/${data._id}`}
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <--- event end --> */}

      {/* <!--Gallery --> */}
      {/* <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-6">
              <div className="section-title">
                <h2>Our Gallery</h2>
              </div>
            </div>
            <div className="col-md-5 text-md-right mb-4 col-6 mb-md-0">
              <a className="btn btn-primary btn-round" href="/photogallery">
                View More
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="filters-group mb-lg-4 text-center">
                <button className="btn-filter active" data-group="all">
                  All
                </button>
                {allgallary.map((item, index) => {
                  return (
                    <button
                      className="btn-filter"
                      data-group="1"
                      key={item._id}
                    >
                      <Link
                        className="btn"
                        to="/innerGallary"
                        onClick={() => gallaryChange(item._id)}
                        style={{ fontSize: "18px" }}
                      >
                        {item.Title}
                      </Link>
                    </button>
                  );
                })}

              </div>
              <div className="my-shuffle-container columns-3 popup-gallery full-screen"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <---- gallery ---> */}
    </>
  );
}
