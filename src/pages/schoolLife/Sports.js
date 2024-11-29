import React from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import media from "../../assets/Upload/MediaUploadFile/b21bb67451414aa08a1232a03a9e6ae2.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sports() {
  const [dataDesc, setData] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`
      );
      const data = res.data.filter(
        (entry) => entry._id === "66254fa6dce9d44fabb8f0bc"
      );
      setData(data[0].Description);
      setTitle(data[0].Title);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <!-inner-header --> */}
      <section
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">Sport</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">School Life</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>Sport</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--inner-header --> */}
      {/* <!-about --> */}
      <section className="sport-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-10 col-lg-10">
              <div className="shadow border-radius box-border-bottom p-4">
                <div className="row">
                  <div className="col-xl-12 col-lg-12">
                    <div className="reseach-development-img">
                      {React.createElement("div", {
                        dangerouslySetInnerHTML: {
                          __html: `${dataDesc}<style>img {width: 100%; }</style>`,
                        },
                      })}
                    </div>
                    {/* <div className="mt-5 mb-4">
                      <p className="text-justify">
                        We believe that a ‘Sound mind resides in a healthy body.
                        At Millennium, Academic learning and sports education
                        complement each other as sports teach the child,
                        life-skills like teamwork, sportsmanship, esprit de
                        corps, and the critical skill of balancing both success
                        and failure positively.
                      </p>

                      <p className="text-justify">
                        Millennium believes that physical education not only
                        helps enhance overall health and motor skills but also
                        helps and sharpens students learning ability. Respect,
                        sportsmanship, and fair play are the foundation of our
                        physical education program. At Millennium Group of
                        Schools, these skills are being inculcated through
                        sports like cricket, football, basketball, badminton,
                        table tennis, volleyball, chess, and athletics.
                        Swimming, shooting, lawn tennis, hockey, gymnastics and
                        horse-riding facilities are also available in most of
                        our schools.
                      </p>
                    </div> */}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-about --> */}
    </>
  );
}
