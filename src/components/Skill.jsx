import React from 'react'
import './module_css/skill.css'
import Html from './assets/html.png'
import CSS from './assets/css.png'
import Cplus from './assets/c++.png'
import Java from './assets/java.png'
import Pascal from './assets/pascal.png'
import Sql from './assets/sql.png'
import Python from './assets/python.png'
import Mysql from './assets/mysql.png'
import Javascript from './assets/javascript.png'
import Nodejs from './assets/nodejs.png'
import Php from './assets/php.png'
import Junit from './assets/junit.png'
import Go from './assets/go.png'
import Reactjs from './assets/react.png'
import Jmeter from './assets/jmeter.png'
import Postman from './assets/postman.png'
import Rest from './assets/rest.png'




export default function Skill() {
  return (
    <>
    <div className="title-skill"  data-aos="fade-up">
        Skill
        <div className="wrapper-line"></div>
    </div>
        <div className="skill-box" >
        
        <div className="box-title1">
            Experienced
        </div>
       
            
        <div className="skill-box-1" data-aos="fade-up">
        <div className="skill-box-group"> <div className="html"><img src={Html} title="HTML" alt="" /></div></div>
        <div className="skill-box-group"><div className="css"><img src={CSS} title="CSS" alt="" /></div></div>
        <div className="skill-box-group"> <div className="cplus"><img src={Cplus} title="C++" alt="" /></div></div>
        <div className="skill-box-group"><div className="java"><img src={Java} title="JAVA" alt="" /></div></div>
        <div className="skill-box-group"><div className="pascal"><img src={Pascal} title="PASCAL" alt="" /></div></div>
        <div className="skill-box-group"><div className="sql"><img src={Sql} title="SQL" alt="" /></div></div>
        <div className="skill-box-group"><div className="python"><img src={Python} title="PYTHON" alt="" /></div></div>
        <div className="skill-box-group"><div className="javascript"><img src={Javascript} title="JAVASCRIPT" alt="" /></div></div>
        <div className="skill-box-group"> <div className="nodejs"><img src={Nodejs} title="NODEJS" alt="" /></div></div>
        <div className="skill-box-group"><div className="php"><img src={Php} title="PHP" alt="" /></div></div>
        <div className="skill-box-group"><div className="mysql"><img src={Mysql} title="MYSQL" alt="" /></div></div>
       
        </div>
        <div className="box-title2">
            Novice
        </div>
        <div className="skill-box-2">
        <div className="junit"><img src={Junit} title="JUNIT" alt="" /></div>
            <div className="go"><img src={Go} title="GO" alt="" /></div>
            <div className="react"><img src={Reactjs} title="REACTJS" alt="" /></div>
            <div className="jmeter"><img src={Jmeter} title="JMETER" alt="" /></div>
            <div className="postman"><img src={Postman} title="POSTMAN"alt="" /></div>
            <div className="rest"><img src={Rest} title="REST API" alt="" /></div>
        </div>
          
            </div>
  
    </>
  )
}
