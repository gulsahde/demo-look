import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); //5: en üstteki butonların alanı bu sayı yükseldikçe sola kayar
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 1.8vw; //padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px); 
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
//portfolio logosu
export const Span=styled.span`
  font-size: 2rem;
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  padding-top: 1.8vw;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
//header kısmında en sağladki bölme: instagram, twitter, github butonları: div3
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  //margin-top:-30px;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
////header'daki Projects Technologies About kısmı
export const NavLink = styled.a`
  font-size: 2rem; 
  line-height: 32px;
  color: #0A0107;
  transition: 0.4s ease;

  .BackgroundColor{
    &::selection{
      background-color: #FF0000;
      color:#0A0107;
    }
    p, b, i{
        &::selection{
          background-color: #FF0000;
          color:#0A0107;
    }
  &:hover {
    color: #0A0107;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: #0A0107;
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #0A0107;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 
export const SocialLinks = styled.a`

  color: #0A0107;
  font-size: 2rem; //1.6rem
  font-weight:700;
  cursor:pointer;
  padding:0.5rem 2rem; //1rem:code,source yazısının üstteki açıklama yazısına olan uzaklığı; 2rem: butonun genişliği
  background:inherit; //#6b3030
  border: 2px solid #0A0107; //2px: buton çerçevesinin kalınlığı
  border-radius: 300px;
  transition: 0.1s;
  &:hover{ //source, code yazılarının üstüne gidildiğinde butona dönüşüyor
    background-color: #316B32;//#817F7F;
    border:2px solid #316B32;//#817F7F;
    color: #0A0107; //#E6E0E1 ;
    //transform: translate(0, 0.375em);
    //transform: translateY(0) scale(1.2);
  }
  
`
