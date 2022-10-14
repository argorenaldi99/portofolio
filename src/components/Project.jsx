import React, { Component } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./module_css/project.css"

export default class Project extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,

    };
    return (
      <>
        <div className="project-title" data-aos="fade-up">
          Latest Project
        </div>
        <div className="project-line" data-aos="fade-up"></div>
        <div className="courosel-project" data-aos="fade-up">
          <Slider {...settings}>
            <div><a href="/"><img src={require('./assets/portofolio.png')} alt="PORTOFOLIO" title='Portofolio' /></a></div>
            <div><a href="https://argorenaldi99.github.io/yugioh-app/" target="__blank"><img src={require('./assets/yugiohapp.png')} alt="YUGIOH CARD FINDER" title='Yugioh Card Finder' /></a></div>
          </Slider>
        </div>
      </>
    )
  }
}
