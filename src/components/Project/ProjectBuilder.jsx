import React, { useState, Fragment } from "react";

class ProjectBuilder {
  list = [];

  constructor({ name, githubLink, updatedOn, description, Technology }) {
    this.name = name;
    this.githubLink = githubLink;
    this.updatedOn = updatedOn;
    this.description = description;
    this.Technology = Technology;
  }

  addParagraph = (props) => {
    this.list.push(
      <p key={this.list.length} className="lead">
        {props}
      </p>
    );
    return this;
  };

  addImage = (props) => {
    this.list.push(
      <div style={{height:"300px"}}>
      <img
          key={this.list.length}
          className="circle mb-3"
          src={props}
          
          style={{height: "100%", width: "100%", objectFit: "contain"}}
          alt={`${props}`}
        />
      </div>
    );
    return this;
  };

  addHeading = (props) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h4 className="">{props}</h4>
        <hr />
      </Fragment>
    );
    return this;
  };

  getProject = () => {
    return <div className="container-lg">{this.list}</div>;
  };
}

export { ProjectBuilder };
