<template>

<div class="container">
    <navBar></navBar>
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div class="row center-align">
            <h2 class="blue-text col s12">Notification</h2>
            <h4 class="blue-text col s12 flow-text">The unread one</h4>
        </div>
    <table ng-table="tableParams" show-filter="true" class="table bordered highlight" id="orga">
        <!-- ngInclude: templates.header -->
        <thead class="ng-scope">
        <tr>
            <td>
            <a>
                Notification
            </a>
            </td>
            <td>
                <a>
                    Info
                </a>
            </td>
        </tr>
    
        </thead>
        <tbody>
             <tr v-for="item in notifications" @click="clickNotif(item)" >
                <td>
                    {{item.name}}
                </td>
                <td>
                    {{item._id}}
                </td>    
            </tr>
        </tbody>
</table>
     <div class="row">
        <router-link 
                :to="{ name: 'Notification' }">
        </router-link>
    </div>
</div>
</template>

<script type="text/babel">
export default {
    name: 'notification',

    store: ['message', 'client_secret', 'profil_data', 'auth_data', 'ip'],

    mounted() {
         this.getUserUnreadNotification();
    },

     components: {
         "searchsection": require('./search/search_section.vue'),
         "navBar" : require('./navBar.vue'),
     },

    data: function() {
        return {
           notifications: [{

                     _id: "8xFEZOOFEZKOKOKOZFE32",
                     name: "MSF",
                     url: "https://pbs.twimg.com/profile_images/648421197844054016/wmrRb2GU.png",
                 },
                 {
                     _id: "8xFFIZFPFEZPFPZEP323",
                     name: "Humanis",
                     url: "https://www.newsassurancespro.com/wp-content/uploads/2012/02/Humanis.jpg",
                 }
             ],
        }
    },

    methods: {
        /**
         * Method for the notification
         * @class Notification
         */

        /**
          * @method getUserUnreadNotification-
          * Ajax for get getUserUnreadNotification organisations
          */
         getUserUnreadNotification() {
             var url = this.ip + '/getUserUnreadNotification';
             var authorizationToken = this.auth_data.token;
             console.log(url);
             var xhr = $.ajax({
                 url: url,
                 type: 'GET',
                 xhrFields: {
                     withCredentials: true
                 },
                 crossDomain: true,
                 beforeSend: function(request) {
                    request.setRequestHeader("Authentification", authorizationToken);
                 },
                 success: function(output, status, xhr) {
                 this.notifications = output;
                    
                 }.bind(this),
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },

         clickNotif(notif) {
            alert(notif._id);
            console.log("oooooooo");
             //this.$router.push({ name: 'orgaProfil', params: { orgaId : orga._id }});
         }
    }
}
</script>

