import { Vue, router, store } from './boot/core'
import App from './components/app.vue'
import io from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
import VueToastr from '@deveodk/vue-toastr'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// If you would like custom styling of the toastr the css file can be replaced

var Vue = require('vue');
var VueCookie = require('vue-cookie');
//require('jquery-toast-plugin')

var socketio = io('http://localhost:4242/');


// Tell Vue to use the plugin
Vue.use(VueSocketio, socketio);
Vue.use(VueCookie);
Vue.use(VueToastr, {
    defaultPosition: 'toast-top-right',
    defaultType: 'info',
    defaultTimeout: 4000
});

var vm = new Vue({
    data: { store },
    sockets:{
    connect: function(){
      console.log('socket connected');
    },
    sessionId: function(val){
      console.log('sessionId');
      console.log(val);
      this.store.sessionId = val;
    },
    txResult: function(val){

      console.log(val)
      console.log("txResult");
      this.$toastr('success', 'Success', val.event);
      this.store.txResult = val.event;
    }
  },
    router : router,
    el: '#app',
    render: h => h(App),
    methods: {
        /**
        * The Application method
        *
        * @module App
        */

         /**
        * @method getJSONData
        * @param {Object} object - data
        * get the json of a data
        */
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

        /**
        * @method ajaxRequest
        * Basic ajax request for the edition 
        */
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

        /**
        * Set the token of authentification
        * @method setAuthToken
        * @param {Object} json object who contains the token
        */
        setAuthToken(request) {
            if (this.store.auth_data != null) {
                request.setRequestHeader("Authentification", this.store.auth_data.token);
            }
        },
        /**
        * Check if the application turn on phonegap
        * @method isPhoneGap
        */
        isPhoneGap() {
            return (window.cordova || window.PhoneGap || window.phonegap) 
            && /^file:\/{3}[^\/]/i.test(window.location.href) 
            && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
        },

        /**
        * Set the auth data
        * @param {Object} json object with all the information about the user
        * @method setAuthData
        */
        setAuthData(_auth_data) {
            this.store.auth_data = _auth_data;
        },
    }
})

window.vue = vm;