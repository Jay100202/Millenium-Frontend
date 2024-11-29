import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Background1 from "../../assets/images/breadcum/01.jpg";

export default function InnerGallary() {
  const [uniqueGalleryData, setUniqueGalleryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Retrieve the gallaryId from localStorage
      const id = localStorage.getItem("gallaryId");
      console.log(id);
      // Clear the gallaryId from localStorage
      // localStorage.removeItem('gallaryId');

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_API_URL}/api/auth/AllGalleryMasterById/${id}`
        );
        // Extracting unique titles
        // const uniqueTitles = [...new Set(res.data.map(item => item.Title.Title))];

        // // Filtering gallery data to include only one record for each unique title
        // const uniqueData = res.data.filter((item, index) => res.data.findIndex(obj => obj.Title.Title === item.Title.Title) === index);
        console.log(res.data.data);
        setUniqueGalleryData(res.data.data);
        console.log(res);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };
    fetchData();
  }, []); // Include categoryId as a dependency

  return (
    <>
      {/* inner-header */}
      <section
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">Photo Gallery</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>Photo Gallery</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* inner-header */}
      {/* Our Gallery Section Start */}
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            {uniqueGalleryData.map((item) => (
              <div className="col-lg-4 col-sm-6 mt-5" key={item._id}>
                <div className="team-02">
                  <div className="team-img">
                    <img
                      src={`${process.env.REACT_APP_BASE_API_URL}/${item.File} `}
                      className="d-block w-100"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Gallery Section End */}
    </>
  );
}
