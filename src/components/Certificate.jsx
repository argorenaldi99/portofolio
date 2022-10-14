import React, { Component } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './module_css/certificate.css'
import Pdf1 from "./assets/certificate-1.pdf"
import Pdf2 from "./assets/certificate-2.pdf"
import Pdf3 from "./assets/certificate-3.pdf"

export default class certificate extends Component {
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
        <div className="certificate-title" data-aos="fade-up">
          Certificate
        </div>
        <div className="certificate-line" data-aos="fade-up"></div>
        <div className="courosel-certificate" data-aos="fade-up">
          <Slider {...settings}>
            <div><a href={Pdf1} without rel="noopener noreferrer" target="_blank"><img src={require('./assets/certificate-1.png')} alt="Softwere Depelovment Process and Methodologies" title='Softwere Depelovment Process and Methodologies' /></a></div>
            <div><a href={Pdf2} without rel="noopener noreferrer" target="_blank"><img src={require('./assets/certificate-2.png')} alt="Softwere Requirements Prioritization : Risk Analysis" title='Softwere Requirements Prioritization : Risk Analysis' /></a></div>
            <div><a href={Pdf3} without rel="noopener noreferrer" target="_blank"><img src={require('./assets/certificate-3.png')} alt="Introduction to Softwere Testing" title='Introduction to Softwere Testing' /></a></div>
          </Slider>
        </div>
      </>
    )
  }
}
