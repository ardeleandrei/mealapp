import App from './app'
import '@babel/polyfill'

var app = new App()

var $container = document.getElementsByTagName('body')[0]
app.run($container)
