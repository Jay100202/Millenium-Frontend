import React from "react";
import vision from "../../assets/images/about/icon/vision.png";
import mission from "../../assets/images/about/icon/mission.png";
import Background1 from "../../assets/images/breadcum/01.jpg";
import Background2 from "../../assets/images/about/vision-mission-value.jpg";
import Background3 from "../../assets/images/about/pattern.png";
import { Link } from "react-router-dom";
import { useEffect , useState} from "react";
import axios from 'axios';

export default function VisionValue() {
  const [dataDesc, setData] = useState("")
  const [title, setTitle]= useState("")
  useEffect(()=>{
 
    const fetchData = async ()=>{
      const res = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`)
      const data = res.data.filter(entry=>entry._id==="66200afa7e97c813c540b48e")
      setData(data[0].Description)
      setTitle(data[0].Title)
    }
    fetchData();

  },[])
  return (
    <>
      {/* <!-inner-header --> */}
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
                    <a href="#">About Us</a>
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
      {/* <!-inner-header --> */}
      {/* <!--Why choose us --> */}
      <section className="vision-mission-section">
        <div className="container-fluid">
          <div className="row no-guuters">
            <div
              className="col-lg-6 bg-holder d-none d-lg-block"
              style={{ backgroundImage: `url(${Background2})` }}
            ></div>
            <div
              className="text-white col-lg-6 px-3 px-md-5 px-lg-5 py-4 px-lg-4"
              style={{ backgroundImage: `url(${Background3})` }}
            >
                {React.createElement('div',{ dangerouslySetInnerHTML: { __html: dataDesc } })}
            </div>
          </div>
        </div>
      </section>
      {/* <!--Why choose us --> */}
    </>
  );
}
