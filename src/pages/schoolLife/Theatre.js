import React from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import media from "../../assets/Upload/MediaUploadFile/e5a47d7d1a174a929b36b8e1283da552.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Theatre() {
  const [dataDesc, setData] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`
      );
      const data = res.data.filter(
        (entry) => entry._id === "6625505bdce9d44fabb8f0c5"
      );
      setData(data[0].Description);
      setTitle(data[0].Title);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <!--inner-header --> */}
      <section
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">Theatre</h1>
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
                    <span>Theatre</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--inner-header --> */}
      {/* <!-about --> */}
      <section className="creative-arts-section">
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
                        Theatre is a performing art that involves an element of
                        drama and a compelling story. Art is not a mere form of
                        entertainment but based on truth. It involves extensive
                        research, playwriting, direction, and design and
                        inculcates certain life skills that are crucial in the
                        real world. Play also teaches students to work together
                        in a team, where they appreciate team member’s unique
                        strengths and also encourage them to think beyond the
                        ordinary. Theatre teaches dedication and the art of
                        perseverance. Virtues like accountability,
                        dependability, and multi-tasking are learned. There is
                        something vulnerable about performing on a stage and
                        theatre humbles and builds up a sense of self-growth, an
                        ability to accept judgment gracefully.
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
