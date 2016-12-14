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
        </form>
    </div>
</template>

<script type="text/babel">

    export default {
        name: 'login',

        store: ['message', 'auth_data', 'client_secret'],

        mounted() {
        	this.addValidation()
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
            	this.hasError = true;

            	var dataArray = {
                    "id": btoa(this.login + ':' + this.password)
                };
                var url = 'http://localhost:4242/login';
                  console.log(url);
                this.$http({
                    url: url,
                    method: 'POST',
                    body: dataArray
                }).then(function (response) {
                    console.log(response);
                    this.resp_header = response.headers;
                    console.log(this.resp_header);
                   // console.log("-----------------------");
                   // console.log(this.resp_header.data);
                    this.auth_data = response.data;
                    this.$router.push('/profil');

                }, function (response) {

            		this.hasError = true;
                    // error callback
                    alert(response.data);
                    console.log(response);
                    alert(response.status);
                });
            },
            addValidation() {
        		console.log('toooo')
        	}
        }
    }
</script>
