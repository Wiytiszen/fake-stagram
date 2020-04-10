import React,{Component} from "react";
import PhotoGrid from "./PhotoGrid";


class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>Take a look to my photos!!!</p>
      <PhotoGrid/>
      </div>
    );
  }
}

export default Main;
