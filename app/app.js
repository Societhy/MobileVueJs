import { Vue, router, store } from './boot/core'
import App from './components/app.vue'


// require('materialize-css/dist/js/materialize.js')
// require('jquery-validation/dist/jquery.validate.js')

new Vue({
    router,
    el: '#app',
    render: h => h(App),
    data: { store }
})