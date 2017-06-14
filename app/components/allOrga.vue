<template>

    <div class="container">
        <div class="row center-align">
            <h2 class="blue-text col s12">Societhy</h2>
            <h4 class="blue-text col s12 flow-text">All the organisations</h4>
        </div>
    </div>
     <div class="orgas">
        <ul class="eth_tab">
            <li v-for="item in orgas">
                <div class="row">
                    <div class="col s9">
                        {{ item.name }}
                    </div>
                    <div class="col s2">
                        <button onclick="myFunction()">Click me</button>
                    </div>
                </div>
            </li>
        </ul>
     </div>
     <div class="row">
        <router-link 
                :to="{ name: 'allOrga' }">
        </router-link>
    </div>
</template>

<script type="text/babel">
export default {
    name: 'login',

    store: ['message', 'client_secret', 'profil_data'],

    mounted() {},

    data: function() {
        return {
           orgas: [{

                     id: 1,
                     name: "MSF",
                     url: "https://pbs.twimg.com/profile_images/648421197844054016/wmrRb2GU.png",
                 },
                 {
                     id: 2,
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
             var url = 'http://localhost:4242/getAllOrganizations';
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
                    
                 }.bind(this),
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },
    }
}
</script>

