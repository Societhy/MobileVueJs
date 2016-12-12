import { Vue, router, store } from './boot/core'
import App from './components/app.vue'


// require('materialize-css/dist/js/materialize.js')
// require('jquery-validation/dist/jquery.validate.js')

new Vue({
    router,
    el: '#app',
    render: h => h(App),
    data: { store },
    methods: {

        getJSONData(json) {
            if (this.isPhoneGap()) {
                console.log("PJSON: " + json.data)
                console.log("PJSON: " + json.data.toString())
                return json.data;
            }
            else {
                console.log("BJSON: " + JSON.parse(json.data))
                console.log("BJSON: " + JSON.parse(json.data).toString())
                return JSON.parse(json.data);
            }
        },

        isPhoneGap() {
            return (window.cordova || window.PhoneGap || window.phonegap) 
            && /^file:\/{3}[^\/]/i.test(window.location.href) 
            && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
        },
    }
})