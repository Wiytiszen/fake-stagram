import React from "react";
import PhotoGrid from "./PhotoGrid";
import { connect } from 'react-redux'




const Main = (props)=> {    
    return (
      <div>
        <PhotoGrid {...props}/>
      </div>
      
    );
  }

  function mapStateToProps(state) {
    return {
      posts: state.posts,
      comments: state.comments
    }
  }
  
  
export default connect(
  mapStateToProps,
  null
)(Main);
