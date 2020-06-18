import React, { useState, Fragment } from "react";
import { HackathonBuilder } from "./HackathonBuilder";
import Hackathonlist from "../../editable-stuff/Hackathon";
import { Link } from "react-router-dom";
const imageStyle = { height:300, width:400  , padding:10, };

const Hackathon = (props) => {
  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Hackathons</h1>
      {Hackathonlist.map((value, index) => {
        return (
          <HackathonCard
            key={index}
            title={value.title}
            image={value.image}
            description={value.description}
            index={index}
            language_list={value.languages}
          />
        );
      })}
    </div>
  );
};

const HackathonCard = ({ index, title, image, description,language_list }) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-6 col-lg-6">
            <img src={image} style={imageStyle} className="card-img" alt="..." />
          </div>
          <div className="col-6 col-lg-6">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="lead">{description}</p>
              <div className="pb-3">
                Technology:{" "}
                {language_list.map((language) => (
                  <p key={language} className="badge badge-light card-link text-dark">
                    {language}
                  </p>
                ))}
              </div>
              {/* <Link to={`${process.env.PUBLIC_URL}Hackathon/${index}`}>
                Click here to read the experience{" "}
              </Link> */}
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { Hackathon, HackathonBuilder };
