import React, { useEffect, useState } from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Facilities() {
  const [facilitiesData, setFacilitiesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getalltFacilities`
        );
        setFacilitiesData(res.data); // Assuming the fetched data is an array
      } catch (error) {
        console.error("Error fetching facilities data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">Facilities</h1>
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
                    <span>Facilities</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {facilitiesData.map((facility, index) => (
        <div
          key={index}
          className="events shadow mt-4 p-4 bg-white border-radius"
          style={{
            maxWidth: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "30px",
            height: "400px",
          }}
        >
          <div className="row">
            <div className="col-lg-4">
              <div className="events-img mb-4 mb-lg-0">
                <img
                  className="img-fluid border-0"
                  src={`${process.env.REACT_APP_BASE_API_URL}/${facility.FacilitiesImage} `}
                />
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="events-content">
                <a
                  href="javascript:void(0)"
                  className="h5"
                  style={{ color: "#0160aa" }}
                >
                  {facility.FacilitiesTitle}
                </a>
                <p className="text-dark text-justify mb-lg-0">
                  {React.createElement("div", {
                    dangerouslySetInnerHTML: {
                      __html: facility.FacilitiesSubTitle,
                    },
                  })}
                  {/* {facility.FacilitiesSubTitle} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
