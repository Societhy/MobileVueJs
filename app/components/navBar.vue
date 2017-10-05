<template>
<nav class="navbar navbar-default">
    <div class="nav-wrapper">
      <a @click="openSide(item)" class="brand-logo"><i class="medium material-icons">toc</i>Societhy</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a @click="login(item)">Home</a></li>
        <li><a @click="allOrga(item)">Organization</a></li>
        <li><a @click="profil(item)">Profil</a></li>
        <li><a @click="chat(item)">Chat</a></li>
        <li><a @click="search(item)">Search</a></li>
        <li><a @click="notif(item)">Notif</a></li>
      </ul>
    </div>
<ul id="slide-out" class="side-nav">
    <li><div class="user-view">
      <div class="background">
        <img src="images/office.jpg">
      </div>
      <a href="#!user"><img class="circle" src="images/yuna.jpg"></a>
      <a href="#!name"><span class="white-text name">John Doe</span></a>
      <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
</nav>
</template>

<style rel="stylesheet/scss" lang="sass">
    .navbar {
        border-left: 0;
        border-right: 0;
        border-top: 0;
    }
</style>

<script type="text/babel">

    export default {

        name: 'navBar',     

        template: "#navBar_component",

        props: [],

        store: ['auth_data'],

        data: function () {
            return {
           }
        },

        components: {
        },  

        watch: {
        },

        mounted() {
            $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, // Choose whether you can drag to open on touch screens,
            onOpen: function(el) {  }, // A function to be called when sideNav is opened
            onClose: function(el) {  }, // A function to be called when sideNav is closed
            });
        },

        methods: {
            openSide() {
                //$('.button-collapse').sideNav('show');
            },

            login() {
                 this.$router.push({ name: 'login'});
            },

            allOrga() {
                this.$router.push({ name: 'allOrga'});
            },

            profil() {
                this.$router.push({ name: 'profil'});
            },

            chat() {
                if (this.auth_data.user.contact_list.length > 0) {
                    this.$router.push({ name: 'chat'});
                } else {
                    this.$toastr('error', 'Please add a contact to use the chat!', 'Error');
                    this.$toastr('info', 'To add a contact, just go on is profil page and click on add as contact', 'Info');
                }
            },

            search() {
                this.$router.push({ name: 'searchS'});
            },

            notif() {
                this.$router.push({name : 'notification'});
            }

    }
}
</script>