import styled from 'styled-components'

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 5rem 16.5rem;
  padding-left:13rem;
  
  //buradan "@media ${props => props.theme.breakpoints.lg}" silince düzeldi
 
    
      @media ${props => props.theme.breakpoints.md}{
        flex-direction: column;
        display: flex;
        align-items: left;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-left:18rem;
      }
  

      @media ${(props) => props.theme.breakpoints.xxs} { 
        flex-direction: column;
        display: flex;
        align-items: left;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-left:16.6rem;
        margin-bottom:2rem;
      }

      
    @media ${(props) => props.theme.breakpoints.xl} { //teknoloji başlıklarının alt alta dizilmesini sağladı
      flex-direction: column;
      max-width: 100%;
      display: inline-block;
      align-items: left;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    @media ${(props) => props.theme.breakpoints.xs} { //teknoloji başlıklarının alt alta dizilmesini sağladı
      flex-direction: column;
      width: 100%;
      display: block;
      //padding-top:8px;
      margin-left:17rem;
      margin-bottom:-2rem;
    }
    @media ${(props) => props.theme.breakpoints.lg} { //teknoloji başlıklarının alt alta dizilmesini sağladı
      flex-direction: column;
      width: 100%;
      display: block;
      margin-left:4rem;
      margin-bottom:-3rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} { //teknoloji başlıklarının alt alta dizilmesini sağladı
      flex-direction: column;
      display: flex;
      align-items: left;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-left:16.6rem;
    }

`

export const ListContainer = styled.div`
  display: inline; //flex
  flex-direction: column;
  

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    flex-direction: column;
    height:4rem;
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    height:2rem;
  }

  @media ${props => props.theme.breakpoints.xxs}{
    display: flex;
    flex-direction: column;
    height:3rem;
    margin-left:-3rem;
    height:2rem;
  }
  

  @media ${props => props.theme.breakpoints.xs}{
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
    padding-right: 0;
    width:%100;
    height:5rem;
  }
  @media ${props => props.theme.breakpoints.lg}{
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
    padding-right: 0;
    width:%100;
    height:9rem;
  }

  @media ${props => props.theme.breakpoints.xl}{
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
    padding-right: 0;
    margin-top:1rem;
    width:%100;
    height: 9rem; //8
    }
  
`



export const ListItem = styled.li`
  max-width: 320px;
  display: inline;
  flex-direction: column;
  //border: 1px solid black;
  text-align: center;
  //padding-bottom: 25px;
  margin-bottom:-10px;
  //transition: 0.3s ease;
  // &:hover {
  //   background-color:orange;
  // }

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}
`


export const TechSection= styled.div`
    
    width: 100%;
    padding-top: 3.8rem;
    position: block;//fixed;
    background-color: inherit;
    
    .content {
      position: static;
      top: 50%;
      left: 50%;
      padding-left:4rem;
      width: 45rem;
      transform: translate(-50%, -50%);
      height: 80px; //açıklama alanıyla arasındaki uzaklık
      overflow:hidden;
      font-size: 28px;
      line-height: 40px;
      color: #0A0107;

      @media ${(props) => props.theme.breakpoints.lg} { 
        width:102rem;
        padding-left:34rem;
        margin-top:-2rem;
      }
      @media ${(props) => props.theme.breakpoints.xl} { 
        width:102rem;
        padding-left:24rem;
        margin-top:-1rem;
      }
      @media ${(props) => props.theme.breakpoints.xxl} { 
        width:102rem;
        padding-left:24rem;
        margin-top:-1rem;
      }
      @media ${(props) => props.theme.breakpoints.md} { 
        width:70rem;
      }
      @media ${(props) => props.theme.breakpoints.xs} { 
        margin-left:-14rem;
        margin-top:-4rem;
      }
      @media ${(props) => props.theme.breakpoints.xxs} { 
        margin-left:-12rem;
        margin-top:-2rem;
      }
      @media ${(props) => props.theme.breakpoints.sm} { 
        margin-left:-11rem;
        margin-top:-1rem;
        padding-bottom:5rem;
      }
      

      
      &__container {
        font-weight: 400; //font kalınlığı
        overflow: hidden;
        height: 40px; //tek bir seçeneğin yüksekliği :40
        margin-right: 20px;
        margin-left: 20px;

        @media ${(props) => props.theme.breakpoints.lg} { //3 parçanın da yüksekliği
          height:45px;
        }

        @media ${(props) => props.theme.breakpoints.xl} { //3 parçanın da yüksekliği
          height:42px;
        }
  

        &:after, &:before {
          position: absolute;
          top: 0;
          //color: #22349F;
          font-size: 42px;
          line-height: 40px;

        }

        &__text {
          display: inline;
          float: left;
          margin: 0;

          @media ${(props) => props.theme.breakpoints.lg} { //front-end.. vb başlıklar
            font-size:35px;
          }
          @media ${(props) => props.theme.breakpoints.xl} { //front-end.. vb başlıklar
            font-size:40px;
          }
          @media ${(props) => props.theme.breakpoints.sm} { //front-end.. vb başlıklar
            font-size:25px; //26
          }
          @media ${(props) => props.theme.breakpoints.md} { //front-end.. vb başlıklar
            font-size:32px;
          }
          @media ${(props) => props.theme.breakpoints.xs} { //front-end.. vb başlıklar
            font-size:20px;
          }
          @media ${(props) => props.theme.breakpoints.xxs} { //front-end.. vb başlıklar
            font-size:19px;
          }

        }

        &__list {
          margin-top: 0;
          padding-left: 140px; //110 - dönen seçeneklerin başlığa olan uzaklığı
          text-align: left; 
          list-style: none;
        
          -webkit-animation-name: change;
          -webkit-animation-duration: 10s;
          -webkit-animation-iteration-count: infinite;
          animation-name: change;
          animation-duration: 20s; //elemanların değişme hızı
          animation-iteration-count: infinite;

          &__item {
            line-height:40px;
            margin:0;

            @media ${(props) => props.theme.breakpoints.lg} { //teknoloji çeşitleri
              font-size:35px;
              padding-left: 100px;
              height:105px;
              //padding-top:15px;
            }
            @media ${(props) => props.theme.breakpoints.xs} { //teknoloji çeşitleri
              font-size:20px;
            }
            @media ${(props) => props.theme.breakpoints.xl} { //teknoloji çeşitleri
              font-size:40px;
              padding-left: 80px;
              height:105px;
            }
            @media ${(props) => props.theme.breakpoints.sm} { //teknoloji çeşitleri
              font-size:25px;
            }
            @media ${(props) => props.theme.breakpoints.md} { //teknoloji çeşitleri
              font-size:32px;
              padding-left:4rem;
            }
            @media ${(props) => props.theme.breakpoints.xxs} { //teknoloji çeşitleri
              font-size:19px;
              margin-left:-4rem;
            }

          }
        }
      }
    }

    @-webkit-keyframes opacity {
      0%, 100% {opacity:0;}
      50% {opacity:1;}
    }

    @-webkit-keyframes change {
      0%, 12.66%, 100% {transform:translate3d(0,0,0);}
      16.66%, 29.32% {transform:translate3d(0,-25%,0);}
      33.32%,45.98% {transform:translate3d(0,-50%,0);}
      49.98%,62.64% {transform:translate3d(0,-75%,0);}
      66.64%,79.3% {transform:translate3d(0,-50%,0);}
      83.3%,95.96% {transform:translate3d(0,-25%,0);}
    }

    @-o-keyframes opacity {
      0%, 100% {opacity:0;}
      50% {opacity:1;}
    }

    @-o-keyframes change {
      0%, 12.66%, 100% {transform:translate3d(0,0,0);}
      16.66%, 29.32% {transform:translate3d(0,-25%,0);}
      33.32%,45.98% {transform:translate3d(0,-50%,0);}
      49.98%,62.64% {transform:translate3d(0,-75%,0);}
      66.64%,79.3% {transform:translate3d(0,-50%,0);}
      83.3%,95.96% {transform:translate3d(0,-25%,0);}
    }

    @-moz-keyframes opacity {
      0%, 100% {opacity:0;}
      50% {opacity:1;}
    }

    @-moz-keyframes change {
      0%, 12.66%, 100% {transform:translate3d(0,0,0);}
      16.66%, 29.32% {transform:translate3d(0,-25%,0);}
      33.32%,45.98% {transform:translate3d(0,-50%,0);}
      49.98%,62.64% {transform:translate3d(0,-75%,0);}
      66.64%,79.3% {transform:translate3d(0,-50%,0);}
      83.3%,95.96% {transform:translate3d(0,-25%,0);}
    }

    @keyframes opacity {
      0%, 100% {opacity:0;}
      50% {opacity:1;}
    }

    @keyframes change {
      0%, 12.66%, 100% {transform:translate3d(0,0,0);}
      16.66%, 29.32% {transform:translate3d(0,-25%,0);}
      33.32%,45.98% {transform:translate3d(0,-50%,0);}
      49.98%,62.64% {transform:translate3d(0,-75%,0);}
      66.64%,79.3% {transform:translate3d(0,-50%,0);}
      83.3%,95.96% {transform:translate3d(0,-25%,0);}
    }

    // 6 is the number of animation.
    // Here, there are 4 lines :

    // 1 to 2
    // 2 to 3
    // 3 to 4
    // 4 to 3
    // 3 to 2
    // 2 to 1

    // 6x + 6y = 100 (100% duration)

    // HERE : 
    // y = 4 -> Animation between two lines
    // x = 12.66 -> Time spent on a line

    // You can define a value and calculate the other if you want change speed or the number of lines

`


