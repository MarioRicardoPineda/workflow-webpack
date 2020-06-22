/* 
  NOTAS IMPORTANTES!

  Es importante recordar que todo lo que hace webpack con los estilos es inyectarlos a traves de javascript, por lo tanto las importaciones de los estilos css/scss etc, deben de ser importados por un archivo principal de js, como en este caso el index.js 

*/
import normalize from 'normalize.css'
import sass from "./static/scss/main.scss";
import { registerHelper } from "handlebars";

import { suma } from "./static/js/suma";

const res = document.getElementById('result')
res.innerText = suma(10, 10)