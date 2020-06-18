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

  addHeading = (props) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h1 className="">{props}</h1>
        <hr />
      </Fragment>
    );
    return this;
  };

  getHackathon = () => {
    return <div className="container-lg">{this.list}</div>;
  };
}

export { ProjectBuilder };
