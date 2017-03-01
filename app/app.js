import { Vue, router, store } from './boot/core'
import App from './components/app.vue'


// require('materialize-css/dist/js/materialize.js')
// require('jquery-validation/dist/jquery.validate.js')

var Vue = require('vue');
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);


var vm = new Vue({
    router : router,
    el: '#app',
    render: h => h(App),
    data: { store },
    methods: {

        getJSONData(json) {
            if (this.isPhoneGap()) {
                console.log("PJSON: " + json.data)
                console.log("PJSON: " + json.data.toString())
                return json.user;
            }
            else {
                console.log("BJSON: " + JSON.parse(json.data))
                console.log("BJSON: " + JSON.parse(json.data).toString())
                return JSON.parse(json.user);
            }
        },

        ajaxRequest(type, route, params, success, error) {
            var res = "";
            var url = 'http://localhost:4242/login';
            var xhr = $.ajax({
                url: route,
                async: false,
                dataType : "json",
                type: type,
                contentType: "application/json; charset=utf-8",
                xhrFields: { withCredentials: true },
                crossDomain: true,
                data: JSON.stringify(params),
                beforeSend: setAuthToken,
                success: success,
                error: error,
                cache: false,
            })
        },

        setAuthToken(request) {
            if (this.store.auth_data != null) {
                request.setRequestHeader("Authentification", this.store.auth_data.token);
            }
        },

        isPhoneGap() {
            return (window.cordova || window.PhoneGap || window.phonegap) 
            && /^file:\/{3}[^\/]/i.test(window.location.href) 
            && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
        },

        setAuthData(_auth_data) {
            this.store.auth_data = _auth_data;
        },
    }
})

window.vue = vm;