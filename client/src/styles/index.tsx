import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  	--body-font: 'Lexend';
    --itens-font:'Inter', sans-serif;
  	--brand1: #4529E6;
    --brand2: #5126EA;
    --brand3: #B0A6F0;
    --brand4: #EDEAFD;
    --grey0: #212529;
    --grey1: #495057;
    --grey2: #868E96;
    --grey3: #868E96;
    --grey4: #ADB5BD;
    --grey5: #CED4DA;
    --grey6: #DEE2E6;
    --grey7: #E9ECEF;
    --grey8: #F1F3F5;
    --grey9: #F8F9FA;
    --grey10: #FDFDFD;
    --whiteFixed: #FFFFFF;
    --alert1: #CD2B31;
    --alert2: #FDD8D8;
    --alert3: #FFE5E5;
    --sucess1: #18794E;
    --sucess2: #CCEBD7;
    --sucess3: #DDF3E4;
    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    --random5: #6200E3;
    --random6: #36007D;
    --random7: #349974;
    --random8: #2A7D5F;
    --random9: #153D2E;
    --random10: #6100FF;
    --random11: #5700E3;
    --random12: #30007D;
    --random13: #0B0D0D;
    --random14: #0B0D0D;

    --Heading-1-700: 700;
    --Heading-2-600: 600;
    --Heading-3-500: 500;
    --Heading-4-600: 600;
    --Heading-5-500: 500;
    --Heading-6-600: 600;
    --Heading-6-500: 500;
    --Heading-7-600: 600;
    --Heading-7-500: 500;
    --body-1-400: 400;
    --body-1-600: 600;
    --body-2-400: 400;
    --body-2-500: 500;
   
   button {
        cursor: pointer;
        font-family: var(--itens-font);
        font-weight: var(--body-1-600);
        font-size: 16;
        line-height: 1.5;
    }

    h3 {
        margin-top: 0px;
    }
    
  }

   body{
    font-family: 'Lexend' !important; 
	  background-color: #fff;
	  line-height: 30px;
	  padding: 0;
	  margin: 0;
	  overflow-x: hidden;
  }
   
   `;

export default GlobalStyle;
