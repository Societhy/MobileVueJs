import { Vue, router, store } from './boot/core'
import App from './components/app.vue'
import VueSocketio from 'vue-socket.io';

// require('materialize-css/dist/js/materialize.js')
// require('jquery-validation/dist/jquery.validate.js')


var Vue = require('vue');
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);
Vue.use(VueSocketio, 'http://localhost:4242');

var vm = new Vue({
    router : router,
    el: '#app',
    render: h => h(App),
    data: { store },
    sockets:{
    connect: function(){
        //Materialize.toast('test', 4000)
      console.log('socket connected')
    },
    notify: function(val){
        console.log("-----CustomEmit")
        console.log(val)
        alert(val);
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
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
        /**
        *
        */
        emitInit: function(id){
            console.log('initemit')
            Materialize.toast('test', 4000)
            this.$socket.emit('init', {'id': id});
        }
    }
})

window.vue = vm;