import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Skill from './Skill'
import "./module_css/global.css"
import Education from './Education'
import Experience from './Experience'
import Project from './Project'
import Certificate from './Certificate'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

export default function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Portofolio | Argo Dwi Renaldi</title>
      </Helmet>

      <div className="container">
        <Navbar />
        <div className="about" id="about">
          <About />
        </div>
        <div className="skill" id="skill">
          <Skill />
        </div>
        <div className="education" id="education">
          <Education />
        </div>
        <div className="experience" id="experience">
          <Experience />
        </div>
        <div className="latest-project" id="project">
          <Project />
        </div>
        <div className="certificate" id="certificate">
          <Certificate />
        </div>
        <div className="footer">
          Copyright 2022 Argo Dwi Renaldi.

        </div>
      </div>
    </>



  )
}
