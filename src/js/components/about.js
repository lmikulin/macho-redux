import React from "react";
import page from "../constants/page-constants";

export default class About extends React.Component {
  render() {
    return (
      <div class="about-page">
        <div class="about-content text-center">
          <h1>About Us</h1>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          <button class="text-uppercase" onClick={this.props.setNav.bind(null, page.CONTACT)}>Contact Us</button>
        </div>
      </div>
    );
  }
}
