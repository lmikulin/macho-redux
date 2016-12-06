import React from "react";
import page from "../constants/page-constants";

export default class Product extends React.Component {
  render() {
    if (this.props.page === page.HOME || this.props.page === page.PRODUCT) {
      return (
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-lg-10">
              <div style={{display: "table", minHeight: "320px", paddingLeft: "8%"}}>
                <div style={{display: "table-cell", verticalAlign: "middle"}}>
                  <h2>The Macho App</h2>
                  <p>Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere
                  erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean
                  lacinia bibendum nulla sed consectetur.</p>
                  <p>Aenean eu leo quam. Pellentesque
                  rnare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna
                  mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus
                  posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Aenean.</p>
                  <button class="btn btn-default text-uppercase" onClick={this.props.setNav.bind(null, page.PRODUCT)}
                        style={{background: "#ff5555", border: 0, borderRadius: "16px", margin: "16px 0"}}>Download the App</button>
                </div>
              </div>
          </div>
          <div class="col-sm-4 hidden-xs col-lg-2">
            <img class="img-responsive" src="/images/iPhone_6.png" style={{maxHeight: "320px", paddingTop: "8%"}}/>
          </div>
        </div>
      );
    }
    return null;
  }
}
