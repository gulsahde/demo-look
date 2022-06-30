import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  // @media ${props => props.theme.breakpoints.sm} {
  //   overflow-x: scroll;
  //   -webkit-overflow-scrolling: touch;
  //   scroll-snap-type: x mandatory;
  //   touch-action: pan-x;
  //   justify-content: initial;
  //   margin-bottom: 8px;
  // }
`
export const CarouselMobileScrollNode = styled.div`
  // @media ${props => props.theme.breakpoints.sm} {
  //   display: flex;
  //   min-width: ${({ final }) => final ? `120%;` : `min-content`}
  // }

  // @media ${props => props.theme.breakpoints.xxs} {
  //   display: flex;
  //   min-width: ${({ final }) => final ? `180%;` : `min-content`}
  // }
`

export const CarouselItem = styled.div`
  background: #0F1624;
  border-radius: 3px;
  max-width: 196px;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`


export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`