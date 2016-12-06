import React from "react";
import page from "../constants/page-constants";

export default class Works extends React.Component {
  render() {
    if (this.props.page === page.HOME || this.props.page === page.WORKS) {
      return (
        <div style={{position: "relative"}}>
          <div style={{height: "70px", background: "#EEE"}}>
            <h4 class="text-muted text-center section-title page-link" onClick={this.props.setNav.bind(null, page.WORKS)}>Our Works</h4>
          </div>
          <div class="row" style={{position: "relative"}}>
            <div class="hidden-sm hidden-md hidden-lg col-xs-12">
              <div class="works-tile one-half">
                <img class="img-responsive" src="/images/works-0.jpg"/>
              </div>
              <div class="works-tile one-half">
                <img class="img-responsive" src="/images/works-1.jpg"/>
              </div>
            </div>
            <div class="hidden-xs hidden-md hidden-lg col-sm-12">
              <div class="works-tile one-third">
                <img class="img-responsive" src="/images/works-0.jpg"/>
              </div>
              <div class="works-tile" style={{width: "34%"}}>
                <img class="img-responsive" src="/images/works-1.jpg"/>
              </div>
              <div class="works-tile one-third">
                <img class="img-responsive" src="/images/works-2.jpg"/>
              </div>
            </div>
            <div class="hidden-xs hidden-sm hidden-lg col-md-12">
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/works-0.jpg"/>
              </div>
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/works-1.jpg"/>
              </div>
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/works-2.jpg"/>
              </div>
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/works-3.jpg"/>
              </div>
            </div>
            <div class="hidden-xs hidden-sm hidden-md col-lg-12">
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/works-0.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/works-1.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/works-2.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/works-3.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/works-4.jpg"/>
              </div>
            </div>
          </div>
          <div class="row" style={{position: "relative", top: "-4px"}}>
            <div class="hidden-sm hidden-md hidden-lg col-xs-12">
              <div class="works-tile one-half">
                <img class="img-responsive" src="/images/works-5.jpg"/>
              </div>
              <div class="works-tile one-half">
                <img class="img-responsive" src="/images/works-6.jpg"/>
              </div>
            </div>
            <div class="hidden-xs hidden-md hidden-lg col-sm-12">
              <div class="works-tile one-third">
                <img class="img-responsive" src="/images/works-5.jpg"/>
              </div>
              <div class="works-tile" style={{width: "34%"}}>
                <img class="img-responsive" src="/images/works-6.jpg"/>
              </div>
              <div class="works-tile one-third">
                <img class="img-responsive" src="/images/works-7.jpg"/>
              </div>
            </div>
            <div class="hidden-xs hidden-sm hidden-lg col-md-12">
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/works-5.jpg"/>
              </div>
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/works-6.jpg"/>
              </div>
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/works-7.jpg"/>
              </div>
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/works-8.jpg"/>
              </div>
            </div>
            <div class="hidden-xs hidden-sm hidden-md col-lg-12">
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/works-5.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/works-6.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/works-7.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/works-8.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/works-9.jpg"/>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
