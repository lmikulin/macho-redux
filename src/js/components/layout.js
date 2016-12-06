import React from "react";
import {connect} from "react-redux";
import {setNav, setNavHome} from "../actions/nav-actions";

import TopNav from "./top-nav";
import Slider from "./slider";
import Product from "./product";
import Works from "./works";
import Team from "./team";
import Contact from "./contact";
import Footer from "./footer";

@connect((store) => {
  console.log("store page", store.page);
  return {
    page: store.page
  };
})
export default class Layout extends React.Component {
  constructor() {
    super();
    this._setNavHome = this._setNavHome.bind(this);
    this._setNav = this._setNav.bind(this);
  }
  _setNavHome() {
    console.log("setting nav to home");
    this.props.dispatch(setNavHome());
  }
  _setNav(page) {
    console.log("setting nav to", page);
    this.props.dispatch(setNav(page));
  }
  render() {
    console.log("rendering LAYOUT page:", this.props.page);
    return (
      <div class="container-fluid full-width">
        <TopNav {...this.props} setNav={this._setNav} setNavHome={this._setNavHome}/>
        <Slider {...this.props}/>
        <Product {...this.props} setNav={this._setNav}/>
        <Works {...this.props} setNav={this._setNav}/>
        <Team {...this.props} setNav={this._setNav}/>
        <Contact {...this.props} setNav={this._setNav}/>
        <Footer {...this.props} setNav={this._setNav} setNavHome={this._setNavHome}/>
      </div>
    );
  }
}
