import React from "react";
import BreadCrum from "../../components/BreadCrum";
import { Link } from "react-router-dom";
import Background1 from "../../assets/images/breadcum/01.jpg";

import { useEffect, useState } from "react";
import axios from "axios";
const Facilator = () => {
  const [dataDesc, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`
      );
      const data = res.data.filter(
        (entry) => entry._id === "6620229f7e97c813c540b4d9"
      );
      setData(data[0].Description);
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <section
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">Programs</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Academics</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>Programs</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="research-development-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-10 col-lg-10">
              <div className="shadow border-radius box-border-bottom p-4">
                <div className="row">
                  <div className="h-color col-xl-12 col-lg-12">
                    {React.createElement("div", {
                      dangerouslySetInnerHTML: {
                        __html: `${dataDesc}<style>img { max-width: 100%; height: auto; }</style>`,
                      },
                    })}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Facilator;
