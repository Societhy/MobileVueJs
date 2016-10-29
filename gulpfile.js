var elixir = require('laravel-elixir')
require('laravel-elixir-vue-2')

elixir(function (mix) {
    mix.copy('./node_modules/font-awesome/fonts/**', 'public/fonts');
    mix.copy('./node_modules/materialize-css/fonts/**', 'public/fonts');
    mix.sass('./assets/scss/app.scss', './public/css/app.css')
       .webpack('./app/app.js', './public/js/app.js')
       .webpack('./node_modules/materialize-css/dist/js/materialize.js', './public/js/materialize.js')
       .webpack('./node_modules/jquery-validation/dist/jquery.validate.js', './public/js/validate.js')
})