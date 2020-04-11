import React from "react";
import { Link } from 'react-router-dom'
import posts from "../postExamples";

function PhotoGrid() {
  return (
    <div>
      <h3>This is the grid</h3>
      <ul>
        {/* {posts.map(item => (
          // <li> <Link to="/grid/:photoId"><img width="50px" src={`${item.display_src}`}/></Link></li>
        ))} */}
        <li> <Link to="/grid/:photoId">pic</Link></li>
      </ul>
    </div>
  );
}

export default PhotoGrid;
