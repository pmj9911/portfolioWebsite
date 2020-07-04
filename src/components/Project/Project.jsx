import React, { useState, Fragment } from "react";
import { ProjectBuilder } from "./ProjectBuilder";
import Projectlist from "../../editable-stuff/Project";
import { Link } from "react-router-dom";
const imageStyle = { height: 300, width: 400, padding: 10, };

const Project = (props) => {
  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Projects</h1>
      {Projectlist.map((value, index) => {
        return (
          <ProjectCard
            key={index}
            name={value.name}
            projectDuration={value.projectDuration}
            description={value.description}
            index={index}
            Technology={value.Technology}
            githubLink={value.githubLink}
          />
        );
      })}
    </div>
  );
};

const ProjectCard = ({ index, name, projectDuration, description, Technology, githubLink }) => {

  return (
    <div className="m-5">
      <div className="row">
        <div className="col-9 col-lg-9">
          <h2 className="">{name}</h2>
          <p>&rarr;&nbsp;{description}</p>

          {/* <Link to={`${process.env.PUBLIC_URL}Project/${index}`}>
                This is a project{" "}
              </Link> */}
        </div>
        <div className="col-3 col-lg-3">
          <div className="m-2">
            <div className="row">
              <div className="col-8 col-lg-8">
                <div className="row">
                  <div className="pb-3">
                    {Technology.map((tech) => (
                      <p key={tech} className="badge badge-light card-link text-dark">
                        <i className={`devicon-${tech}`} style={{ fontSize: "40px" }} ></i>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg-4">
                <a href={githubLink} target="_blank">
                  <i className="devicon-github-plain colored" style={{ fontSize: "50px" }}></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="m-2">
              <div className="row">
                {projectDuration}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export { Project, ProjectBuilder };
