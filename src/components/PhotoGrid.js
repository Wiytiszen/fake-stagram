import React from "react";
import Photo from "./Photo";

const PhotoGrid =(props) =>(
  <div className="grid">
  {props.posts.map((post, i) => <Photo key={i} i={i} post={post} />)}
  </div>
  )

export default PhotoGrid;