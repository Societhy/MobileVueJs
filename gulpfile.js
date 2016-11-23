var elixir = require('laravel-elixir')
require('laravel-elixir-vue-2')

elixir(function (mix) {
    mix.copy('./node_modules/font-awesome/fonts/**', './../Mobile/www/fonts');
    mix.copy('./node_modules/materialize-css/fonts/**', './../Mobile/www/fonts');
    mix.copy('./public/index.html', './../Mobile/www/index.html');
    mix.sass('./assets/scss/app.scss', './../Mobile/www/css/app.css')
       .webpack('./app/app.js', './../Mobile/www/js/app.js')
       .webpack('./node_modules/materialize-css/dist/js/materialize.js', './../Mobile/www/js/materialize.js')
       .webpack('./node_modules/jquery-validation/dist/jquery.validate.js', './../Mobile/www/js/validate.js')
})