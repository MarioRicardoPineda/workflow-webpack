
const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // para poner el modo de desarrollo o produccion
  // mode: 'development',

  // El archivo, de entrada, el archivo que tendrá todo en desarrollo
  // Se pueden crear multiples puntos de entrada y de salida. de forma de objeto
  entry:  {
    main: './src/index.js'
  },

  // donde voy a compilar mis archivos, mis archivos generados
  output: {
    // filename: 'js/[name].[chunkhash].js',
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  // para minificar o no, pero solo hace caso a los js, no a html o css
  optimization: {
    minimize: true
  },

   // Le digo a webpack que use los sourcemaps para todo lo que se pueda
   devtool: 'source-map',

  // aquí va toda la configuracion de los cargadores
  module : {
    // Array de objetos, en este caso el loader de babel, sass etc.
    rules : [
      // Regla de babel
      {
        test: /\.(js)$/,
        // Es porque node_modules tiene files .js
        exclude: /node_modules/,
        // si se va a tener más loaders, haga un [] en vez de {}
        use: {
          loader: 'babel-loader',
          options: {
            presets : ['@babel/preset-env']
          }
        }
        
      },
      // regla para html
      {
        test: /\.html$/,
        use : 'html-loader?minimize=false'
      },
      // Para los template engine
      {
        test: /\.(hbs|handlebars)$/,
        use: 'handlebars-loader'
      },
      // Regla para css y sass
      {
        /* Es importante que se haga en este preciso orden, de caso contrario no funcionara */
        test: /\.(css|scss)$/,
        use: [
          // Para todos las etiquetas <style> dentro de html
          'style-loader',

          // Para poder extraer los css inyectados por webpack en los js
          MiniCssExtractPlugin.loader,

          // Coloco el loader de css
          {
            loader: 'css-loader',
            // siempre que se agrege sourcemaps en todos los lados se debe de agregar esa caracteristica 
            options: { 
              sourceMap: true
            }
          },

          // El loader de postcss
          {
            loader: 'postcss-loader',
            // Importante aquí van todas las configuaraciones permitidas de postcss
            options: {
              // configuracion de autoprefixer
              autoprefixer: {
                // soporte a navegadores
                browser : ['last 2 version', ]
              },
              //  le indico a postcss que tome los sourcemaps
              sourceMap: true,
              //  definir todos los plugin que usará postcss, en este caso solo uno Autoprefixer
              plugins: () => [autoprefixer]
            }
          },

          // Para resolver las urls de las hojas de estilo como bg-image: url(./img/image.png)
          "resolve-url-loader",

          // Loader de sass 
          'sass-loader'
        ]
      },
      /* Para los archivos .png, jpg, .txt, .svg, mp4, pdf, etc. */
      // Para imagenes 
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          // [name] & [ext] sirve para decirle que respete el nombre del archivo y su extencion
          'file-loader?name=assets/[name].[ext]',
          // Para reducir el peso de las imagenes solo en produccion 
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      // Para archivos varios como tipograficos y de audio y video
      {
        test: /\.(pdf|txt|eot|ttf|woff2?|xml|mp3|mp4)$/i,
        use: 'file-loader?name=assets/[name].[ext]'
      }
    ]
  },

  // Aquí van todos los plugins
  plugins : [
    // Para limpiar la carpeta dist
    new CleanWebpackPlugin(),
    // Para redireccionar las imagenes a la carpeta.
    new CopyWebpackPlugin({
      patterns: [
        {from:'./src/static/images',to:'assets/images'} 
      ] 
    }),
    // Ingreso primero el mini css extract porque primero extrae y luego se lo pasa a html, esto es importante
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }), 
    // Para compilar el html a la carpeta de produccion, es decir, dist
    new HtmlWebpackPlugin({
      template: './src/pages/index.hbs',
      filename: 'index.html',
      minify: false,
      // Aquí especifico el entry que generare y cual quiero que se inyecte. es decir, cual es el bundle a ejecutar para este archivo.
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/nosotros.hbs',
      filename: 'nosotros.html',
      minify: false,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/contacto.hbs',
      filename: 'contacto.html',
      minify: false,
      chunks: ['main']
    })

  ]

}