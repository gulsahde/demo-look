import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionSubText, SectionSubTitle, NoSelectable, BackgroundColor} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

// const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider/>
      <br/>
        <SectionSubTitle>
            About Me
        </SectionSubTitle>
        <SectionSubText>
            At 2016, after graduating from The School of Visual Arts, I was honored to be named one of PRINT Magazine '15 Under 30' most promising designers working in the industry.
        </SectionSubText>
        <br/>
        <br/>
        <br/> 
    </Section>
  );
};

export default Timeline;