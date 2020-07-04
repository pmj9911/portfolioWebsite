import React, { useState, Fragment } from "react";

class HackathonBuilder {
  list = [];

  constructor({ title, image, location,description, languages, rank, superS }) {
    this.title = title;
    this.image = image;
    this.location = location;
    this.description = description;
    this.languages = languages;
    this.rank = rank;
    this.superS = superS;
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

export { HackathonBuilder };
