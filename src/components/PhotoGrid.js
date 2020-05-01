import React from "react";
import Photo from "./Photo";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

const PhotoGrid =(props) =>(
  <div className="grid">

  {props.posts.map((post, i) => <Photo key={i} i={i} post ={post}{...props}/>)}
  </div>
  )

  const mapStateToProps =(state) =>{
    return {
      posts: state.posts,
      comments: state.comments
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return {...bindActionCreators(actionCreators, dispatch)}
  }
  


export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
