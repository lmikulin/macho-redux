import React from "react";
import page from "../constants/page-constants";

export default class Slider extends React.Component {
  render() {
    if (this.props.page === page.HOME) {
      return (
        <div id="topCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
          <ol class="carousel-indicators">
            <li data-target="#topCarousel" data-slide-to="0" class="active" onClick={this._slide}></li>
            <li data-target="#topCarousel" data-slide-to="1" onClick={this._slide}></li>
            <li data-target="#topCarousel" data-slide-to="2" onClick={this._slide}></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="/images/slider-0.jpg" alt="casual dude checking his smart phone"/>
              <div class="carousel-caption">We like Bears</div>
            </div>
            <div class="item">
              <img src="/images/slider-1.jpg" alt="big hair woman with brick wall background"/>
              <div class="carousel-caption">We are Macho</div>
            </div>
            <div class="item">
              <img src="/images/slider-2.jpg" alt="Binocular man with red sesert backdrop"/>
              <div class="carousel-caption">We are looking for the Bear with a Parachute</div>
            </div>
          </div>
          <a class="left carousel-control" href="#topCarousel" role="button" data-slide="prev" onClick={this._slide}>
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#topCarousel" role="button" data-slide="next" onClick={this._slide}>
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      );
    }
    return null;
  }
}
