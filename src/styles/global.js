import { createGlobalStyle} from 'styled-components';
import background from '../assests/images/backgrond.svg'; //*importação do background 
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap'); /** fonte importada do google fonts ("ROBOTO") */
*{
  margin: 0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}
body{
  background: #191920 url(${background}) no-repeat center top ;  /**  a utilização do parantese e para usar a variavel dentro do template literals  */ 
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font: 14px Roboto, sans-serif;
}
#root {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}
button{
  cursor:pointer;
}
`