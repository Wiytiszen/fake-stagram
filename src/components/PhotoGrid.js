import React from "react";
import { Link } from 'react-router-dom'


function PhotoGrid() {
  return (
    <div>
      <h3>This is the grid</h3>
      <ul>
        <li> <Link to="/grid/:photoId">Example</Link></li> 
        <li> <Link to="/grid/:photoId">Example</Link></li> 
        <li> <Link to="/grid/:photoId">Example</Link></li> 
        <li> <Link to="/grid/:photoId">Example</Link></li> 
      </ul>
    </div>
  );
}

export default PhotoGrid;
