<template>
    <div class="container">
        <div id="upper_profile_div" class="parallax-container">
            <div class="parallax">
                <img id="background_pic" class="centered no_fit" v-bind:src="user_data.cover_url">
            </div>
            <div class="absolute" id="profile_div">
                <div id="picture_div" class="absolute z-depth-5">
                    <img id="profile_pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="" class="square responsive-img centered">
                    <a @click.prevent="openCamera" id="camera_button" class="btn-floating btn-large waves-effect waves-light red">
                        <i class="fa fa-camera-retro"></i>
                    </a>
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
                    <a @click="clickJoin" class="waves-effect waves-light btn">
                        Join
                    </a>
                <!-- <a @click.prevent="submitForm" class="waves-effect waves-light btn">Sign In</a> -->
                </div>
                <div class="row">
                    <div class="col s5">
                        <div class="field_header">Name</div>
                    </div>
                    <div class="col s6 editable">
                        <input id="name" type="text" class="user_input disabled" v-model="user_data.name">
                    </div>
                    <div class="buttons col s1 secondary-content">
                        <i class="edit fa fa-pencil absolute top_padding"></i>
                        <a class="asave" @click.prevent="nameChange">
                             <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col s5">
                        <div class="field_header">Category</div>
                    </div>
                    <div class="col s6 editable">
                        <input id="category" type="text" class="user_input disabled" v-model="user_data.category">
                    </div>
                    <div class="buttons col s1 secondary-content">
                        <i class="edit fa fa-pencil absolute top_padding"></i>
                        <a class="asave" @click.prevent="categoryChange">
                             <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col s5">
                        <div class="field_header">Phone</div>
                    </div>
                    <div class="col s6 editable">
                        <input id="nickname" type="text" class="user_input disabled" v-model="user_data.phone">
                    </div>
                    <div class="buttons col s1 secondary-content">
                        <i class="edit fa fa-pencil absolute top_padding"></i>
                       <a class="asave" @click.prevent="phoneChange">
                             <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col s5">
                        <div class="field_header">Contact Email</div>
                    </div>
                    <div class="col s6 editable">
                        <input id="email" type="text" class="user_input disabled" v-model="user_data.email">
                    </div>
                    <div class="buttons col s1 secondary-content">
                        <i class="edit fa fa-pencil absolute top_padding"></i>
                        <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                    </div>
                </div>
                <div class="row">
                    <div class="col s5">
                        <div class="field_header">Information</div>
                    </div>
                    <div class="col s6 editable">
                        <input id="info" type="text" class="user_input disabled" v-model="user_data.info">
                    </div>
                    <div class="buttons col s1 secondary-content">
                        <i class="edit fa fa-pencil absolute top_padding"></i>
                         <a class="asave" @click.prevent="infoChange">
                             <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="section white">
            <div class="profile_block z-depth-1">
                <h2 class="header">Last Donation</h2>
                <ul>
                    <li v-for="item in donation_key">
                        <div class="row">
                            <div class="col s9">
                                {{ item.key }}
                            </div>
                            <div class="col s2">
                                {{ item.date }}
                            </div>
                            <div class="col s1">
                                <i class="edit fa fa-pencil absolute top_padding"></i>
                                <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="section white">
            <div class="profile_block z-depth-1">
                <h2 class="header">User in our organisation</h2>
                <ul id="orga_list" class="overflow">
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
        <div class="section white">
            <div class="profile_block z-depth-1 overflow">
                <h2 class="header">Our Projects</h2>
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
</template>

<script type="text/babel">
 export default {
        name: 'orgaProfil',

         store: ['message', 'auth_data', 'client_secret', 'profil_data'],

        data: function () {
            return {
                user_data: {
                    name: "Societhy",
                    category: "ONG",
                    email: "SuperOrgaS@gmail.com",
                    phone: "0706070607",
                    image_view: null,
                    info: "Societhy ça déchire",
                    cover_url: "http://maxcdn.thedesigninspiration.com/wp-content/uploads/2012/06/Facebook-Covers-040.jpg",                    
                },
                donation_key: [
                    {
                        id: 1,
                        key: "Donnation 500 ether",
                        date: "13/01/2017",
                    },
                    {
                        id: 1,
                        key: "Donation 1000 ether",
                        date: "08/01/2017",
                    },
                    {
                        id: 1,
                        key: "Donation 300 ether",
                        date: "03/01/2017",
                    },
                ],
                lat: 'null',
                lng: 'null',
                orgas: [
                    {
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
        mounted() {
            var dataArrayget = {
                "id" : "58b61f66faf470006d0b8fd7",
                "password" : "simon",
            };
            console.log(this.auth_data.token);
            this.getOrgaDocument(dataArrayget);
            //this.getOrgaMemberList(dataArray);
            //this.leaveOrga(dataArrayJoin);

        },
        methods: {
            clickJoin(){
                    var dataArrayJoin = {
                    "orga_id" : "58b61f66faf470006d0b8fd7",
                    "password" : "simon",
                    "tag" : "member"
                };
                this.joinOrga(dataArrayJoin);
            },

            joinOrga(dataArray) {
                console.log(dataArray);
                var url = 'http://localhost:4242/joinOrga';
                var authorizationToken = this.auth_data.token;
                var xhr = $.ajax({
                url: url,
                dataType : "json",
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                xhrFields: { withCredentials: true },
                crossDomain: true,
                data: JSON.stringify(dataArray),
                beforeSend: function(request) {
                    request.setRequestHeader("Authentification", authorizationToken);
                },
                    success: function(output, status, xhr) {
                },
                    error : function(resultat, statut, erreur){

                },
                    cache: false
                });
            },

            leaveOrga(dataArray) {
                console.log(dataArray);
                var url = 'http://localhost:4242/leaveOrga';
                var authorizationToken = this.auth_data.token;
                var xhr = $.ajax({
                url: url,
                dataType : "json",
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                xhrFields: { withCredentials: true },
                crossDomain: true,
                data: JSON.stringify(dataArray),
                beforeSend: function(request) {
                    request.setRequestHeader("Authentification", authorizationToken);
                },
                    success: function(output, status, xhr) {
                },
                    error : function(resultat, statut, erreur){

                },
                    cache: false
                });
            },

            getOrgaDocument(dataArray)
            {
                console.log(dataArray);
                var url = 'http://localhost:4242/getOrganization';
                var authorizationToken = this.auth_data.token;
                var xhr = $.ajax({
                url: url,
                dataType : "json",
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                xhrFields: { withCredentials: true },
                crossDomain: true,
                data: JSON.stringify(dataArray),
                beforeSend: function(request) {
                    request.setRequestHeader("Authentification", authorizationToken);
                },
                    success: function(output, status, xhr) {
                },
                    error : function(resultat, statut, erreur){

                },
                    cache: false
                });
            },

            getOrgaMemberList(dataArray)
            {
                console.log(dataArray);
                var url = 'http://localhost:4242/getOrgaMemberList/' + this.auth_data.token.replace('|', '.') + '/' + dataArray.id;
                console.log(url);
                var authorizationToken = this.auth_data.token;
                var xhr = $.ajax({
                url: url,
                dataType : "json",
                type: 'GET',
                contentType: "application/json; charset=utf-8",
                xhrFields: { withCredentials: true },
                crossDomain: true,
                data: JSON.stringify(dataArray),
                beforeSend: function(request) {
                    request.setRequestHeader("Authentification", authorizationToken);
                },
                    success: function(output, status, xhr) {
                },
                    error : function(resultat, statut, erreur){

                },
                    cache: false
                });
            },


        }
    }
</script>