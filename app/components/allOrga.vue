<template>

<div class="container">
    <navBar></navBar>
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div class="row center-align">
            <h2 class="blue-text col s12">Societhy</h2>
            <h4 class="blue-text col s12 flow-text">All the organisations</h4>
        </div>
    <table ng-table="tableParams" show-filter="true" class="table bordered highlight" id="orga">
        <!-- ngInclude: templates.header -->
        <thead class="ng-scope">
        <tr>
            <td>
            <a>
                Organisation
            </a>
            </td>
            <td>
                <a>
                    Address
                </a>
            </td>
        </tr>
    
        </thead>
        <tbody>
             <tr v-for="item in orgas" @click="clickOrga(item)" >
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
                :to="{ name: 'allOrga' }">
        </router-link>
    </div>
</div>
</template>

<script type="text/babel">
export default {
    name: 'allOrga',

    store: ['message', 'client_secret', 'profil_data', 'ip'],

    mounted() {
         this.getOrgaMemberList();
    },

     components: {
         "searchsection": require('./search/search_section.vue'),
         "navBar" : require('./navBar.vue'),
     },

    data: function() {
        return {
           orgas: [{

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
         * Method for the allOrga
         * @class AllOrga
         */

        /**
          * @method getAllOrganizations-
          * Ajax for get the organisations
          */
         getOrgaMemberList() {
             var url = this.ip + '/getAllOrganizations';
             console.log(url);
             var xhr = $.ajax({
                 url: url,
                 dataType: "json",
                 type: 'GET',
                 contentType: "application/json; charset=utf-8",
                 xhrFields: {
                     withCredentials: true
                 },
                 crossDomain: true,
                 beforeSend: function(request) {
                 },
                 success: function(output, status, xhr) {
                 this.orgas = output;
                    
                 }.bind(this),
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },

         clickOrga(orga) {
            alert(orga._id);
             this.$router.push({ name: 'orgaProfil', params: { orgaId : orga._id }});
         }
    }
}
</script>

