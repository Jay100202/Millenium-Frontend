import React from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

import { useEffect , useState} from "react";
import axios from 'axios';
export default function FAQ() {

  const [dataDesc, setData] = useState([]) 
  useEffect(()=>{
 
    const fetchData = async ()=>{
      const res = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/auth/getall/FAQCategory`)
      const data = res.data.filter(entry=>entry.Category==="662239b41643e4255556eca6")
      console.log(data)
      setData(data)
    }
    fetchData();

},[])

  return (
    <>
      {/* <!inner-header --> */}
      <section
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">FAQ's</h1>
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
                    <span>FAQ's</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-inner-header --> */}
      {/* <!--Faq --> */}
      <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="shadow border-radius box-border-bottom p-4">
                <div className="row">
                  <div className="col-xl-12 col-lg-12">
                   
                    <Accordion
                      className="accordion"
                      defaultActiveKey={["0"]}
                      alwaysOpen
                    >
                      
                       { dataDesc.map((data, index) =>(
                        <Accordion.Item className="card" eventKey={index}>
                        <Accordion.Header className="accordion-icon card-header">
                          {data.Title}
                        </Accordion.Header>
                        <Accordion.Body className="card-body">
                          {data.Description}
                        </Accordion.Body>
                      </Accordion.Item>
                      )) }
                       
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-Faq --> */}
    </>
  );
}
