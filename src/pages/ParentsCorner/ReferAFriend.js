import React from "react";
import { Link } from "react-router-dom";
import Background1 from "../../assets/images/breadcum/01.jpg";
import { useEffect , useState} from "react";
import axios from 'axios';

export default function ReferAFriend() { 
   const [dataDesc, setData] = useState("")
const [title, setTitle]= useState("")
useEffect(()=>{

  const fetchData = async ()=>{
    const res = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`)
    const data = res.data.filter(entry=>entry._id==="66225d54cdf4c98ed82c86ef")
    setData(data[0].Description)
    setTitle(data[0].Title)
  }
  fetchData();

},[])

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
                    <a href="#">Parent's Corner</a>
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
      {/* <!--about --> */}
      <section className="refer-friend-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10">
              <div className="shadow border-radius box-border-bottom p-4">
                <div className="row">
                  <div className="h-color col-xl-12 col-lg-12">
                    <div className="mb-4">
                    {React.createElement('div',{ dangerouslySetInnerHTML: { __html: dataDesc } })}
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-about --> */}
    </>
  );
}
