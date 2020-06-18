import React, { useState, Fragment } from "react";
import { ProjectBuilder } from "./ProjectBuilder";
import Projectlist from "../../editable-stuff/Project";
import { Link } from "react-router-dom";
const imageStyle = { height:300, width:400  , padding:10, };

const Project = (props) => {
  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Projects</h1>
      {Projectlist.map((value, index) => {
        return (
          <ProjectCard
            key={index}
            name={value.name}
            updatedOn={value.updatedOn}
            description={value.description}
            index={index}
            Technology={value.Technology}
          />
        );
      })}
    </div>
  );
};

const ProjectCard = ({ index, name, updatedOn, description, Technology}) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-9 col-lg-9">
            <div className="">
              <h2 className="">{name}</h2>
              <h6 >{updatedOn}</h6>
              <div className="pb-3">
                technology:{" "}
                {Technology.map((tech) => (
                  <p key={tech} className="badge badge-light card-link text-dark">
                    {tech}
                  </p>
                ))}
              </div>
              {/* <Link to={`${process.env.PUBLIC_URL}Project/${index}`}>
                This is a project{" "}
              </Link> */}
            </div>
          </div>
          <div className="col-2 col-lg-2"></div>
          <div className="col-1 col-lg-1">
              {/* <i  class="fa fa-arrow-circle-right fa-2x" aria-hidden="true"></i> */}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { Project, ProjectBuilder };
