<template>

<div class="container">
    <navBar></navBar>
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div class="row center-align">
            <h2 class="blue-text col s12">Societhy</h2>
            <h4 class="blue-text col s12 flow-text">Search</h4>
        </div>
        <form id="search_form" class="col s10 center-align">
            <div class="row">
                <div class="input-field col s8 offset-s1">
                    <input id="search" name="search" type="text" class="validate" v-model="search">
                    <label for="search" class="left-align">Search</label>
                </div>
                <div class="col s2">
                    <a @click="searchForm" class="waves-effect waves-light btn">
                        Search
                    </a>
                <!-- <a @click.prevent="submitForm" class="waves-effect waves-light btn">Sign In</a> -->
                </div>
            </div>
            <div id="example" data-info=""></div>
        </form>
        <table ng-table="tableParams" show-filter="true" class="table bordered highlight" id="searchsTab">
        <!-- ngInclude: templates.header -->
        <thead class="ng-scope">
        <tr>
            <td>
            <a>
                  Name
            </a>
            </td>
             <td>
                <a>
                   Category
                </a>
            </td>
            <td>
                <a>
                   Id
                </a>
            </td>
        </tr>
    
        </thead>
        <tbody>
             <tr v-for="item in searchs" @click="clickSearch(item)" >
                <td>
                    {{item.name}}
                </td>
                 <td>
                    {{item.category}}
                </td>
                <td>
                    {{item._id}}
                </td>
            </tr>
        </tbody>
    </table>
     <div class="row">
        <router-link 
                :to="{ name: 'searchS' }">
        </router-link>
    </div>
</div>
</template>

<script type="text/babel">
export default {
    name: 'searchS',

    store: ['message', 'client_secret', 'profil_data', 'auth_data', 'ip'],

    mounted() {
    },

     components: {
         "searchsection": require('./search/search_section.vue'),
         "navBar" : require('./navBar.vue'),
     },

    data: function() {
        return {
           search: '',
           searchs: [{

                     _id: "", 
                     account: null, 
                     category: "", 
                     name: ""
                 },
             ],
        }
    },

    methods: {
        /**
         * Method for the searchS
         * @class searchS
         */

        /**
         * @method searchForm
         * search something (can be a project/user/orga)
         */
        searchForm() {
            if (this.search){
               this.searchFor(this.search)
            } else {
                this.$toastr('error', 'Error', 'Please put something in the search bar');
            }
        },

        /**
          * @method searchFor
          * ajax method for search the organisations / users / projects
          * @param {Object} json object of all the thing that are find
          * string who is the search string
          */
         searchFor(data) {
             console.log(data);
             var url = this.ip + '/searchFor/' + data;
             var authorizationToken = this.auth_data.token;
             var xhr = $.ajax({
                 url: url,
                 dataType: "json",
                 type: 'GET',
                 contentType: "application/json; charset=utf-8",
                 xhrFields: {
                     withCredentials: true
                 },
                 crossDomain: true,
                 data: JSON.stringify(data),
                 beforeSend: function(request) {
                     request.setRequestHeader("Authentification", authorizationToken);
                 },
                 success: function(output, status, xhr) {
                        console.log(output);
                        this.searchs = output;
                 }.bind(this),
                 error: function(resultat, statut, erreur) {
                        alert(resultat);
                 },
                 cache: false
             });
         },

          /**
          * @method findUser
          * ajax method for find a user with the id
          * @param {Object} json object of information on the user
          * '_id',
          */
         findUser(dataArray) {
             var url = this.ip + '/findUser';
             var authorizationToken = this.auth_data.token;
             var xhr = $.ajax({
                 url: url,
                 dataType: "json",
                 type: 'POST',
                 contentType: "application/json; charset=utf-8",
                 xhrFields: {
                     withCredentials: true
                 },
                 crossDomain: true,
                 data: JSON.stringify(dataArray),
                 beforeSend: function(request) {
                     request.setRequestHeader("Authentification", authorizationToken);
                 },
                 success: function(output, status, xhr) {
                    this.$toastr('info', 'Info', 'Find a user');
                    var user = output;
                    this.$router.push({ name: 'profil', params: { user : user }});

                 }.bind(this),
                 error: function(resultat, statut, erreur) {
                     this.$toastr('error', 'Error', 'Cannot find a  user');
                 }.bind(this),
                 cache: false
             });
         },
 

         clickSearch(search) {
            if (search.category == "user") {
                this.findUser({'_id' : search._id});
            } else if (search.category == 'organization') {
                this.$router.push({ name: 'orgaProfil', params: { orgaId : search._id }});
            } else if (search.category == 'project') {
                this.$router.push({ name: 'projectProfil', params: { projectId : search._id }});   
            }
        }
    }
}
</script>

