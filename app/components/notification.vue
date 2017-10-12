<template>

<div class="container">
    <navBar></navBar>
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div class="row center-align">
            <h2 class="blue-text col s12">Notifications</h2>
        </div>
     <div class="row">
        <div class="col s4">
                <a  @click="clickAllRead" class="waves-effect waves-light btn" >
                    Mark all as read
        </a>
        </div>
    </div>
    <table ng-table="tableParams" show-filter="true" class="table bordered highlight" id="orga">
        <!-- ngInclude: templates.header -->
        <thead class="ng-scope">
        <tr>
            <td>
            <a>
                Description
            </a>
            </td>
            <td>
                <a>
                    date
                </a>
            </td>
        </tr>
    
        </thead>
        <tbody>
             <tr v-for="item in notifications" @click="clickNotif(item)" >
                <td>
                    {{item.description}}
                </td>
                <td>
                    {{item.date}}
                </td>    
            </tr>
        </tbody>
</table>
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
           notifications: [],
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
                 //console.log(output);
                 //console.log(JSON.parse(output));
                 this.notifications = JSON.parse(output);
                 console.log(this.notifications);
                    
                 }.bind(this),
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },

         markNotificationsAsRead(notifs) {
             var url = this.ip + '/markNotificationsAsRead';
             var authorizationToken = this.auth_data.token;
             console.log(url);
             var xhr = $.ajax({
                 url: url,
                 type: 'POST',
                 xhrFields: {
                     withCredentials: true
                 },
                 data: JSON.stringify(notifs),
                 crossDomain: true,
                 dataType: "json",
                 contentType: "application/json; charset=utf-8",
                 beforeSend: function(request) {
                    request.setRequestHeader("Authentification", authorizationToken);
                 },
                 success: function(output, status, xhr) {
                    
                 }.bind(this),
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },

         clickAllRead() {
             this.markNotificationsAsRead({"data" : this.notifications});
         },

         clickNotif(notif) {
           var notifications = [];
           notifications.push(notif);
           this.markNotificationsAsRead({"data" : notifications});
            if (notif.category == "NewMember" || notif.category == "newInviteJoinOrga" 
                || notif.category == "orgaCreated")
                if (notif.sender.type == "Entreprise")
                     this.$router.push({ name: 'orgaProfil', params: { orgaId : notif.sender.id.$oid}});
         }
    }
}
</script>

