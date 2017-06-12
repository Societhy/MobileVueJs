<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.12/vue.js"></script>
<template>
    <div class="container">
        <div id="upper_profile_div" class="parallax-container">
            <div class="parallax">
                <img id="background_pic" class="centered no_fit" v-bind:src="orga_data.cover_url">
            </div>
            <div class="absolute" id="profile_div">
                <div id="picture_div" class="absolute z-depth-5">
                    <img id="profile_pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="" class="square responsive-img centered">
                </div>
                <div class="absolute black full_screen transparent_low">
                    <div id="profile_infos" class="center-align full_screen">
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section white">
            <div class="profile_block z-depth-3">
                <h2 class="header">Organisation Information</h2>
                <div class="row" align="right">
                    <div class="row">
                        <div class="col s5">
                            <div class="field_header">Name</div>
                        </div>
                        <div class="col s6 editable">
                            <input id="name" type="text" class="user_input disabled" v-model="orga_data.name">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s5">
                            <div class="field_header">Description</div>
                        </div>
                        <div class="col s6 editable">
                            <input id="description" type="text" class="user_input disabled" v-model="orga_data.description">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s5">
                            <div class="field_header">Contact Email</div>
                        </div>
                        <div class="col s6 editable">
                            <input id="email" type="text" class="user_input disabled" v-model="orga_data.email">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s5">
                            <div class="field_header">Information</div>
                        </div>
                        <div class="col s6 editable">
                            <input id="info" type="text" class="user_input disabled" v-model="orga_data.info">
                        </div>
                    </div>
                </div>
                 <div  id="btnJ" class="row" align="left-align">
                        <a  @click="clickJoin" class="waves-effect waves-light btn" id="joinBtn" :disabled="disabled1 == 1 ? true : false">
                                Join
                        </a>
                        <a @click="clickLeave" class="waves-effect waves-light btn leaveBtn" ref="leaveBtn" :disabled="disabled2 == 1 ? true : false">
                                Leave
                        </a>
                </div>
                <!-- Collapse for all the component -->
                <ul class="collapsible" data-collapsible="accordion">
                    <li>
                        <div class="collapsible-header">Donation</div>
                        <div class="collapsible-body">
                        <form id="donation_form" class="col s12 center-align">
                                <div class="row">
                                        <div class="input-field col s10 offset-s1">
                                                <input id="donation" name="donation" type="text" class="validate" v-model="donation">
                                                <label for="donation" class="left-align">Amount of the Donation</label>
                                        </div>
                                </div>
                                <div class="row">
                                        <a @click="clickDonation" class="waves-effect waves-light btn">
                                                Donation
                                        </a>
                                </div>
                                <div id="example" data-info=""></div>
                        </form>
                        </div>
                    </li>

                    <li>
                        <div class="collapsible-header">Users in our organisation</div>
                        <div class="collapsible-body">
                            <div class="profile_block z-depth-1">

                                <searchsection v-on:fetch="openItem" :contacts="users">
                                </searchsection>
                                <ul id="orga_list" class="overflow">
                                    <li class="squared_list" v-for="item in users">
                                        <div class="picture_mini">
                                            <img v-bind:src="item.url" class="square_picture absolute">
                                            <div class="picture_infos center-align black transparent_low center-align absolute" style="color:#b3e5fc">
                                                {{ item.name }}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header">Our Projects</div>
                        <div class="collapsible-body">
                            <div class="profile_block z-depth-1 overflow">
                                <searchsection v-on:fetch="openItem" :contacts="fake.orgas">
                                </searchsection>
                                <ul id="projects_list" class="overflow">
                                    <li class="squared_list" v-for="item in orgas">
                                        <div class="picture_mini">
                                            <img v-bind:src="item.url" class="square_picture absolute">
                                            <div class="picture_infos center-align black transparent_low center-align absolute" style="color:#b3e5fc">
                                                {{ item.name }}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="collapsible-header">Proposals</div>

                        <div class="collapsible-body">
                                <ul class="eth_tab">
                                        <li v-for="item in proposals">
                                                <div class="row">
                                                        <div class="col s9">
                                                                {{ item.key }}
                                                        </div>
                                                        <div class="col s2">
                                                                {{ item.date }}
                                                        </div>
                                                        <div class="col s1">
                                                                <i class="edit fa fa-pencil absolute little_top_padding"></i>
                                                                <i class="save fa fa-floppy-o invisible absolute little_top_padding"></i>
                                                        </div>
                                                </div>
                                        </li>
                                </ul>
                        </div>
                    </li>

                    <li>
                        <div class="collapsible-header">News</div>
                        <div class="collapsible-body">
                        </div>
                    </li>

                </ul>
            </div>
            <div class="parallax-container" id="lower_profile_div">
                <div class="parallax centered background_pic" v-bind:style="cover_url">
                </div>
            </div>
            <div class="row">
                <router-link 
                        :to="{ name: 'orgaProfil' }">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
     name: 'orgaProfil',

     store: ['message', 'auth_data', 'client_secret', 'profil_data', 'fake'],

     data: function() {
         return {
             donation: "",  
             orga_data: {
                 name: "Societhy",
                 description: "ONG",
                 image_view: null,
                 info: "Societhy ça déchire",
                 cover_url: "http://maxcdn.thedesigninspiration.com/wp-content/uploads/2012/06/Facebook-Covers-040.jpg",
             },
             users: [
                {
                  id: 1,
                  name: "fefef",
                  url: "http://aurelienknaub.com/wp-content/uploads/2015/07/Aur%C3%A9lien.jpg",
                  pending: false,
                },
             ],
             proposals: [{
                     id: 1,
                     key: "Donnation 500 ether",
                     date: "13/01/2017",
                 },
                 {
                     id: 2,
                     key: "Donation 1000 ether",
                     date: "08/01/2017",
                 },
                 {
                     id: 3,
                     key: "Donation 300 ether",
                     date: "03/01/2017",
                 },
             ],
             lat: 'null',
             lng: 'null',
             orgas: [{
                     id: 1,
                     name: "MSF",
                     url: "https://pbs.twimg.com/profile_images/648421197844054016/wmrRb2GU.png",
                 },
                 {
                     id: 2,
                     name: "Humanis",
                     url: "https://www.newsassurancespro.com/wp-content/uploads/2012/02/Humanis.jpg",
                 },
                 {
                     id: 3,
                     name: "Croix Rouge",
                     url: "https://pbs.twimg.com/profile_images/779289835848818688/yifTHAJE.jpg",
                 },
                 {
                     id: 4,
                     name: "SOS Fantom",
                     url: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1c/SOS_Fant%C3%B4mes_-_Logo.svg/langfr-220px-SOS_Fant%C3%B4mes_-_Logo.svg.png",
                 },
             ],
         }

     },

     components: {
         "searchsection": require('./search/search_section.vue'),
     },

     mounted() {
        //$("a").get(0).prop("disabled",true);

         $('.collapsible').collapsible({
             accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
             onOpen: function(el) {
                 //alert('Open');
             }, // Callback for Collapsible open
             onClose: function(el) {
                 //alert('Closed');
             } // Callback for Collapsible close
         });

         console.log(this.auth_data);
         console.log(this.profil_data);
         
         var dataArrayget = {
             "id": "592ec5972064140120b695a8",
             "password": "simon",
             "socketid": this.auth_data.user._id
         };
         var dataArrayget2 = {
             "orga_id": "592ec5972064140120b695a8",
             "password": "simon",
             "socketid": this.auth_data.user._id
         };
         console.log(this.auth_data.token);
         this.getOrgaDocument(dataArrayget);
         //this.getOrgaMemberList(dataArrayget2); 
     },
     methods: {
         /**
          * Profil of an organisation
          * @class Orga Profil
          */

         /**
          * @method clickJoin
          * The data process when you arrived on this page
          */
         clickJoin() {
                
             var dataArrayJoin = {
                 "orga_id": "592ec5972064140120b695a8",
                 "password": "simon",
                 "tag": "admin",
                 "socketid": this.auth_data.user._id,
             };
             this.joinOrga(dataArrayJoin);
         },

        clickLeave() {
             var dataArrayLeave = {
                 "orga_id": "592ec5972064140120b695a8",
                 "password": "simon",
                 "socketid": this.auth_data.user._id,
             };
             this.leaveOrga(dataArrayLeave);
         },

         clickDonation() {
                if (!isNaN(this.donation)) {
                        var dataArrayDonation = {
                        "orga_id": "592ec5972064140120b695a8",
                        "password": "simon",
                        "donation": {"amount": this.donation},
                        "socketid": this.auth_data.user._id,
                        };
                        this.makeDonation(dataArrayDonation);
                }
        },


         /**
          * @method joinOrga
          * ajax method for join the organisation
          * @param {Object} json object of information on the organisation
          * 'orga_id', 'password' of the Ethereum's wallet, 'tag', member by default
          */
         joinOrga(dataArray) {
             console.log(dataArray);
             var url = 'http://localhost:4242/joinOrga';
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
                 success: function(output, status, xhr) {},
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },

         /**
          * @method leaveOrga
          * Ajax method for leave the organisation
          * @param {Object} json object of information on the organisation
          * 'orga_id', 'password' of the Ethereum's wallet
          */
         leaveOrga(dataArray) {
             console.log(dataArray);
             var url = 'http://localhost:4242/leaveOrga';
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

                 },
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },

         /**
          * @method getOrgaDocument
          * Ajax for get the information about the organisation
          * @param {Object} json object of information on the organisation
          * '_id' or 'name'
          */
         getOrgaDocument(dataArray) {
             console.log(dataArray);
             var url = 'http://localhost:4242/getOrganization';
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
                        this.orga_data.name = output.orga.name;
                        this.orga_data.description = output.orga.description;
                        if (output.orga.members.hasOwnProperty(this.auth_data.user.account)) {
                                console.log("egal");
                
                        } else {
                                console.log("pas egal");
                
                        }
                        var parsed = output.orga.members;
                        console.log("parsed : " + parsed);
                        var arr = [];
                        for(var x in parsed){
                                 arr.push(parsed[x]);
                        }
                        console.log("============ARRRRR==========");
                        console.log(arr);
                        this.users = arr;
                 }.bind(this),
                 error: function(resultat, statut, erreur) {
                        alert(resultat);
                 },
                 cache: false
             });
         },

         getAllBalances(dataArray) {
             console.log(dataArray);
             var url = 'http://localhost:4242/getAllBalances';
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
                 data: JSON.stringify(dataArray),
                 beforeSend: function(request) {
                     request.setRequestHeader("Authentification", authorizationToken);
                 },
                 success: function(output, status, xhr) {
                        console.log(output);
                 }.bind(this),
                 error: function(resultat, statut, erreur) {
                        alert(resultat);
                 },
                 cache: false
             });
         },


         /**
          * @method makeDonation
          * Ajax to do a donation for a organisation
          * @param {Object} json object of information on the organisation
          */
         makeDonation(dataArray) {
             console.log(dataArray);
             var url = 'http://localhost:4242/makeDonation';
             console.log(url);
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
                 success: function(output, status, xhr) {},
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },

         /**
          * @method getOrgaMemberList
          * Ajax for get the member list of the organisation
          * @param {Object} json object of information on the organisation
          * '_id' of the organisation
          */
         getOrgaMemberList(dataArray) {
             console.log(dataArray);
             var url = 'http://localhost:4242/getOrgaMemberList/' + dataArray.orga_id;
             console.log(url);
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
                 beforeSend: function(request) {
                     request.setRequestHeader("Authentification", authorizationToken);
                 },
                 success: function(output, status, xhr) {
                        console.log(fake.users);
                        this.fake.users = output; /*
                        for (var i = 0; i < output.length; i++){
                                if () {
                                        this.joinBtn.disabled = true;
                                        this.leaveBtn.disabled = false;
                                } else {
                                        this.joinBtn.disabled = false;
                                        this.leaveBtn.disabled = true;
                                }
                        }*/
                 }.bind(this),
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },

         openItem(item) {

         },

     } 
}
</script>