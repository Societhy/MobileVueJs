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
                <router-link :to="{ name: 'profil' }" class="waves-effect waves-light btn">
                    Sign In
                </router-link>
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
                console.log('Test');

            	var dataArray = {
                    username: this.nickname,
                    password: this.password,
                    grant_type: "password",
					client_id: 1,
					client_secret: this.client_secret,
					scope: '*',
                };

                this.$http({
                    url: '/oauth/token',
                    method: 'POST',
                    body: dataArray
                }).then(function (response) {

                    alert("connected");
                    this.auth_data = response;

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
