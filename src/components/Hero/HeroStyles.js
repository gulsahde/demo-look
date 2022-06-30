import styled from 'styled-components';

export const HContainerBlocks = styled.section`

      .section_background {
        display: flex;
        min-width: 750px
        width: 100%;
        min-height: 12rem;
        margin-top: -2rem;
        //border-top: 1px solid #000;
        transition:0.5s;
      }
      .section_background .left{

        width: 65%; //sol kolonun genişliği
        min-width: 750px
        display: block;
        padding:3rem;        
      }
      
    }

    @media ${(props) => props.theme.breakpoints.xs} {
      margin-left:-80rem;
      padding-top:20rem;
    }
    @media ${(props) => props.theme.breakpoints.xxs} {
      margin-left:-30rem;
      padding-top:20rem;
    }

 
    .right{
      width:85%;
      padding-left: 75rem;
      padding-bottom:10rem;
      margin-top:-23.5rem;
      display: block;

      @media ${props => props.theme.breakpoints.lg}{
        margin-top: 2px; //açıklama yazısının iletişim menüsüne uzaklığı
        //margin-bottom: 64px;
        padding: 16px 24px;
        width: fit-content;
        font-size: 20px;
        //margin-bottom:-20rem;
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
        margin-bottom:-7rem;
        padding-top:10rem;
        width:95%;
      }
      @media ${props => props.theme.breakpoints.xxs}{
        margin-bottom:-7rem;
        padding-top:10rem;
        width:95%;
      }

    .aboutmepopup{
      .arrow-link {
            display: flex;
            color: #0A0107;
            background-color: transparent;
            text-transform: uppercase;
            transition: all .2s ease;
            font-weight: 500;
            //cursor: default;
            align-items: center;
            letter-spacing: 1px;
            font-size: 28px;
            padding-bottom: 3.6rem; 
            margin-bottom:-5rem;
            padding-top: 3.6rem;
            transition: all 0.3s ease-out;
            border-left: 1px solid #0A0107;
            padding-left:2rem;
          
            @media ${(props) => props.theme.breakpoints.md}{
              font-size: 30px;
              margin-left:-5rem;
              border-left: none;
              padding-bottom:7.5rem;
        
            }
            @media ${(props) => props.theme.breakpoints.sm} {
              font-size: 24px;
              border-left: none;
              margin-left:-5rem;
              padding-bottom:12rem;
            }
          
            @media ${(props) => props.theme.breakpoints.lg} {
              width: 100%;
              font-size: 30px;
              line-height: 120%;
              border-left: none;
              margin-left:-6rem;
            }
            @media ${(props) => props.theme.breakpoints.xl} {
              font-size: 33px;
              line-height: 120%;
              border-left: none;
              margin-left:-79rem;
              margin-bottom:-6rem;
            }
            @media ${(props) => props.theme.breakpoints.xxl} {
              font-size: 35px;
              line-height: 120%;
              margin-left:-10rem;
              margin-bottom:-6rem;
            }
        
            @media ${(props) => props.theme.breakpoints.xxs} {
              font-size: 19px;
              line-height: 1.3;
              border-left: none;
              margin-left:-50.5rem;
              padding-top:3rem;
            }
        
            @media ${props => props.theme.breakpoints.xs}{
              font-size: 18px;
              line-height: 1.3;
              border-left: none;
              //margin-bottom:-2rem;
            }         
        
          }
          
          
          .arrow-link > .arrow {
            width: 20px; //8
            height: 20px; //8
            border-right: 2px solid #0A0107;
            border-bottom: 2px solid #0A0107;
            position: relative;
            transform: rotate(-45deg);
            margin-left: 3px;
            transition: all .3s ease;
            @media ${(props) => props.theme.breakpoints.xs} {
              margin-left: 6px;
              width: 18px; 
              height: 18px;
            }

          }
          
          .arrow-link > .arrow::before {
              display: block;
              background-color: #0A0107;
              width: 3px;
              transform-origin: bottom right;
              height: 2px; //okun sap kısmının kalınlığı
              position: absolute;
              opacity: 0;
              bottom: calc(-2px / 2);
              transform: rotate(45deg);
              transition: all .3s ease;
              content: "";
              right: 0;
          }
          
          .arrow-link:hover > .arrow {
              transform: rotate(-45deg) translate(4px, 4px);
              border-color: #0A0107; //#817F7F
          }
          
          .arrow-link:hover > .arrow::before {
            opacity: 1;
            width: 25px; //okun sap kısmının uzunluğu
          
          
              @media ${(props) => props.theme.breakpoints.xs} {
                width: 30px;
              }
          }
          
          .arrow-link:hover {
        	color: #0A0107;
          }


      
        .overlay {
          z-index: 5;
          position: absolute;
          top: 0rem;//39.3rem;
          bottom: 0;
          left: 0rem;//4rem;
          right: 0rem;//4rem;
          visibility: hidden;
          opacity: 0;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          transition: all 1s ease-in-out;
          height:100%;

          @media ${(props) => props.theme.breakpoints.xxl} {
            //overflow: scroll;
            height:100%;
          }
         
          @media only screen and (min-width: 770px) and (max-width: 992px)
            and (orientation : landscape){
              //height:60rem;
              overflow: hidden;
            }


          // .cancel {
          //   position: absolute;
          //   width: 100%;
          //   height: 100%;
          //   //cursor: default;
          // }
          &:target {
            visibility: visible;
            opacity: 1;
          }


          // @media ${(props) => props.theme.breakpoints.xs} {
          //   //width:40rem;
          //   //margin-left:1rem;
          //   //overflow: scroll;
          //   //height:100%;
          // }
          @media ${(props) => props.theme.breakpoints.xxs} {
            //margin-left:-2.5rem;
            height:100%;
          }
          @media ${(props) => props.theme.breakpoints.sm} {
            //width:90%;
            margin-left:0rem;
            //overflow: scroll;
            height:100%;
          }
          
          @media ${(props) => props.theme.breakpoints.lg} {
            //width:100%;
            margin-left:3rem;
            //margin-right:-1rem;
            overflow: hidden;
            height:200rem;
            margin-top:-5rem;
          }
          @media ${(props) => props.theme.breakpoints.xl} {
            width:92%;
            margin-left:3rem;
            height:100%;
            margin-top:-4rem;
          }
          // @media only screen and (min-width : 1023px) and (max-width : 1025px) and (orientation : landscape){
          //     width:92%;
          //     margin-left:10rem;
          //     height:100%;
          // }
          @media only screen and (min-width : 993px) and (max-width : 1200px) 
            and (orientation : landscape){
              width:92%;
              margin-left:3rem;
              height:100%;
              margin-top:-5rem;
          }
          @media ${(props) => props.theme.breakpoints.md} {
            overflow: hidden;
            height:100%;
          }
        }

        .popup { //mainpopup
          z-index: 5;
          position: absolute;
          margin-top:22rem;
          left: 4rem;
          right: 4rem;
          background: #EBE9E8;
          transition: all 1s ease-in-out;
          height:70%; 
          border-radius: 10px;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          @media ${(props) => props.theme.breakpoints.xxl} {
            height:74%;
          }
          
          @media ${(props) => props.theme.breakpoints.xl} {
            height:111rem;
          }
          // @media only screen and (min-width : 993px) and (max-width : 1200px) and (orientation : landscape){ //xl
          //     height:120rem;
          //   }
          @media ${(props) => props.theme.breakpoints.lg} {
            height:58%;
            margin-left:-2rem;
          }
          @media only screen and (min-width: 915px) and (max-width: 967px){
              height:56%;
          }
          @media only screen and (min-width: 967px) and (max-width: 992px){
            height:54%;
        }
          @media ${(props) => props.theme.breakpoints.md} {
            height:68%;
          }
          @media only screen and (min-width : 650px) and (max-width : 679px){
            height:65%;
          }
          @media only screen and (min-width : 680px) and (max-width : 768px){
            height:60%;
          }
          @media ${(props) => props.theme.breakpoints.xxs} {
            width:85%;
            height:100%;
            margin-left:-2rem;
            margin-top:0rem;
            overflow:scroll;
          }
          @media ${(props) => props.theme.breakpoints.xs} { 
            margin-top:11rem;
            --wsize:85%;
            width:85%;
            height:calc(var(--wsize) * 2rem);
            margin-left:-1rem;
          }
         

          @media ${(props) => props.theme.breakpoints.sm} {
            margin-top:13rem;
            height:84%;
            //height:130rem;
            // margin-left:-1rem;
          }
          @media only screen and (min-width : 499px) and (max-width : 576px){ 
            height:80%;
          }

          .close {
            padding: 0.62em 0.75em 0.65em;
            border-radius: 10px;
            background-color: #EBE9E8;
            color: #0A0107;
            pointer-events: auto;
            z-index: 10;
            font-size:22px;
            font-weight: 300px;
            transition: all 200ms;
            position: absolute;
            top: -60px;
            right: 5px;
            &:hover{
              color:rgb(202, 49, 49); 
              transform:scale(1.1);
              transition: 0.25s;
            }
            
            @media ${(props) => props.theme.breakpoints.xs} {
              top:-45px;
              // right:-5px;
              font-size:17px;
            }
            @media ${(props) => props.theme.breakpoints.xxs} {
              font-size:19px;
              top:5px;
              right:13px;
              padding: 0 0 0;
              background-color: inherit;
            }
          }  
        }

        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width:100%;
          
          p, b{
              margin-top:-15rem;          
              max-width: 100%;
              font-size: 28px;
              line-height: 1.3; //32px;
              color:#1f1f1f; //#0A0107;
              letter-spacing: -.0525rem;
              hyphens: auto;
              margin-top:-9rem;

              //background color--------------
              &::selection{
                //background-color:#0A0107; 
                color:rgb(202, 49, 49); 
              }
              br, ul, li{
                &::selection{
                  //background-color:#0A0107; 
                  color:rgb(202, 49, 49); 
                }
              }
              a{
                &::selection{
                  color:#1f1f1f; 
                }
                &:hover{
                  color:#1f1f1f;
                }
              }
              //background color--------------

              font{
                &:hover {
                  font-style: italic;
                }

                &::selection{
                  color:#1f1f1f; 
                }
                &:hover{
                  color:#1f1f1f;
                }
              }


              @media ${(props) => props.theme.breakpoints.xs} {
                font-size:17px;
                margin-top:-12rem;
                width:50rem;
              }
              @media ${(props) => props.theme.breakpoints.xxs} {
                font-size:19px;
                margin-top:-13rem;
                width:50rem;
              }
              
              @media ${(props) => props.theme.breakpoints.sm} {
                font-size:19px;
                margin-top:-12rem;
                width:50rem;
              }
              @media ${(props) => props.theme.breakpoints.md} {
                font-size:20px;
                margin-top:-12rem;
                //width:100rem;
              }
              @media ${(props) => props.theme.breakpoints.lg} {
                font-size:22px;
                margin-top:-12rem;
                //width:100rem;
              }
              @media ${(props) => props.theme.breakpoints.xl} {
                font-size:25px;
                margin-top:-12rem;
                //width:100rem;
              }
             
             
            } 

            .c1{
              width:45%;
              margin-top:13rem;
              margin-left:4rem;

              @media ${(props) => props.theme.breakpoints.xs} {
                //width:88.5%;
                width:73vw;
                margin-left:2rem;
              }
            
              @media ${(props) => props.theme.breakpoints.xxs} {
                //width:90%;
                width:73vw;
                margin-left:1rem;
              }
              @media ${(props) => props.theme.breakpoints.sm} {
                width:71vw;
              }
              @media ${(props) => props.theme.breakpoints.md} {
                width:75vw; 
              }
              @media only screen and (min-width : 670px) and (max-width : 769px){
                width:78vw;
              }
             
              @media ${(props) => props.theme.breakpoints.lg} {
                width:82vw;
                margin-left:3rem;
              }
              @media only screen and (min-width : 900px) and (max-width : 992px){
                width:84vw;
              }
              @media ${(props) => props.theme.breakpoints.xl} {
                width:77vw;
              }
              @media ${(props) => props.theme.breakpoints.xxl} {
                width:45%;
              }
              @media only screen and (min-width : 1366px) and (max-width : 1400px){
                width:46%;
              }

            }

            .c2{
              width:45%;
              margin-left:77rem;
              margin-top:-46rem;

              @media ${(props) => props.theme.breakpoints.xxs} {
                //width:90%;
                width:73vw;
                margin-left:1rem;
                margin-top: 12.8rem;
              }
              @media ${(props) => props.theme.breakpoints.xs} {
                margin-top: 12.2rem;
                width:73vw;
                margin-left:2rem;
              }
             
              @media ${(props) => props.theme.breakpoints.sm} {
                margin-left: 4rem;
                margin-top: 12.5rem;
                //width:85%;
                width:71vw;
              }
              @media ${(props) => props.theme.breakpoints.md} {
                margin-left: 4rem;
                margin-top: 12.5rem;
                width:75vw; //88%;
              }
              @media only screen and (min-width : 670px) and (max-width : 769px){
                width:78vw;
              }
              @media ${(props) => props.theme.breakpoints.lg} {
                margin-left: 3rem;
                margin-top: 12.2rem;
                width:82vw;
                //width:92.3%;
              }
              @media only screen and (min-width : 900px) and (max-width : 992px){
                width:84vw;
              }
              @media ${(props) => props.theme.breakpoints.xl} {
                margin-left: 4rem;
                margin-top: 12.2rem;
                //width:80rem;
                width:77vw;
              }
              @media ${(props) => props.theme.breakpoints.xxl} {
                margin-left: 61rem;
                margin-top: -60rem;
                width:45%;
              }
              @media only screen and (min-width : 1256px) and (max-width : 1366px){
                margin-top:-57rem;
                //margin-left:6rem;
              }
              @media only screen and (min-width : 1366px) and (max-width : 1400px){
                margin-top:-49.5rem;
                padding-left:12rem;
                width:50%;
              }
            }   
        }


        .secondcontent {

          @media ${(props) => props.theme.breakpoints.xs} {
            width:100%;
            margin-left:-1rem;
          }
          @media ${(props) => props.theme.breakpoints.sm} {
            width:100%;
            margin-left:-1rem;
          }
          @media ${(props) => props.theme.breakpoints.md} {
            width:110%;
            margin-left:-1rem;
            margin-top:2rem;
          }

          @media ${(props) => props.theme.breakpoints.lg} {
            width:110%;
            margin-left:0.5rem;
            margin-top:-1rem;
          }
          @media ${(props) => props.theme.breakpoints.xxl} {
            margin-top: 2rem;
          }

          .skillspart{
            width:100%; //50%
            padding-top:6rem;
            margin-left:2rem;
            scroll-behavior: smooth;

            @media ${(props) => props.theme.breakpoints.xs}{ //butonların bir kısmı kesilmiş gibi çıkmamasını sağlıyor
              width:105%;
              margin-top:-7rem;
              margin-left:8px;
            }
            // @media screen and (min-width: 393px) and (max-width: 420px){
            //   padding-top:8rem;
            //   width:32rem;
            // }
            // @media only screen and (min-width : 320px) and (max-width : 356px){ 
            //   width: 33rem;
            // }
            @media ${(props) => props.theme.breakpoints.xxs}{ //butonların bir kısmı kesilmiş gibi çıkmamasını sağlıyor
              width:120%;
              margin-top:-5rem;
              margin-left:0rem;
            }
            @media ${(props) => props.theme.breakpoints.sm}{
              width:95%;
              margin-top:-6rem;
              padding-left:15px;
            }
            
            @media ${(props) => props.theme.breakpoints.md}{
              //width:70rem;
              width: 90%;
              margin-top:-6rem;
              margin-left:3.5rem;
            }
            @media only screen and (min-width : 650px) and (max-width : 768px){
              width:85%;
            }
            
            @media ${(props) => props.theme.breakpoints.lg}{
              width:88%;
              margin-top:-4rem;
              margin-left:3px;
            }
            
            @media ${(props) => props.theme.breakpoints.xl}{
             
              margin-top:-5rem;
            }
            @media only screen and (min-width : 1365px) and (max-width : 1367px) and (orientation : landscape){ //ipad pro (yan)
              margin-top:-1rem;
              width:40rem;  
            }
            @media only screen and (min-width : 993px) and (max-width : 1200px) and (orientation : landscape){
              width:85rem;
            }
            @media ${(props) => props.theme.breakpoints.xxl}{
              font-size:25px;
              //margin-top:-3rem;
              width:100%;
            }
            // @media only screen and (min-width : 1203px) and (max-width : 1255px){
            //   margin-top:4rem;
            // }
            @media only screen and (min-width : 1366px) and (max-width : 1400px){
              margin-top:-6rem;
            }
            
            a, span{
              padding-top:2rem;          
              max-width: 100%;
              font-size: 22px;
              font-weight:500;
              letter-spacing: -.0525rem;
              hyphens: auto;
              padding-left:2rem;
              -webkit-font-smoothing: antialiased;
              -moz-font-smoothing: antialiased;
              -o-font-smoothing: antialiased;
              line-height: 1.3; 

              &::selection{
                color:rgb(202, 49, 49); 
              }

              @media ${(props) => props.theme.breakpoints.xs}{
                font-size: 17px;
              }
              @media ${(props) => props.theme.breakpoints.xxs}{
                font-size: 19px;
                //padding-top:1rem;
              }
              @media ${(props) => props.theme.breakpoints.sm}{
                font-size: 19px;
              }
              @media ${(props) => props.theme.breakpoints.md}{
                font-size: 20px;
              }
              @media ${(props) => props.theme.breakpoints.lg}{
                font-size: 22px;
              }
              @media ${(props) => props.theme.breakpoints.xl}{
                font-size: 25px;
              }
              @media ${(props) => props.theme.breakpoints.xxl}{
                font-size: 25px;
              }

            }

            span{
              text-transform: uppercase;
              &:hover{
                color:rgb(202, 49, 49);
                animation: blinker 0.1s infinite;
              }
              @keyframes blinker {
                from { opacity: 1.0; }
                50% { opacity: 0.5; }
                to { opacity: 1.0; }
              }
            }

            .popup-background-size {
                padding: 13.5px; //arkadaki transparan gri planın büyüklüğü
            }
            .flexible{
              display: flex;
              flex-wrap: wrap;
            }
          
            *, :after, :before {
                box-sizing: border-box;
                border: 0 solid;
            }
            
            .cursor-grab {
                cursor: -webkit-grab;
                cursor: grab;
            }
                    
            ::-webkit-scrollbar {
                display: none;
            }
          .header {
              display: block;
          }
          
          // *, :after, :before {
          //     border-color: rgba(229,231,235);
          // }
        
          overflow: hidden;
          height: auto;

          .general-features{
            position: relative;
            left: 0;
            width: 100%;
          }

          .popup-background { //arkadaki transparan tablonun rengi
              background-color: inherit;//rgba(244,244,244);
          }
         
        
          .gap-y {
            padding-top: 2px; //kutulardaki yazıların üste olan uzaklığı******
            padding-bottom: 20px;

            @media ${(props) => props.theme.breakpoints.xs}{
              padding-bottom: 10px;
              padding-top: 1px;
            }
            @media ${(props) => props.theme.breakpoints.xxs}{
              padding-bottom: 10px;
              padding-top: 1px;
            }
          }
          .gap-x {
            padding-left: 1px; //kutulardaki yazıların sola olan uzaklığı******
            padding-right: 16px;

            @media ${(props) => props.theme.breakpoints.xs}{
              margin-left: 0px;
              padding-right: 15px;
            }
          
          }
          .cloud-style {
            //border-radius: 9999px;
            //border: 2px solid  #1f1f1f; //bulutların etrafındaki siyah ince çerçeve  
            
              display: inline-block;
              height: fit-content;
              border:  1px solid #1f1f1f;
              padding: 0.23em-0.75em-0.17em;
              margin-right: 0.25em;
              font-size: 0.8em;
              text-transform: uppercase;
              text-decoration:  none;
              transition: 0.25s;
              cursor: pointer;
              &:hover{
                border-radius: 4em;
                transition: 0.25s;
              }
          }
         
          [type=button], .button {
            -webkit-appearance: button;
          }

          .cloud { //tüm bulutların aralarındaki uzaklık / biraz üst üste gelmelerini sağlayan yer
            line-height: .1em; //.8em
            color: #1f1f1f;
            text-transform: capitalize;
            @media ${(props) => props.theme.breakpoints.xxs} {
              line-height: .1em;
            }
          }
          .block {
            display: block;
          }

      } //skillspart'ın kapanma parantezi



          .toolspart{
            margin-left:73rem;
            margin-top:-33rem;

            @media ${(props) => props.theme.breakpoints.xs} {
              margin-top:1rem;
              margin-left:-1rem;
              padding-bottom:3rem;
            }
            @media ${(props) => props.theme.breakpoints.xxs}{ //butonların bir kısmı kesilmiş gibi çıkmamasını sağlıyor
              width:260px;
              padding-top:33rem;
              margin-left:-4rem;
            }
            @media ${(props) => props.theme.breakpoints.sm} {
              margin-top:1rem;
              margin-left:-1rem;
              //padding-bottom:3rem;
            }
            @media ${(props) => props.theme.breakpoints.md} {
              margin-top:-51rem;
              margin-left:33rem;
              padding-bottom:3rem;
              width:35rem;
            }
            @media only screen and (min-width : 577px) and (max-width : 769px) 
            and (orientation : landscape){
              margin-top:3rem;
              margin-left:0rem;
              padding-bottom:3rem;
              width:50rem;
            }
            @media ${(props) => props.theme.breakpoints.lg} {
              margin-top:-51.5rem;
              margin-left:38rem;
              padding-bottom:3rem;
              width:35rem;
            }
            
            @media ${(props) => props.theme.breakpoints.xl} {
              margin-top:-53.5rem;
              margin-left:48rem;
              padding-bottom:3rem;
              width:35rem;
            }
            
            @media ${(props) => props.theme.breakpoints.xxl} {
              margin-top:-46.5rem;
              margin-left:58rem;
              padding-bottom:3rem;
              width:50rem;
            }
            @media only screen and (min-width : 1365px) and (max-width : 1367px) and (orientation : landscape){
                width: 45rem;
                margin-top:-53rem;
                margin-left:58rem;
                padding-bottom:3rem;
            }
            @media only screen and (min-width : 1367px) and (max-width : 1369px) and (orientation : landscape){
              //width: 45rem;
              margin-top:-54rem;
              margin-left:58rem;
              padding-bottom:3rem;
            }

            @media only screen and (min-width : 993px) and (max-width : 1200px) 
              and (orientation : landscape){
                width:85rem;
                margin-top:5rem;
                margin-left:0rem;
                padding-bottom:3rem;
            }

            @media only screen and (min-width: 770px) and (max-width: 992px)
            and (orientation : landscape){
              width:65rem;
              margin-top:5rem;
              margin-left:0rem;
              padding-bottom:3rem;
            }

            a, span{
              padding-top:2rem;          
              max-width: 100%;
              font-size: 22px;
              line-height: 1.3; //32px;
              color: #1f1f1f//#0A0107;
              letter-spacing: -.0525rem;
              hyphens: auto;
              padding-left:2rem;
              -webkit-font-smoothing: antialiased;
              -moz-font-smoothing: antialiased;
              -o-font-smoothing: antialiased;

              &::selection{
                //background-color:#0A0107; 
                color:rgb(202, 49, 49); 
              }

              @media ${(props) => props.theme.breakpoints.xs}{
                font-size: 17px;
              }
              @media ${(props) => props.theme.breakpoints.xxs}{
                font-size: 19px;
                margin-top:-2px;  
              }
              @media ${(props) => props.theme.breakpoints.sm}{
                font-size: 19px;
              }
              @media ${(props) => props.theme.breakpoints.md}{
                font-size: 20px;
              }
              @media ${(props) => props.theme.breakpoints.lg}{
                font-size: 22px;
              }
              @media ${(props) => props.theme.breakpoints.xl}{
                font-size: 25px;
              }
              @media ${(props) => props.theme.breakpoints.xxl}{
                font-size: 25px;
              }
            }

            span{
              text-transform: uppercase;
              &:hover{
                color:rgb(202, 49, 49);
                animation: blinker 0.1s infinite;
              }
              @keyframes blinker {
                from { opacity: 1.0; }
                50% { opacity: 0.5; }
                to { opacity: 1.0; }
              }
            }

            .popup-background-size {
                padding: 13.5px; //arkadaki transparan gri planın büyüklüğü
            }
            
            .flexible{
              display: flex;
              flex-wrap: wrap;
            }
          
            *, :after, :before {
                box-sizing: border-box;
                border: 0 solid;
            }
            
            .cursor-grab {
                cursor: -webkit-grab;
                cursor: grab;
            }
                    
            ::-webkit-scrollbar {
                display: none;
            }
          .header {
              display: block;
          }
          
          // *, :after, :before {
          //     border-color: rgba(229,231,235);
          // }
        
          overflow: hidden;
          height: auto;

          .general-features{
            position: relative;
            left: 0;
            width: 100%;
          }
          .popup-background { //arkadaki transparan tablonun rengi
              background-color: inherit;//rgba(244,244,244);
          }
          .gap-y {
            padding-top: 2px; //kutulardaki yazıların üste olan uzaklığı******
            padding-bottom: 20px;
            @media ${(props) => props.theme.breakpoints.xs}{
              padding-bottom: 10px;
              padding-top: 1px;
            }
            @media ${(props) => props.theme.breakpoints.xxs}{
              padding-bottom: 10px;
              padding-top: 1px;
            }
          }
          .gap-x {
            padding-left: 1px; //kutulardaki yazıların sola olan uzaklığı******
            padding-right: 16px;
            @media ${(props) => props.theme.breakpoints.xs}{
              margin-left: -5px;
              padding-right: 15px;
            }
            @media ${(props) => props.theme.breakpoints.md}{
              margin-left: -5px;
              padding-right: 15px;
            }
          }
          .cloud-style {
            border-radius: 9999px;
            border: 2px solid #1f1f1f;
            //box-shadow: 0 0 15px 0 rgb(0 0 0 / 25%);
          }
          
          [type=button], .button {
            -webkit-appearance: button;
          }
          .cloud {
            line-height: .8em;
            color: #1f1f1f;
          }
         
          .block {
            display: block;
          }


          } //toolspart'ın kapanma parantezi
      }

     

        

  /* ➤ ➤ ➤ ➤ ➤ NEWS BAR ➤ ➤ ➤ ➤ ➤ ➤ ➤ ➤ ➤ ➤ */
  
    section{
      overflow :hidden;
      //display:inline-block;
      //height: 50px;
      white-space: nowrap;     
      border-bottom: 1px solid rgb(202, 49, 49);//#1f1f1f;
    }

    section#nav-container {
      padding: 6rem !important; //10rem
      position: sticky;//fixed;
      width: 99%;//101.5%; //haber yazısı bölümünün uzunluğu
      padding-left:1rem;
      @media ${(props) => props.theme.breakpoints.md} {
        padding-bottom: 10rem !important;
      }
      @media ${(props) => props.theme.breakpoints.xxl} {
        padding-bottom: 10rem !important; //10rem
      }
      @media ${(props) => props.theme.breakpoints.xs} {
        width: 98%;
      }
      @media ${(props) => props.theme.breakpoints.xxl} {
        padding-bottom: 10rem !important; //10rem
      }
      @media ${(props) => props.theme.breakpoints.xxs} {
        padding-bottom: 3rem !important; //10rem
      }
    }
    
    section {
        display: flex;
        padding-bottom: 5px;
    }

    #news-label {
      position: relative;
      display: block;
      margin-block-start: 0em;
      margin-block-end:1em;
      margin-inline-start: -100px;
      margin-inline-end: 15rem;
      margin-top: -4rem;
      padding-left:3rem;
      font-weight: 300;
      line-height: 1.8em;
      font-weight: 500;
      font-style: normal;
      letter-spacing: 0em;
      text-transform: none;
      line-height: 1.3;
      font-size:74px;  
      margin-left:-6rem;
      color: rgb(202, 49, 49);//#1f1f1f;
      scroll-behavior: smooth;

      //seçim yapılamaz--------------
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; 
      //seçim yapılamaz--------------


      @media ${(props) => props.theme.breakpoints.xs} {
        font-size:9.5vw;//32px;
        margin-left:-8rem;
      }
    
      @media ${(props) => props.theme.breakpoints.xxs} {
        font-size:50px;
        margin-left:-8rem;
        padding-top:1rem;
        white-space: pre-line;
      }
      @media ${(props) => props.theme.breakpoints.sm} {
        //font-size:48px;
        font-size:9.5vw;
        margin-left:-8rem;
      }
      @media ${(props) => props.theme.breakpoints.md} {
        //padding-top:2rem;
        font-size:9.5vw;
      }
      @media ${(props) => props.theme.breakpoints.lg} {// ipad air, surface pro 7 
        font-size:10vw;
        padding-top:2rem;
      }
      @media ${(props) => props.theme.breakpoints.xl} {
        font-size:60px;
      }
      @media ${(props) => props.theme.breakpoints.xxl} {
        padding-top:2rem;
      }
    }  



    #news-container {
      display: flex;
      //overflow: hidden;
      align-items: center;
      white-space: nowrap;
      flex-shrink: 0;
      margin-top:-195px;

      @media ${(props) => props.theme.breakpoints.xs} {
        margin-top:5px;
      }
      @media ${(props) => props.theme.breakpoints.xxs} {
        margin-top:10px;
      }
      @media ${(props) => props.theme.breakpoints.sm} {
        margin-top:-20px;
      }
      @media ${(props) => props.theme.breakpoints.md} {
        margin-top:-4rem;
        margin-bottom:-2rem;
      }
      
      @media ${(props) => props.theme.breakpoints.lg} {
        margin-top:-55px;
      }
      @media ${(props) => props.theme.breakpoints.xxl} {
        padding-top:1rem;
      }
      
    }   

    .news p {
      padding: 2rem;
      display: inline-block;
      width: 110vw;
      text-align: right;
      margin-top:16rem;
      color: rgb(202, 49, 49); // #1f1f1f;//#0A0107;
      font-size:22px;
      @media ${(props) => props.theme.breakpoints.xs} {
        font-size:17px;
        margin-top: 4rem;
        //margin-bottom: -6rem;
        width: 170vw;
      }
      @media ${(props) => props.theme.breakpoints.xxs} {
        font-size:19px;
        margin-top: -3rem;
        margin-bottom: -1rem;
      }
      @media ${(props) => props.theme.breakpoints.sm} {
        font-size:19px;
        margin-top: 2rem;
        margin-bottom: -1rem;
      }
      @media ${(props) => props.theme.breakpoints.md} {
        font-size:20px;
        margin-top: 4rem;
        margin-bottom: -1rem;
      }
      @media ${(props) => props.theme.breakpoints.lg} {
        font-size:22px;
        margin-top: 1rem;
        margin-bottom: -1rem;
      }
      @media ${(props) => props.theme.breakpoints.xl} {
        font-size:25px;
        margin-top: 22rem;
      }
      @media ${(props) => props.theme.breakpoints.xxl} {
        font-size:25px;
        //margin-top: 22rem;
      }
      

      //seçim yapılamaz--------------
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; 
      //seçim yapılamaz--------------

    }

    p{
        display: block;
        margin-block-start: 0em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        z-index: 2;
        background-color:#EBE9E8;
        color:#1f1f1f;
    }


    .news {
      position: absolute;
      width: 480vw; //450vw
      left: 50%;
      -webkit-animation: scroll 40s infinite linear;
      -moz-animation: scroll 40s infinite linear;
      -o-animation: scroll 40s infinite linear;
      animation: scroll 40s infinite linear;
    }

    .news:hover {
      -webkit-animation-play-state:paused;
      -moz-animation-play-state:paused;
      -o-animation-play-state:paused;
      animation-play-state:paused;
    }

    @keyframes scroll {
      0% {transform: translateX(0%);}
      100% {transform: translateX(-100%);}
    }

    @-webkit-keyframes scroll {
      0% {-webkit-transform: translateX(0%);}
      100% {-webkit-transform: translateX(-100%);}
    }

    @-moz-keyframes scroll {
      0% {-webkit-transform: translateX(0%);}
      100% {-webkit-transform: translateX(-100%);}
    }

    @-o-keyframes scroll {
      0% {-webkit-transform: translateX(0%);}
      100% {-webkit-transform: translateX(-100%);}
    }


/* ➤ ➤ ➤ ➤ ➤ NEWS BAR ➤ ➤ ➤ ➤ ➤ ➤ ➤ ➤ ➤ ➤ */




`
