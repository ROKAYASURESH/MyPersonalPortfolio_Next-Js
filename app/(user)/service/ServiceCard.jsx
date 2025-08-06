import Link from 'next/link';
import React from 'react';

export const ServiceCard = ({service}) => {
  return (
    <>
      <div className="col-lg-4 col-md-6  service">
        <div className="card px-5 ">
          <div className="icon">
            {/* {props.icons} */}
            <img src={service.sss} alt="" />
          </div>
          <div className="card-body">
            <h1 className="card-title">{service.heading}</h1>
            <p className="card-text">{service.paragraphs}</p>
            <span className="butt"><Link href={`/service/${service.id}`}>{service.Button}</Link></span>
          </div>
        </div>
      </div>

    </>
  )
}
