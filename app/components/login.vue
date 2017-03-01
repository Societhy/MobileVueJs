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

        store: ['message', 'auth_data', 'client_secret'],

        mounted() {
        },

        data: function () {
            return {
                login: "",
                password: "",
                hasError: false,
            }
        },

        methods: {
            submitForm() {
                this.auth_data = this.callAjax();
                console.log(this.auth_data);
                this.nextPage();
        },

        callAjax() {
            var dataArray = {
                    "id": btoa(this.login + ':' + this.password)
                };
            var res = "";
            var url = 'http://localhost:4242/login';
            var xhr = $.ajax({
                url: url,
                async: false,
                dataType : "json",
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                xhrFields: { withCredentials: true },
                crossDomain: true,
                data: JSON.stringify(dataArray),
        success: function(output, status, xhr) {
                res = output;
            },
        error : function(resultat, statut, erreur){

            },
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
            console.log('SUCCESS: log in')
            this.auth_data = output
        },

        error(resultat, status, error) {
            console.log('ERROR: log in')
            console.log(resultat)
            console.log(status)
            console.log(error)
        },

        nextPage() {
            this.$router.push('/profil'); 
        }
    }
}
</script>
