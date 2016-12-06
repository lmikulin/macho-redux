import React from "react";
import page from "../constants/page-constants";

export default class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <span onClick={this.props.setNavHome} class="text-uppercase page-link home-link">Macho</span>
        <div style={{width: "100%", borderBottom: "1px solid gray"}}/>
        <span onClick={this.props.setNav.bind(null, page.PRODUCT)} class="page-link">Product</span>
        <span onClick={this.props.setNav.bind(null, page.WORKS)} class="page-link">Works</span>
        <span onClick={this.props.setNav.bind(null, page.TEAM)} class="page-link">Team</span>
        <span onClick={this.props.setNav.bind(null, page.ABOUT)} class="page-link">About</span>
        <span onClick={this.props.setNav.bind(null, page.CONTACT)} class="page-link">Contact Us</span>
      </footer>
    );
  }
}
