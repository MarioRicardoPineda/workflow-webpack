## Workflow Webpack

### Sobre el proyecto.

Éste proyecto es un workflow (Flujo de trabajo), configurado con webpack, teniendo las herramientas necesarias para comenzar a trabajar un proyecto del front-end.


### contenido del proyecto.

* Consta de un archivo de configuración de webpack `webpack.config.js`
* Un `package.json` donde esta almacenadas todas las dependencias necesarias.
* Un `.gitignore` para excluir la carpeta de `node_modules`
* Un `.babelrc` para asignar la dependencia de los presets de babel, como por ejemplo `@babel-preset-env`
* Una carpeta `src` donde irá todo con lo cual se trabajará, como:
  * los archivos `.js` 
  * los `.css` o `.scss`
  * Los `.html` o los Engine Template como `.hbs` o `.pug`
  * Los static, imagenes, fuentes, etc.

### Iniciar el proyecto.

1. Descargue el proyecto, o haga un fork del mismo.
2. Instale las dependencias con `$ npm install`
3. Iniciar el servidor en modo de desarrollo con este comando `$ npm start` automaticamente generara un servidor. Luego vaya a la dirección que el mismo le provee.
4. Listo ya puede comenzar a editar ciertas caracteriasticas como la estructura de los archivos si así lo desea.

### Para generar la carpeta de distribución.

Ejecute este comando `npm run build` y listo eso generá su carpeta `dist` 

### Versiones de dependencias

```json

"devDependencies": {
    "@babel/core": "^7.10.3",
    "@babel/preset-env": "^7.10.3",
    "autoprefixer": "^9.8.1",
    "babel-loader": "^8.1.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.6.0",
    "file-loader": "^6.0.0",
    "handlebars": "^4.7.6",
    "handlebars-loader": "^1.7.1",
    "html-loader": "^1.1.0",
    "html-webpack-plugin": "^4.3.0",
    "image-webpack-loader": "^6.0.0",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.14.1",
    "postcss-loader": "^3.0.0",
    "resolve-url-loader": "^3.1.1",
    "sass-loader": "^8.0.2",
    "style-loader": "^1.2.1",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  }

```

**NOTA:** Si quieres saber más de los loader o plugins que estan en este proyecto, ve a su documentacion oficial, en NPM o GitHub, tan solo copiando el nombre de la dependencia, en su respectivos buscadores.