import React, { useEffect, useState } from "react";
import axios from "axios";
import BreadCrum from "../../components/BreadCrum";
import { Link } from "react-router-dom";
import Background1 from "../../assets/images/breadcum/01.jpg";

import img from "../../assets/Upload/MediaUploadFile/80435bcdc04249319b80f5fd1ee18a38.png";

const LearningSystem = () => {
  const [mlsData, setMlsData] = useState([]);
  const [dataDesc, setData] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`
      );
      const data = res.data.filter(
        (entry) => entry._id === "6622415878e9ff45f394af02"
      );
      setData(data[0].Description);
      setTitle(data[0].Title);

      console.log(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_API_URL}/api/auth/AllMlsmaster`
        );
        setMlsData(res.data);
      } catch (error) {
        console.error("Error fetching MLS data:", error);
      }
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
                <h1 className="text-white">The Clay Learning System</h1>
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
                    <span>The Clay Learning System</span>
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
            <div className="col-lg-8">
              <h2 className="text-center text-primary2">{title}</h2>
              {/* Render MLS data */}
              <div className="reseach-development-img">
                {React.createElement("div", {
                  dangerouslySetInnerHTML: { __html: dataDesc },
                })}
              </div>
            </div>
            <div className="col-xl-10 col-lg-10">
              {/* Render MLS data */}
              {mlsData.map((item, index) =>
                index % 2 === 0 ? (
                  <div key={index} className="mt-5 mb-5 box-odd">
                    <div className="row">
                      <div className="col-lg-6 d-flex align-items-center">
                        <div className="content-section">
                          <h4 className="text-primary2">{item.Title}</h4>
                          <p className="text-justify">{item.description}</p>
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex align-items-center">
                        <div className="img-section">
                          <img
                            className="img-fluid"
                            src={`${process.env.REACT_APP_BASE_API_URL}/${item.MLSImage}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="mt-5 mb-5 box-odd">
                    <div className="row">
                      <div className="col-lg-6 d-flex align-items-center">
                        <div className="img-section">
                          <img
                            className="img-fluid"
                            src={`${process.env.REACT_APP_BASE_API_URL}/${item.MLSImage}`}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex align-items-center">
                        <div className="content-section">
                          <h4 className="text-primary2">{item.Title}</h4>
                          <p className="text-justify">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LearningSystem;
