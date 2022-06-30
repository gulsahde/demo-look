import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  //row-gap: 3rem;

`

export const ContainerBlocks = styled.section`

      .section_background {
        display: flex;
        min-width: 750px
        width: 100%;
        min-height: 12rem;
        margin-top: -2rem;
        //border-top: 1px solid #000;
      }
      .section_background .left{

        width: 40%; //sol kolonun genişliği
        min-width: 750px
        display: block;
        padding:3rem;
      }
      .left{
        nav.contact-navigation {
          padding-top:1rem;
          z-index: 1;
          position: fixed;
          width: 100%; //iletişim bloklarının genişliği
          background-color: inherit;
          padding-left: 60px;
          transition: all .45s;
          @media ${props => props.theme.breakpoints.xs}{
            width:30rem;
            margin-left:-4rem;
            margin-top:-1rem;
          }
          @media ${props => props.theme.breakpoints.lg}{
            width:72.5rem;
            margin-left:-3rem;
            margin-top:-1rem;
          }
          @media ${props => props.theme.breakpoints.xl}{
            width:48rem;
            margin-left:-3rem;
            margin-top:-1rem;
          }
          @media ${props => props.theme.breakpoints.sm}{
            width:42rem;
            margin-left:-3rem;
            margin-top:-1rem;
            margin-bottom:-2rem;
          }
          @media ${props => props.theme.breakpoints.md}{
            width: 65rem;
            margin-left:-0.5rem;
            margin-top:-1rem;
          }

          //***Beliri bir boyutta yan çevrilmiş telefonun görüntü düzenlemeleri için >>> and (orientation : landscape)
          //**iletişim menülerinin genişliği yan dönmüş telefonların boyutu için fazla uzundu, bu şekilde düzenleme sağlandı
          @media only screen and (min-width : 577px) and (max-width : 769px) 
          and (orientation : landscape){
            width: 55rem;
            margin-left:-0.5rem;
            margin-top:-1rem;

          }

          @media ${props => props.theme.breakpoints.xxs}{
            width: 25rem;
            margin-left:-5rem;
            margin-top:-2.5rem;
          }
          ol {
            display: flex;
            flex-direction: column-reverse;
          }
          li {
            height: 0;
            padding: 0;
            transition: height .45s,width .45s;
            overflow: hidden;
            border: none;
            
            &.active {
              height: 4.6725rem;
              padding: 1rem 1.2rem;
              //border-bottom: 1px solid #0A0107;
            }
            a {
              display: flex;
              align-items: flex-end;
            }
          }
        
          .index, .status, .date {
            width: 6.4rem;
          }
          .status {
            text-transform: capitalize;
          }
          .title {
            //width: calc(100% - (6.4rem * 3));
            color: #0A0107; //başlıkların rengi
            background-color: transparent;
            text-transform: uppercase;
            font-weight: 700; //500
            font-size: 24px; //2rem
            line-height: 120%;//25px; 
            letter-spacing: 0.0225rem;

            
            @media ${props => props.theme.breakpoints.lg}{
              font-size: 26px;
            }
            @media ${props => props.theme.breakpoints.xl}{
              font-size: 31px;
            }
            @media ${props => props.theme.breakpoints.xxl}{
              font-size: 33px;
            }
            @media ${props => props.theme.breakpoints.md}{
              font-size: 28px;
            }
            @media ${props => props.theme.breakpoints.sm}{
              font-size: 22px;
            }
            @media ${props => props.theme.breakpoints.xxs}{
              font-size: 20px;
            }
            @media ${props => props.theme.breakpoints.xs}{
              font-size: 20px;
            }
           


          }
          .description {
            display: none;
            width: calc(100% - (6.4rem * 2));
            span {
              display: block;
              max-width: 100%;
            }

            @media ${props => props.theme.breakpoints.lg}{
              font-size: 22px;
              width: calc(100% - (22px * 2));
            }
            @media ${props => props.theme.breakpoints.md}{
              font-size: 20px;
              width: 100%;
            }
            @media ${props => props.theme.breakpoints.xxl}{
              font-size: 22px;
              width: 60rem;
              //margin-top:1rem;
            }
            @media ${props => props.theme.breakpoints.xl}{
              font-size: 25px;
              width: 100%;
            }
            @media ${props => props.theme.breakpoints.sm}{
              font-size: 19px;
              width: 100%;
            }
            @media ${props => props.theme.breakpoints.xxs}{
              font-size: 12px;
              width: 100%;
            }
            @media ${props => props.theme.breakpoints.xs}{
              font-size: 14px;
              width: calc(100% - (14px * 1));
              //margin-top:20px;
            }
          }
        
          &.open {
            padding-left: 40rem;
            li {
              height: 4.6725rem;
              padding: 1rem 0 1rem 1.2rem;
              //border-bottom: 1px solid #0A0107;
              
              // @media ${props => props.theme.breakpoints.lg}{ //menü elemanlarının aralığı
              //  height:65px;
              // }
                
            
  
              &:hover {
                background:#0A0107;
                a {
                  color:rgb(202, 49, 49);//#FF0000;// #499C4B;
                  font-size: 20px;
                  line-height: 120%; 
                  .title {
                    display: none;
                  }
                  .description {
                    display: block;
                  }
                }
              }
            }
          }
        }
        
        
          nav.contact-navigation {
            position: fixed;
            top: 10.6vw;
            padding-left: 0;
            &.open {
              position: relative;
              padding-left: 0;
              top: 0;
            }
          } 
    }

 
    .right{
      padding-left: 60rem;
      padding-bottom:10rem;
      margin-top:-23.5rem;
      display: block;

      //width:-50%;

      @media ${props => props.theme.breakpoints.lg}{
        margin-top: 2px; //açıklama yazısının iletişim menüsüne uzaklığı
        margin-bottom: 64px;
        padding: 16px 24px;
        width: fit-content;
        font-size: 20px;
      }
    
      @media ${props => props.theme.breakpoints.xl}{
        margin-bottom:-18rem;
      }
    
      @media ${props => props.theme.breakpoints.md}{
        display: flex;
        flex-direction: column;
        padding: 2rem;  
        padding-bottom: 0;
        padding-right: 0;
        width:%100;
        margin-top: -30px; //açıklama yazısının iletişim menüsüne uzaklığı
      }
      
      @media ${props => props.theme.breakpoints.sm}{
        display: flex;
        flex-direction: column;
        padding: 2rem;  
        padding-bottom: 0;
        padding-right: 0;
        width:%100;
        font-size:18px;
      }

      @media ${props => props.theme.breakpoints.xs}{
        width:90rem;
        padding-bottom:10rem;
      }
      @media ${props => props.theme.breakpoints.xxs}{
        width:82.5rem;
      }

`




