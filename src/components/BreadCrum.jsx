import React from 'react'



const BreadCrum = ({Title}) => {
  return (
    <React.Fragment>
<section className="inner-banner bg-overlay-black-70 bradCrumBg bg-holder">
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-md-12">
        <div className="text-center">
          <h1 className="text-white">{Title}</h1>
        </div>
        <div className="d-flex justify-content-center ">
          <ol className="breadcrumb mb-0 p-0">
            <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Scholastics</a></li>
            <li className="breadcrumb-item active"><span>CBSE - Board Of Affiliation</span></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

    </React.Fragment>
  )
}

export default BreadCrum