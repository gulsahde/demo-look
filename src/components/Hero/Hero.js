import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
//import Ldesign from '/public/images/WEBLOGO.png';

import { Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import { HContainerBlocks} from './HeroStyles';
// import { ContainerBlocks } from '../Projects/ProjectsStyles';


const Hero = (props) => (

  <Section row nopadding>
    <HContainerBlocks>
      <div className="section_background">
        <div className="left">
          <SectionTitle style={{scrollBehavior:'smooth'}}>
            GULSAH<br/>
            D—
          </SectionTitle>
          {/* IN—BASIC */}
        </div>
      </div>

      <div className='right'>
        <SectionText>
          <p>
            I am a Full Stack Web Developer creating expressive and functional websites, also I am passionate about Web Design. 
            I work with agencies, companies, and people all over the world. I am flexible in working on all kinds of projects whether they are big or small projects.
          </p>
        </SectionText>
        
        <div className='aboutmepopup'>
          <div id="wrapper">
            <a className='arrow-link' href="#aboutmesection">See more
            <span className='arrow'></span>   
            </a>
          </div>

          <div id="aboutmesection" className="overlay">
            <div className="popup">
              <section id="nav-container">
                <div className="topheader">
                  <p id="news-label" className="desktop">INFO — MISSION</p>
                  <div id="news-container" className="desktop">
                    <div className="news">
                      <p>Available for work now 🌍</p>
                      <p>I welcome any freelance project to work with good people 💜</p>
                      <p>We can make a great collab 👀</p>
                      <p>Have a nice day!!! ✨
                      </p>
                    </div>
                  </div> 
                </div>
              </section>
              <br/>
              {/* <a className="close_smallsize" href="#">&times;</a> */}
              <a className="close" href="#">Close</a> 
              <div className="content">

                <div className="c1"> 
                  <p>Hi there, I am Gülşah Değer. I am a Full Stack Web Developer based in Istanbul, Turkey. I am also passionate about web designing. In 2019, I have completed my Bachelor's degree in Computer Engineering. I worked as a developer in the Business Intelligence field of a global construction company and coded the processes 
                  and workflows. With my passion for web development, I changed my field and started working as a freelance web developer.
                  <br/>
                  <br/>
                   I am always interested in new opportunities and collaborations, Whether it’s about <font style={{color:'rgb(202, 49, 49)'}}>website development and design</font>, <font style={{color:'rgb(202, 49, 49)'}}>other website projects</font>, <font style={{color:'rgb(202, 49, 49)'}}>maintenance services</font>, or <font style={{color:'rgb(202, 49, 49)'}}>pure consulting jobs</font>. 
                  </p>
                </div>
                <div className="c2" style={{float:"right"}}>
                  <p>
                    With a strong interest in art, technology, and culture, I work on a variety of projects. I also give importance to the user-friendliness of websites. Finding inspiration within a wide range of fields and environments is the most essential propellant for my creative process. I approach with a sense of curiosity and care for each of my projects, and consistently direct clients to discerning solutions that feel uniquely.
                    <br/>
                    <br/>
                    I am always looking for new ways to meet, exchange ideas, and craft great work with people. If you would like to work or get in touch with me, please don't hesitate to&nbsp;
                    <Link href="mailto:ggulsahdeger@gmail.com" target="_blank" rel="noopener noreferrer">
                      <a style={{color:"rgb(202, 49, 49)"}}>
                      send me an email
                      </a>
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="secondcontent">
                <div className="skillspart">
                  <header className="popup-background">
                  {/* popup-background = bg-gray */}
                    <a className="cloud block">Skills:</a>
                    {/* cloud = leading-0-9 */}
                    <div className="general-features" style={{overflow: "hidden", height: "auto"}}>
                    {/* relative = position-relative /  width-full = w-full / left-0 */}
                      <div className="popup-background-size flexible">
                      {/* flex flex-wrap = flexible, c-gap c-gap-x-1.5 c-gap-y-1.5 sm:c-gap-x-2 sm:c-gap-y-2 silindi */}
                        <button className="gap-y gap-x cloud-style" style={{backgroundColor:"#EBE9E8"}}>
                        {/* gap-y = py-2, sm:py-2.5 silindi, sm:px-3.5  silindi, cloud-style=rounded-full */}
                          <span className="cloud block">Backup and Security</span>
                        </button>
                        <button className="gap-y gap-x cloud-style" style={{backgroundColor: "#EBE9E8"}}>
                          <span className="cloud block">Design Research</span>
                        </button>
                        <button className="gap-y gap-x cloud-style" style={{backgroundColor: "#EBE9E8"}}>
                          <span className="cloud block">Usability Testing</span>
                        </button>
                        <button className="gap-y gap-x cloud-style" style={{backgroundColor: "#EBE9E8"}}>
                          <span className="cloud block">System Design</span>
                        </button>
                        <button className="gap-y gap-x cloud-style" style={{backgroundColor: "#EBE9E8"}}>
                          <span className="cloud block">Interface Design</span> 
                        </button>
                        <button className="gap-y gap-x cloud-style" style={{backgroundColor: "#EBE9E8"}}>
                          <span className="cloud block">Human-Centered Design</span>
                        </button>
                        <button className="gap-y gap-x cloud-style" style={{backgroundColor: "#EBE9E8"}}>
                          <span className="cloud block">Web Usability</span>
                        </button>
                        <button className="gap-y gap-x cloud-style" style={{backgroundColor: "#EBE9E8"}}>
                          <span className="cloud block">SEO</span>
                        </button>
                      </div>
                    </div>
                  </header>
                </div>
              </div>

              {/* skills ve tools buradaydı */}


            </div>
          </div>
        </div>
      </div>
    </HContainerBlocks>
  </Section>
);

export default Hero;
