<template>
    <div class="container">
    <div class="row center-align">
        <h2 class="blue-text col s12">Societhy</h2>
        <h4 class="blue-text col s12 flow-text">Registration page</h4>
    </div>
        <form class="col s12 center-align">
            <div class="row">
                <div class="input-field col s5 offset-s1">
                    <input id="first_name" type="text" class="validate" v-model="firstName">
                    <label for="first_name" class="left-align">First name</label>
                </div>
                <div class="input-field col s5">
                    <input id="last_name" type="text" class="validate" v-model="lastName">
                    <label for="last_name" class="left-align">Last name</label>
                </div>
                <div class="input-field col s10 offset-s1">
                    <input id="login" type="text" class="validate" v-model="login">
                    <label for="login" class="left-align">Login</label>
                </div>
                <div class="input-field col s10 offset-s1">
                    <input id="email" type="email" class="validate" v-model="email">
                    <label for="email" class="left-align">E-mail</label>
                </div>
                <div class="input-field col s10 offset-s1">
                    <input id="password" type="password" class="validate" v-model="password">
                    <label for="password" class="left-align">Password</label>
                </div>
                <div class="input-field col s10 offset-s1">
                    <input id="password_confirm" type="password" class="validate" v-model="password_confirm">
                    <label for="password_confirm" class="left-align">Password confirm</label>
                </div>
            </div>
            <div class="row">
                <a @click="submitForm" class="waves-effect waves-light btn">Confirm</a>
            </div>
            <div class="row">
                <router-link :to="{ name: 'login' }">
                    Sign In
                </router-link>
            </div>
        </form>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'register',

        store: ['message', 'last_user', 'client_secret'],

        data: function () {
            return {
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                password: "",
                password_confirm: "",
            }
        },

        mounted() {

        },

        methods: {
            submitForm() {
                this.router.go({ name: 'login', params : { }});
                console.log('Test');
                // POST request
                var dataArray = {
                    firstname: this.firstName,
                    lastname: this.lastName,
                    login: this.login,
                    email: this.email,
                    password: this.password,
                    password_confirm: this.password,
                    sex: "male",

                    grant_type: "password",
                    client_id: 1,
                    client_secret: this.client_secret,
                    scope: '*',
                };

                this.$http({
                    url: 'http://argos-cubehq-com-mrctmu3ds5hr.runscope.net/register',
                    method: 'POST',
                    body: dataArray
                }).then(function (response) {

                    alert('Registered');
                    this.last_user = this.login;
                    router.go({ name: 'login', params : { }});

                }, function (response) {

                    // error callback
                    alert('Error');
                    console.log(response);
                    alert(response.status);

                });


            },
            addValidation() {

            }

        }
    }
</script>