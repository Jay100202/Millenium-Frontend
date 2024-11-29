import React from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CreativeArts() {
  const [dataDesc, setData] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`
      );
      const data = res.data.filter(
        (entry) => entry._id === "6625502cdce9d44fabb8f0c2"
      );
      setData(data[0].Description);
      setTitle(data[0].Title);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <!-- inner-header --> */}
      <section
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">Creative Arts</h1>
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
                    <span>Creative Arts</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--inner-header --> */}
      {/* <!--about --> */}
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
                        Comprehensive arts education introduces students to a
                        culturally rich world. A visual arts curriculum provides
                        opportunities for students to explore, express, and
                        experiment with ideas through drawing, painting, music,
                        dance, storytelling, and creative writing. The creative
                        skills building children develop through the arts
                        instills in them habits that will carry them forward
                        towards new ideas, new experiences, and challenges as
                        well as will be personally rewarding. Every child is
                        born with creative potential and that needs to be
                        nurtured and stimulated. Arts should be a dynamic
                        channel to foster a child’s creativity.
                      </p>
                    </div> */}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--about --> */}
    </>
  );
}
