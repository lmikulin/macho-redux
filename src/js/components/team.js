import React from "react";
import page from "../constants/page-constants";

export default class Team extends React.Component {
  render() {
    if (this.props.page === page.HOME || this.props.page === page.TEAM) {
      return (
        <div>
          <div style={{height: "70px", background: "#EEE"}}>
            <h4 class="text-muted text-center section-title page-link" onClick={this.props.setNav.bind(null, page.TEAM)}>Our Team</h4>
          </div>
          <div class="row">
            <div class="hidden-sm hidden-md hidden-lg col-xs-12">
              <div class="works-tile one-half">
                <img class="img-responsive" src="/images/team-0.jpg"/>
              </div>
              <div class="works-tile one-half">
                <img class="img-responsive" src="/images/team-1.jpg"/>
              </div>
            </div>
            <div class="hidden-xs hidden-md hidden-lg col-sm-12">
              <div class="works-tile one-third">
                <img class="img-responsive" src="/images/team-0.jpg"/>
              </div>
              <div class="works-tile" style={{width: "34%"}}>
                <img class="img-responsive" src="/images/team-1.jpg"/>
              </div>
              <div class="works-tile one-third">
                <img class="img-responsive" src="/images/team-2.jpg"/>
              </div>
            </div>
            <div class="hidden-xs hidden-sm hidden-lg col-md-12">
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/team-0.jpg"/>
              </div>
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/team-1.jpg"/>
              </div>
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/team-2.jpg"/>
              </div>
              <div class="works-tile one-fourth">
                <img class="img-responsive" src="/images/team-3.jpg"/>
              </div>
            </div>
            <div class="hidden-xs hidden-sm hidden-md col-lg-12">
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/team-0.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/team-1.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/team-2.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/team-3.jpg"/>
              </div>
              <div class="works-tile one-fifth">
                <img class="img-responsive" src="/images/team-4.jpg"/>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
