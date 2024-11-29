import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Background1 from "../../assets/images/breadcum/01.jpg";
import InnerGallary from "./innerGallary";
// import { useNavigate } from "react-router-dom";

export default function PhotoGallery() {
  const [uniqueGalleryData, setUniqueGalleryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_API_URL}/api/auth/AllGalleryMaster`
        );

        // Extracting unique titles
        const uniqueTitles = [...new Set(res.data.map(item => item.Title.Title))];

        // Filtering gallery data to include only one record for each unique title
        const uniqueData = res.data.filter((item, index) => res.data.findIndex(obj => obj.Title.Title === item.Title.Title) === index);

        setUniqueGalleryData(uniqueData);
        console.log(res);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };
    fetchData();
  }, []);

  function gallaryChange(id) {
    localStorage.setItem('gallaryId', id);
    navigate('/innerGallary'); // Navigate to the '/innerGallary' route
  }
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
                      alt={item.Title.Title}
                    />
                  </div>
                  
                
                    <Link
                    to='/innerGallary'
                   onClick={() => gallaryChange(item.Title._id)}
                    
                     
                      className="team-title"
                    >
                      <div className="team-info text-center">  {item.Title.Title}</div>
                    
                    </Link>
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
