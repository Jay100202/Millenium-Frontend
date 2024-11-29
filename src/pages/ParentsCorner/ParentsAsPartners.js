import React from "react";
import { Link } from "react-router-dom";
import media from "../../assets/Upload/MediaUploadFile/6d51f11613d547588b816942ee6855bc.jpg";
import Background1 from "../../assets/images/breadcum/01.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ParentsAsPartners() {
  const [dataDesc, setData] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`
      );
      const data = res.data.filter(
        (entry) => entry._id === "6622576ecdf4c98ed82c869f"
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
                <h1 className="text-white">{title}</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Parents' Corner</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>{title}</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--inner-header --> */}
      {/* <!--about --> */}
      <section className="research-development-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-10 col-lg-10">
              <div className="shadow border-radius box-border-bottom p-4">
                <div className="row">
                  <div className="h-color col-xl-12 col-lg-12">
                    {React.createElement("div", {
                      dangerouslySetInnerHTML: {
                        __html: `${dataDesc}<style>img {width: 100%; }</style>`,
                      },
                    })}
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
