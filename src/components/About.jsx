import React from 'react'
import './module_css/about.css'
import Email from './assets/email.png'
import Whatsapp from './assets/wa.png'
import Github from './assets/github.png'
import Linkedin from './assets/linkedin.png'
import Foto from './assets/foto.png'

export default function About() {
  return (
    <>

      <div className="card" data-aos="fade-up">

        <div className="foto"><img src={Foto} alt='' /></div>

        <div className="contact">
          <div className="github">
            <a href='https://github.com/argorenaldi99/' target='_blank' rel='noopener noreferrer'>
              <img src={Github} alt="" />
            </a>
          </div>
          <div className="whatsapp">
            <a href='http://wa.me/6281313074205' target='_blank' rel='noopener noreferrer'>
              <img src={Whatsapp} alt="" />
            </a>
          </div>
          <div className="linkedin">
            <a href='https://id.linkedin.com/in/argo-dwi-renaldi-ba8947200' target='_blank' rel='noopener noreferrer'>
              <img src={Linkedin} alt="" />
            </a>
          </div>
          <div className="email">
            <a href='mailto: argorenaldi2908@gmail.com' target='_blank' rel='noopener noreferrer'>
              <img src={Email} alt="" />
            </a>
          </div>
        </div>
        <div className="title">
          bachelor of information technology
          <div className="title-line"></div>
        </div>
        <div className="card-content">
          “Hello, I'm Argo Dwi Renaldi, I was born in Sukabumi, August 29, 1999. I live in Sukabumi, West Java . Looking for a job that matches my skills and provides opportunities to grow with the company.I can work in a group, Work with target oriented and systematic.”
        </div>



      </div>





    </>
  )
}
