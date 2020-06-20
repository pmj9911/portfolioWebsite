import React, { useEffect, useState } from "react";
import Projectlist from "../../editable-stuff/Project";
const ProjectPost = ({ match }) => {
  const { id } = match.params;
  const post = Projectlist[id];
  const imageStyle = { height:300, width:400, padding:20, };
  const postStyle = { marginLeft:40, };
  return (
    <div className="container-lg mt-5">
      {post && (
        <div>
          <h1 className="display-2 text-center">{post.name}</h1>
          {/* <img className="img-fluid mb-2" align="left" src={post.image} alt={post.title} style={imageStyle} /> */}
          <p style={postStyle}>
            {post.getProject()}
             </p>
        </div>
      )}
      {!post && <h1 className="display-1 text-center">404 - Page not found</h1>}
    </div>
  );
};

export default ProjectPost;
