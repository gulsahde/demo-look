//import "@fontsource/questrial";
export default {
  // Temp fonts
  fonts: {
    title: "Arial",
    main: "Arial", //"Neue Haas Grotesk Text Pro"
  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "rgb(202, 49, 49)",//"#D21E1E",//"#FF0000", //"#499C4B",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
    
  },
  //Breakpoints for responsive design
  breakpoints: {
    xxs: 'screen and (max-width: 320px)', //galaxy fold
    xs: 'screen and (min-width: 321px) and (max-width: 480px)', 
    sm: 'screen and (min-width: 481px) and (max-width: 576px)', //surface duo, galaxy fold (yan ardından defter formunda)
    md: 'screen and (min-width: 577px) and (max-width: 769px)', //galaxy fold (yan veya defter formunda)
    lg: 'screen and (min-width: 769px) and (max-width: 992px)', //iphone xr (yan), galaxy s20 ultra (yan), ipad air, surface pro 7 
    xl: 'screen and (min-width: 993px) and (max-width: 1200px)', //nest hub, ipad pro, ipad air (yan)
    xxl: 'screen and (min-width: 1201px) and (max-width: 1400px)' //nest hub max, ipad pro (yan), surface pro 7 (yan)
  },
 
}

/*
md - medium boyutunda cihazlar:
ipad
ipad mini
galaxy x5 - yan
samsung galaxy s8+ - yan
surface duo - yan
galaxy fold - yan
pixel 2 - yan
pixel 2xl - yan
iphone 678 - yan
iphone 678 plus - yan
iphone se - yan
*/


/*nest hub max ve ipad pro (yan) HeroStyle'da ayrı ayrı kodlandı.
ipad pro (yan) için "@media only screen and (min-width : 1365px) and (max-width : 1367px) and (orientation : landscape)" kullanıldı.
Çünkü nest hub'lar diğerlerinden farklı olarak telefonların yan ayarlarıyla çelişiyor, yan'lar için olan kodları da kabul ediyor
*/ 