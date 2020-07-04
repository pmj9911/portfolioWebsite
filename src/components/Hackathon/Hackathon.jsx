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
            location={value.location}
            description={value.description}
            index={index}
            language_list={value.languages}
            rank={value.rank}
            superS={value.superS}
          />
        );
      })}
    </div>
  );
};

const HackathonCard = ({ index, title, image, location,description,language_list,rank,superS }) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-0 col-g-5">
            <img src={image} style={imageStyle} className="card-img" alt="..." />
          </div>
          <div className="col-6 col-lg-6">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="lead">{location}</p>
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
              {process.env.PUBLIC_URL}
            </div>
          </div>

          <div className="col-1 col-lg-1">
            <span class="fa-stack">
                <span class="fa fa-circle-o fa-stack-2x"></span>
                <strong class="fa-stack-3x">
                    <h2>{rank}<sup>{superS}</sup></h2>
                </strong>
            </span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { Hackathon, HackathonBuilder };
