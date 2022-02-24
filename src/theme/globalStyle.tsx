import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    //COLORS
    --White: #FFFFFF;
    --Black: #000000;
    --Silver-200: #F2F2F5;
    --Silver-100: #FAFAFC;

    //COLORS_PINK
    --Pink-300: #F9A186;
    --Pink-200: #FBB19B;
    --Pink-100: #FDE3DB;

    //COLORS_GREEN
    --Green-600: #5B944D;
    --Green-500: #BADEB3;
    --Green-400: #41653A;
    --Green-300: #A6CD9C;
    --Green-200: #E4F1DA;
    --Green-100: #8FB486;


    //COLORS_GRAY
    --Gray-700: #737373;
    --Gray-600: #595F64;
    --Gray-500: #3E4357;
    --Gray-400: #B2B2B2;
    --Gray-300: #80879B;
    --Gray-200: #C2CBBB;
    --Gray-100: #BEC3CE;

    //FONTS_SIZE
    --font-56: 56px;
    --font-48: 48px;
    --font-24: 24px;
    --font-22: 22px;
    --font-18: 18px;
    --font-16: 16px;
    --font-14: 14px;

    //BREAKPOINT
    --mobile-small: (max-width: 300px);
    --mobile-medium: (max-width: 400px);
    --mobile-large: (max-width: 500px) ;

    //Radius
    --Radius-12: 12px;
    --Radius-10: 10px;
    --Radius-15: 15px;
    --Radius-20: 20px;
    --Radius-56: 56px;
    --Radius-115: 115px;

    //SHADOW
    --Shadow-light-bottom:  0 3px 6px #e0e0e0;
    --Shadow-medium-top: 0px -8px 16px #00000014;
    --Shadow-btn: 0px 5px 20px 0px #F9A186;
    --Shadow-item:  0px 7px 30px 10px rgba(249, 161, 134, 0.2);
    --Shadow-card:  0px 0px 83px -23px rgba(0, 0, 0, 0.25);

  }
  body {
  margin: 0;
  padding: 0;
  font-family: 'Kanit', sans-serif;
  font-weight: 400;
  }
`;

export default GlobalStyle;