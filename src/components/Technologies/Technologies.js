import React from 'react';
// import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionSubText, SectionSubTitle, BackgroundColor, NoSelectable} from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Div1, Div2, Div3, TechSection} from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="tech">
    <br/>
    <br/>
    <br/>
    <br/>
    <SectionDivider/>
    
    <br/>  
    <SectionSubTitle> 
      Technologies
    </SectionSubTitle>
    
      <SectionSubText>
          <p className="techSubText">The development process is founded on research and strategic thinking. I use these tools to build projects that are not only aesthetic but timeless, functional, minimal, and unique.</p>
      </SectionSubText>

     
      <List>
        <ListItem>
           <ListContainer>
            <NoSelectable>
            {/*<ListTitle>Front-end</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>*/}
              <TechSection>
                <div className="content">
                  <div className="content__container">
                    <p className="content__container__text">
                      Front-End:
                    </p>
                    
                    <ul className="content__container__list">
                      <li className="content__container__list__item">React</li>
                      <li className="content__container__list__item">JavaScript</li>
                      <li className="content__container__list__item">HTML</li>
                      <li className="content__container__list__item">CSS/SCSS</li>
                    </ul>
                  </div>
                </div>
              </TechSection>
            </NoSelectable>
          </ListContainer> 
        </ListItem>
        


        <ListItem>
           <ListContainer>
            <NoSelectable>
            {/* <ListTitle>Back-end</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and  Databases
            </ListParagraph> */}
              <TechSection>
                <div className="content">
                  <div className="content__container">
                    <p className="content__container__text">
                      Back-End:
                    </p>
                    
                    <ul className="content__container__list">
                      <li className="content__container__list__item">Python</li>
                      <li className="content__container__list__item">JavaScript</li>
                      <li className="content__container__list__item">MongoDB</li>
                      <li className="content__container__list__item">SQL</li>
                    </ul>
                  </div>
                </div>
              </TechSection>
            </NoSelectable>
          </ListContainer> 
        </ListItem>
        


        <ListItem>
          <ListContainer>
            <NoSelectable>
            {/* <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Figma
            </ListParagraph> */}
              <TechSection>
                <div className="content">
                  <div className="content__container">
                    <p className="content__container__text">
                      UI Design:
                    </p>
                    
                    <ul className="content__container__list">
                      <li className="content__container__list__item">Figma</li>
                      <li className="content__container__list__item">Adobe&nbsp;Photoshop</li>
                      <li className="content__container__list__item">Adobe&nbsp;XD</li>
                      <li className="content__container__list__item">Adobe&nbsp;Illustrator</li>
                    </ul>
                  </div>
                </div>
              </TechSection>
            </NoSelectable>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
