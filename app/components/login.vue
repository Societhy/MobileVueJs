<template>

    <div class="container">
        <div class="row center-align">
            <h2 class="blue-text col s12">Societhy</h2>
            <h4 class="blue-text col s12 flow-text">Connection page</h4>
        </div>

        <form id="login_form" class="col s12 center-align">
            <div class="row">
                <div class="input-field col s10 offset-s1">
                    <input id="login" name="login" type="text" class="validate" v-model="login">
                    <label for="login" class="left-align">Login</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s10 offset-s1">
                    <input id="password" name="password" type="password" class="validate" v-model="password">
                    <label for="password" class="left-align">Password</label>
                </div>
            </div>
            <div class="row">
                <a @click="submitForm" class="waves-effect waves-light btn">
                    Sign In
                </a>
                <!-- <a @click.prevent="submitForm" class="waves-effect waves-light btn">Sign In</a> -->
            </div>
            <div class="row">
                <router-link :to="{ name: 'register' }">
                    Register
                </router-link>
            </div>
            <div id="example" data-info=""></div>
        </form>
    </div>
</template>

<script type="text/babel">
export default {
    name: 'login',

    store: ['message', 'auth_data', 'client_secret', 'socket' , 'ip', 'ipPhone'],

    mounted() {
        console.log("FUCKKKKKKK");
        // if (window.vue.isPhoneGap()) {
           // this.ip = this.ipPhone;
         //}
    },

    data: function() {
        return {
            login: "",
            password: "",
            hasError: false,
        }
    },

    methods: {
        /**
         * Method for the login
         * @class Login
         */

        /**
         * @method submitForm
         * submit for the login
         */
        submitForm() {
            this.callAjax();
            console.log(this.auth_data);
            //this.nextPage();
        },

        /**
         * @method callAjax
         * Call ajax for the login
         */
        callAjax() {
            var dataArray = {
                "id": btoa(this.login + ':' + this.password)
            };
            var res = "";
            var url = this.ip + '/login';
            var xhr = $.ajax({
                url: url,
                async: true,
                dataType: "json",
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                data: JSON.stringify(dataArray),
                success: function(output, status, xhr) {
                    this.auth_data = output;
                    this.$socket.emit('init', {"id": this.auth_data.user._id});
                    this.$router.push('/profil');
                }.bind(this),
                error: function(resultat, statut, erreur) {
                    alert("Error: Wrong password or email/nickname");
                    //this.$router.push('/login');
                }.bind(this),
                cache: false
            });
            return res;

            // var dataArray = {
            //         "id": btoa(this.login + ':' + this.password)
            //     };
            // var url = 'http://localhost:4242/login';

            // window.vue.ajaxRequest('POST', url, dataArray, this.success, this.error)
        },

        success(output, status, xhr) {
        },

        error(resultat, status, error) {
            console.log('ERROR: log in')
            console.log(resultat)
            console.log(status)
            console.log(error)
        },
    }
}
</script>
