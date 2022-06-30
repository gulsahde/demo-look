import React from 'react';
//import Script from 'next/script'
import Link from 'next/link'

import { ContainerBlocks, ContactForm,Script } from './ProjectsStyles';
import { Section, SectionDivider, SectionSubTitle, SectionSubText,BackgroundColor, NoSelectable } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <br/>
    <SectionSubTitle>
        Contact      
    </SectionSubTitle>
    <ContainerBlocks>
    <NoSelectable>
      <div className="section_background">
        
        <div className="left">
          
          <nav className="contact-navigation open">
            <ol>
            <li>
                <Link href="https://gulsahde.medium.com/">
                  <a>
                    {/* <p className="index title-m">III</p> */}
                    <h2 className="title">Medium Blog</h2>
                    <p className="description">
                      <span>Read my tech blog.</span>
                    </p>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="https://www.instagram.com/gulsahddev/">
                  <a>
                  {/* <p className="index title-m">I</p> */}
                    <h2 className="title">Instagram</h2> 
                    {/* title title-m uc */}
                    <p className="description">
                      <span>Keep in touch via Instagram.</span>
                    </p>
                  </a>
                </Link>
              </li>
              
              <li>
                <Link href="https://twitter.com/gulsahddev">
                  <a>
                    {/* <p className="index title-m">II</p> */}
                    <h2 className="title">Twitter</h2>
                    <p className="description">
                    {/* description  title-xs*/}
                      <span>Keep in touch via Twitter.</span>
                    </p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://tr-tr.facebook.com/">
                  <a>
                    {/* <p className="index title-m">III</p> */}
                    <h2 className="title">Facebook</h2>
                    <p className="description">
                      <span>Keep in touch via Facebook.</span>
                    </p>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="mailto:ggulsahdeger@gmail.com" target="_blank" rel="noopener noreferrer">
                  <a>
                    {/* <p className="index title-m">IV</p> */}
                    <h2 className="title">E-MAIL</h2>
                    <p className="description">
                      <span>Feel free to email me to share your ideas.</span>
                    </p>
                  </a>
                </Link>
              </li>
            </ol>
          </nav>
        <br/>
        </div>
      </div>
      </NoSelectable>

      <div className="right">
        
        <SectionSubText>
          <div className="RightText">
            <p>
              If you would like to learn more about the process or would like to discuss a new project, please get in touch.
            <br/>
            <br/>
              You can click SEE MORE to get general information about me. <u>Detailed resume</u>, <u>cooperation offers</u>, and <u>other information</u> are available on request via email.
            </p>
          </div>
        </SectionSubText>
      </div> 

        

      </ContainerBlocks>
  </Section>
);

export default Projects;