import React from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import awards from "../../assets/Upload/Award/3524f1e6-afa8-4d05-9395-e3688b24c3aa.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Awards() {
  const [awardsData, setAwardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API call
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllAwardMaster`
        );

        // Log the entire response for debugging
        console.log("API Response:", res.data);

        // Check if res.data is an array
        if (Array.isArray(res.data)) {
          // Filter out inactive awards
          const activeAwards = res.data.filter((award) => award.IsActive);

          // Log the filtered active awards
          console.log("Active Awards:", activeAwards);

          // Set the state with active awards
          setAwardsData(activeAwards);
        } else {
          console.error("API response is not an array");
        }
      } catch (error) {
        console.error("Error fetching awards:", error);
      }
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
                <h1 className="text-white">Awards</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <span>Media Room</span>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>Awards</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-inner-header --> */}
      {/* <!--Our Gallery Section Start --> */}
      <section className="space-ptb award-section">
  <div className="container" style={{ width: '100%', marginLeft: "auto", marginRight: "auto" }}>
    {awardsData.map((award, index) => (
      <div key={index} className="row mt-5">
        <div className="col-lg-12">
          <h3 className="year-title">{award.Year}</h3>
        </div>
        {award.AwardImage ? (
          <div className="col-lg-3">
            <div className="award-img">
              <img
                className="w-100 img-fluid"
                src={`${process.env.REACT_APP_BASE_API_URL}/${award.AwardImage}`}
                alt="Award"
              />
            </div>
            <div className="award-name">
              <h5 className="text-center">{award.Title}</h5>
            </div>
          </div>
        ) : (
          <div className="col-lg-12">
            <div className="award">
              <h4 className="text-left">
                <i className="fa fa-trophy"></i>  {award.Title}
              </h4>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</section>

      {/* <!--Our Gallery Section End --> */}
    </>
  );
}
