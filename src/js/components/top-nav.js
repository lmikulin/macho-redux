import React from "react";
import page from "../constants/page-constants";

export default class TopNav extends React.Component {
  render() {
    return (
      <nav class="navbar-default" role="navigation">
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#macho-nav" aria-expanded="false">
           <span class="sr-only">Toggle navigation</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </button>
         <a href="#" class="navbar-brand text-uppercase" onClick={this.props.setNavHome}>Macho</a>
        </div>
        <div class="collapse navbar-collapse" id="macho-nav">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" onClick={this.props.setNav.bind(null, page.PRODUCT)} class="text-uppercase">Product</a></li>
            <li><a href="#" onClick={this.props.setNav.bind(null, page.WORKS)} class="text-uppercase">Works</a></li>
            <li><a href="#" onClick={this.props.setNav.bind(null, page.TEAM)} class="text-uppercase">Team</a></li>
            <li><a href="#" onClick={this.props.setNav.bind(null, page.ABOUT)} class="text-uppercase">About</a></li>
            <li><a href="#" onClick={this.props.setNav.bind(null, page.CONTACT)} class="text-uppercase">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
