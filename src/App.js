import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import {
  showNavigationbar,
  showBlog,
  showHackathon,
  showProject,
} from "./editable-stuff/configurations.json";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
// import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import { Hackathon } from "./components/Hackathon/Hackathon";
import HackathonPost from "./components/Hackathon/HackathonPost";
import { Project } from "./components/Project/Project";
import  ProjectPost  from "./components/Project/ProjectPost";

const Home = () => {
  return (
    <Fragment>
      <MainBody />
      <AboutMe />
      <Project />
    </Fragment>
  );
};

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    {showNavigationbar && <Navbar />}
    <Route path="/" exact component={Home} />
    {showBlog && <Route path="/blog" exact component={Blog} />}
    {showBlog && <Route path="/blog/:id" component={BlogPost} />}
    {showHackathon && <Route path="/Hackathon" exact component={Hackathon} />}
    {showProject && <Route path="/Project" exact component={Project} />}
    {showHackathon && <Route path="/Hackathon/:id" component={HackathonPost} />}
    {showProject && <Route path="/Project/:id" component={ProjectPost} />}
    <Footer />
  </BrowserRouter>
);

export default App;
