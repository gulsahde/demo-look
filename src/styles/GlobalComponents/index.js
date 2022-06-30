import styled from 'styled-components'

export const Section = styled.section` //tüm sitenin ortalanmasını ve hizasını sağlıyor
  
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;

    @media ${(props) => props.theme.breakpoints.xl} {
      padding-left:2rem;
      flex-direction: column;
      height: 100%;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
      padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
      flex-direction: column;
    }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
    flex-direction: column;
    min-height: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: auto;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
    flex-direction: column;
    min-height: 100%;
    height:50rem;
  }


  @media ${(props) => props.theme.breakpoints.xxs} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
    flex-direction: column;
    min-height: 100%;
  }
`



/*Welcome To My Personal Portfolio başlığı
Font-size: başlık için
line-height: Projects, Technologies.. yani küçük başlıklar
*/ 
export const SectionTitle = styled.div` //h1

  font-size: 140px;
  line-height: 120%;
  height: 200px;
  margin-top: 4rem;
  padding-right:2rem;
  padding-top:1rem;
  //margin-left:-4rem;
  -webkit-font-smoothing: antialiased;
  font-weight: 800;
  //line-height: 1.8em;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;  
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  color:#0A0107; //#EBE9E8; 
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;


  //seçim yapılamaz--------------
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; 
  //seçim yapılamaz--------------

 
  
  @media ${(props) => props.theme.breakpoints.xs}{
    font-size: 70px;
    margin-left:73.5rem;
    margin-top:-20rem;
    width:100%;
  }
  
  @media ${(props) => props.theme.breakpoints.md}{
    font-size: 140px;
    line-height: 120%;
    margin-top:-1rem;
    margin-left:-5rem;
  }
  @media only screen and (min-width : 576px) and (max-width : 620px) {
    font-size:110px;
  }
  @media only screen and (min-width : 620px) and (max-width : 657px) {
    font-size:120px;
  }
  @media ${(props) => props.theme.breakpoints.sm}{
    font-size: 110px;
    line-height: 120%;
    margin-left:-5rem;
    margin-top:0rem;
  }

  @media ${(props) => props.theme.breakpoints.lg}{
    font-size: 140px;
    line-height: 120%;
    margin-left:-6rem;
    margin-top:-1rem;
  }
  @media only screen and (min-width : 770px) and (max-width : 992px) and (orientation : landscape){ //large-lg yan
    font-size: 140px;
  }
  @media only screen and (min-width : 912px) and (max-width : 913px) { //surface pro 7 
    font-size: 150px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 140px;
    line-height:120%;
    margin-top:0rem;
    margin-left:-6rem;
  }
  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 140px;
    line-height:120%;
    margin-top:0rem;
    margin-left:-3rem;
  }

  @media ${(props) => props.theme.breakpoints.xxs} {
    font-size: 57px;
    line-height: 120%;
    margin-left:23rem;
    margin-top:-21rem;
    width:20rem;
  }

`

export const SectionSubTitle = styled.div`
    font-weight: 800;
    line-height: 1.8em;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    line-height: 1.3em;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    font-size:55px; 
    width: max-content;
    max-width: 100%;
    background: #0A0107;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
    padding: ${(props) => props.main ? '58px 0 16px' : '0'};

    //seçim yapılamaz--------------
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; 
    //seçim yapılamaz--------------

    @media ${(props) => props.theme.breakpoints.xs}{
      font-size: 45px;
      line-height: 120%;
      margin-left:-15px;
      width: 100%;
    }
  

    @media ${(props) => props.theme.breakpoints.md}{
      font-size: 70px;
      line-height: 120%;
      margin-bottom: 12px;
      
    }
    @media ${(props) => props.theme.breakpoints.sm}{
      font-size: 58px;
      line-height: 120%;
      margin-bottom: 8px;
      max-width: 100%;
    }

    @media ${(props) => props.theme.breakpoints.lg}{
      font-size: 65px;
      line-height: 120%;
      margin-left:-5px;
      width: 100%;
    }

    @media ${(props) => props.theme.breakpoints.xl} {
      font-size: 75px;
      line-height:120%;
      flex-direction: column;
    }
    @media ${(props) => props.theme.breakpoints.xxl} {
      font-size: 80px;
      line-height:120%;
      flex-direction: column;
    }


    @media ${(props) => props.theme.breakpoints.xxs} {
      font-size: 34px;
      line-height: 120%;
      margin-left:-2rem;
      width: 120%;
    }
`


export const NoSelectable = styled.div` //a
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; 
`





export const SectionImage = styled.div`

  display:flex;
  align-items:center;
  margin-bottom:0px;
  transition: 0.1s ease;
  overflow: hidden;
  transition: filter .9s;
  -webkit-user-drag: none;

  &:hover {
    filter: brightness(90%) grayscale(100%) contrast(130%);
    transition: filter .9s;
    -webkit-user-drag: none;
    user-drag: none;
  }



	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 16px 48px;
		width: calc(100vw - 32px);
	}
`


//GLAHMUSE başlığı altındaki açıklama kısmı 
export const SectionText = styled.div`
p{
  line-height: 120%;
  font-size: 28px;
  width:130%; 
  padding-top: 5.5rem;
  padding-left:2rem;
  border-left: 1px solid #0A0107;
  color: #0A0107; //section'ların altındaki açıklama yazıları
  -webkit-font-smoothing: antialiased;
  overflow-wrap: break-word;
  -webkit-text-size-adjust: 100%;
  hyphens: auto;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0em;
  //text-transform: none;
  vertical-align: baseline;
  overflow: hidden;
  
}
  p, b, i, a, u, br{
    
      &::selection{
        color:#EBE9E8;
  }
  


  @media ${(props) => props.theme.breakpoints.lg}{
    font-size: 30px;
    line-height: 120%;
    border-left: none;
    margin-left:-6rem;
    width: 110%;
    padding-top:10rem;
  }
  
  @media only screen and (min-width : 912px) and (max-width : 913px) { //surface pro 7 
    width:83rem;
    padding-top:14rem;
  }

  @media ${(props) => props.theme.breakpoints.xl}{
    font-size: 33px;
    line-height: 120%;
    border-left: none;
    margin-left:-79rem;
    width: 90rem;
    padding-top:38rem;
  }
  @media ${(props) => props.theme.breakpoints.xxl}{
    font-size: 32px;
    line-height: 120%;
    //border-left: none;
    margin-left:-10rem;
    width: 55rem;
    //padding-top:38rem;
  }

  @media ${(props) => props.theme.breakpoints.md}{
    font-size: 30px;
    line-height: 120%;
    border-left: none;
    margin-left:-5rem;
    //width: 135%;
    width:84vw;
    padding-top:13rem;
  }
  @media only screen and (min-width : 576px) and (max-width : 657px) {
    padding-top:8rem;
  }
  
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 120%;
    border-left: none;
    margin-left:-5rem;
    width: 125%;
    padding-top:25rem;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 20px;
    line-height: 120%;
    border-left: none;
  }
  @media screen and (min-width: 321px) and (max-width: 341px){
    width:31rem;
    padding-top:2.5rem;
  }
  @media screen and (min-width: 341px) and (max-width: 360px){
    width:33rem;
    padding-top:3rem;
  }
 

  @media ${(props) => props.theme.breakpoints.xxs} {
    font-size: 19px;
    line-height: 120%;
    border-left: none;
    margin-left:-50.5rem;
    width: 25.5rem;
    margin-top:-6rem;
  } 
`

export const BackgroundColor = styled.div`
  &::selection{
    background-color:#EBE9E8;
        color:#D21E1E; 
  }
  p, b, i, a, u{
      &::selection{
        background-color:#EBE9E8;
        color:#D21E1E; 
  }
`



//sayfadaki uzun ayrım çizgileri
export const SectionDivider = styled.div`
  margin-top:2px;
  border-bottom: 1px solid #0A0107;
  width:%100;

  @media ${(props) => props.theme.breakpoints.lg}{
    margin-top:6rem;
    margin-bottom:2rem;
    margin-right:1rem;
  }
  @media ${(props) => props.theme.breakpoints.xl}{
    //margin-top:3rem;
    margin-bottom:3rem;
    margin-left:-1rem;
    margin-right:3rem;
    padding-bottom:18rem;
  }
  @media ${(props) => props.theme.breakpoints.xs}{
    margin-top:4rem;
    margin-bottom:2rem;
    margin-right:-1rem;
    margin-left:-1rem;
  }
  @media ${(props) => props.theme.breakpoints.xxs}{
    margin-top:2rem;
    margin-bottom:2rem;
    margin-left:-2rem;
    margin-right:-2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm}{
    margin-top:-2rem;
    margin-bottom:2rem;
  }
  @media ${(props) => props.theme.breakpoints.md}{
    margin-top:4rem;
    margin-bottom:2rem;
    //width:46%;
  }
`
export const SectionSubText = styled.div`
p, .RightText{
  //max-width: 100%;
  font-weight: 300px;
  font-size: 22px;
  line-height: 120%;//25px; 
  color: #0A0107;
  letter-spacing: -.0525rem;
  hyphens: auto;

}

.RightText{
  margin-bottom:-4rem;

  @media ${(props) => props.theme.breakpoints.lg}{
    margin-top:-3rem;
    margin-left:-1rem;
    width:75rem;
    margin-bottom:-12rem;
  }
  @media only screen and (min-width : 912px) and (max-width : 913px) { //surface pro 7 
    width:85rem;
    margin-bottom:-15rem;
  }
  @media ${(props) => props.theme.breakpoints.xs}{
    padding-top:20rem;
    margin-left:-59rem;
    width:28rem;
  }
  @media screen and (min-width: 393px) and (max-width: 420px){
    width:33rem;
  }


  u{
    font-weight: bold;
    display: inline-block;
    white-space: nowrap;
    &:hover {
      font-style: italic;
    }

    @media ${(props) => props.theme.breakpoints.xs}{
      display:inline;
      margin-left:0.5px;
    }
    @media ${(props) => props.theme.breakpoints.xxs}{
      display:inline;
      margin-left:0.5px;
    }
    @media ${(props) => props.theme.breakpoints.sm}{
      margin-left:0.5px;
      display:inline;
    }
    @media ${(props) => props.theme.breakpoints.md}{
      //margin-left:0.5px;
      display:inline;
    }
    @media ${(props) => props.theme.breakpoints.lg}{
      //margin-left:0.5px;
      display:inline;
    }
    @media ${(props) => props.theme.breakpoints.xl}{
      //margin-left:0.5px;
      display:inline;
    }
    @media ${(props) => props.theme.breakpoints.xxl}{
      //margin-left:0.5px;
      display:inline;
    }

  } //u'nun bitişi


  @media ${(props) => props.theme.breakpoints.sm}{
    font-size: 19px;
    line-height: 120%;
    padding-top:21rem;
    width:100%;
    margin-left:-2rem;
    padding-bottom:4rem;
  }
  @media ${(props) => props.theme.breakpoints.md}{
    font-size: 20px;
    line-height: 120%;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
      margin-top:-31rem;
      margin-left:-9rem;
      width: 110%;
      margin-bottom:-5rem;
  }
  @media ${(props) => props.theme.breakpoints.xxl} {
    margin-top:-31rem;
    margin-left:-9rem;
    width: 110%;
    margin-bottom:-5rem;
  }
  @media ${(props) => props.theme.breakpoints.xxs} {
      margin-top:22rem;
      margin-left:-59.5rem;
      margin-bottom:-13rem;
      width:100%;
  }

} //.RightText'in bitişi


  p, b, i, a, u, br{
      &::selection{
      color:#EBE9E8;//#D21E1E; 
  }

 

  @media ${(props) => props.theme.breakpoints.lg}{
    font-size: 22px;
    line-height: 120%;
    //padding-top:2rem;
    //padding-bottom:2rem;
    width:94%;
  }

  @media ${(props) => props.theme.breakpoints.md}{
    font-size: 20px;
    line-height: 120%;
    padding-top:1rem;
    margin-bottom:-2rem;
    width:94%;
  }
  
  @media ${(props) => props.theme.breakpoints.sm}{
    font-size: 19px;
    line-height: 120%;
    padding-top:2rem;
    width:100%;
    margin-left:1rem;
  }

  

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 25px;
    line-height: 120%;
    padding-top:3rem;
    padding-bottom:2rem;
  }
  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 25px;
    line-height: 120%;
    padding-top:3rem;
    padding-bottom:2rem;
  }

  @media screen and (min-width: 950px) and (max-width: 1000px){
    .techSubText{
    width:58%;  

  }
}

@media ${(props) => props.theme.breakpoints.xs}{
  font-size: 17px;
  line-height: 120%;
  -webkit-font-smoothing: antialiased;
  margin-left:-1rem;
  padding-top:1rem;
  //width:31rem;
}

@media ${(props) => props.theme.breakpoints.xxs} {
    margin-left:-1.4rem;
    font-size:19px;
    width:100%;
}
  
`





