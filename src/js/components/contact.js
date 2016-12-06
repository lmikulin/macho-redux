import React from "react";
import About from "./about";
import Map from "./map";
import page from "../constants/page-constants";

export default class Contact extends React.Component {
  render() {
    console.log("rendering CONTACT page:", this.props.page)
    if (this.props.page === page.HOME) {
      return (
        <div class="contact-wrapper">
          <div class="about">
            <About {...this.props}/>
          </div>
          <div class="map">
            <Map/>
          </div>
        </div>
      );
    } else if (this.props.page === page.ABOUT) {
      return (
        <About {...this.props}/>
      );
    } else if (this.props.page === page.CONTACT) {
      return (
        <Map/>
      );
    }
    return null;
  }
}
