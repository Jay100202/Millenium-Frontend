import React from "react";
import { Link } from "react-router-dom";
import Background1 from "../../assets/images/breadcum/01.jpg";
import parents from "../../assets/Upload/ParentsSpeak/10f62992-cd98-46c3-904a-c29bb033f262.png";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ParentsSpeak() {
  const [dataDesc, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getalltParents`
      );
      // const data = res.data.filter(entry=>entry.Category==="662239bf1643e4255556eca9")
      console.log(res.data);
      setData(res.data);
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
                <h1 className="text-white">Parent's Speak</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Parent's Corner</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>Parent's Speak</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-inner-header --> */}
      {/* <!--Gallery --> */}
      <section className="gallery-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="my-shuffle-container columns-2 popup-gallery full-screen">
                {dataDesc.map((data, index) => {
                  return (
                    <div className="grid-item" key={index}>
                      <div className="portfolio-item">
                        <div className="position-relative">
                          <img
                            className="img-fluid"
                            src={`${process.env.REACT_APP_BASE_API_URL}/${data.ParentsImage}`}
                            alt={data.ParentsImage}
                          />
                          <div className="portfolio-overlay">
                            <a
                              className="portfolio-img"
                              href={`${process.env.REACT_APP_BASE_API_URL}/${data.ParentsImage}`}
                            >
                              <i className="fas fa-arrows-alt"></i>
                            </a>
                          </div>
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
      {/* <!--Gallery --> */}
    </>
  );
}
