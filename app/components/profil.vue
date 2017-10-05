<template>
    <div class="container">
    <navBar></navBar>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div id="upper_profile_div" class="parallax-container">
            <div class="parallax">
                <img id="background_pic" class="centered no_fit" v-bind:src="user_data.cover_url">
            </div>
            <div class="absolute" id="profile_div">
                <div id="picture_div" class="absolute z-depth-5">
                    <img id="profile_pic" v-bind:src="user_data.image_view" alt="" class="square responsive-img centered">
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
                <h2 class="header">Mes Infos</h2>
                <div class="row">
                    <div class="col s5">
                        <div class="field_header">First Name</div>
                    </div>
                    <div class="col s6 editable">
                        <input id="firstName" type="text" class="user_input disabled" v-model="user_data.first_name">
                    </div>
                    <div class="buttons col s1 secondary-content">
                        <i class="edit fa fa-pencil absolute top_padding"></i>
                        <a class="asave" @click.prevent="firstNameChange">
                             <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col s5">
                        <div class="field_header">Last Name</div>
                    </div>
                    <div class="col s6 editable">
                        <input id="lastName" type="text" class="user_input disabled" v-model="user_data.last_name">
                    </div>
                    <div class="buttons col s1 secondary-content">
                        <i class="edit fa fa-pencil absolute top_padding"></i>
                        <a class="asave" @click.prevent="lastNameChange">
                             <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col s5">
                        <div class="field_header">Nickname</div>
                    </div>
                    <div class="col s6 editable">
                        <input id="nickname" type="text" class="user_input disabled" v-model="user_data.nickname">
                    </div>
                    <div class="buttons col s1 secondary-content">
                        <i class="edit fa fa-pencil absolute top_padding"></i>
                        <a class="asave" @click.prevent="nickNameChange">
                             <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col s5">
                        <div class="field_header">Email</div>
                    </div>
                    <div class="col s6 editable">
                        <input id="last_name" type="text" class="user_input disabled" v-model="user_data.email">
                    </div>
                    <div class="buttons col s1 secondary-content">
                        <i class="edit fa fa-pencil absolute top_padding"></i>
                         <a class="asave" @click.prevent="emailChange">
                             <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                        </a>
                    </div>
                </div>
                <div class="row friendBtn">
                    <div class="col s5">
                        <div class="field_header">Add as Friend</div>
                    </div>
                    <div class="col s6 editable">
                        <a  @click="addFriend" class="waves-effect waves-light btn" >
                                    Add as contact
                         </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="section white">
            <div class="profile_block z-depth-1">
                <h2 class="header">Mes Clefs et Comptes</h2>
                <ul class="eth_tab">
                    <li v-for="item in ethereum_keys">
                        <div class="row">
                            <div class="col s9">
                                Key : {{ item.address }}
                            </div>
                            <div class="col s2">
                                {{ item.balance }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="section white">
            <div class="profile_block z-depth-1">
                <h2 class="header">Mes Orgas</h2>
                <div id="orgas_search">
                    <div class="search_section">
                        <div class="float">
                            <ul class="selected_results">
<!--                                 <li v-for="orga in select_selected.users" class="collection-item avatar">
                                    <div class="selected_item">
                                        <img class="select_avatar circle" v-bind:src="user.url" alt="">
                                        {{ user.name }}
                                        <a @click.prevent="deleteSelectedElem(user)"><i class="fa fa-times"></i></a>
                                    </div>
                                </li> -->
                            </ul>                        
                        </div>
                        <div class="float select_input">
                            <input class="" v-model="select_input" @input="onInput"/>                        
                        </div>
                        <div class="close_button">
                            <a class="visible" @click.prevent="closeSearchSection()"><i class="fa fa-times"></i></a>
                        </div>                
                    </div>
                    <div class="search_results">
                        <ul id="selection_results">
                            <li v-for="orga in select_orgas" class="collection-item avatar">
                                <div @click.prevent="selectOrgas(orga)">
                                    <img class="select_avatar" v-bind:src="orga.url" alt="">
                                    {{ orga.name }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul id="orga_list" class="overflow">
                    <li class="squared_list" v-for="item in orgas">
                        <div class="picture_mini" @click.prevent="selectOrgas(orga)">
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
                <h2 class="header">Mes Projets</h2>
                <ul id="projects_list" class="overflow">
                    <li class="squared_list" v-for="item in projects">
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
                :to="{ name: 'profil' }">
            </router-link>
        </div>
    </div>
</template>

<script type="text/babel">
 export default {
        name: 'profil',

        store: ['message', 'auth_data', 'client_secret', 'fake', 'sessionId', 'ip'],

         components: {
         "searchsection": require('./search/search_section.vue'),
         "navBar" : require('./navBar.vue'),
        },
         props: {
            user : {
                required: false,
            },
        },

        data: function () {
            return {
                user_data: {
                    first_name: "Arthur",
                    last_name: "Ngo Van",
                    email: "arthur.ngovan@gmail.com",
                    telephone: "0666666666",
                    image_view: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
                    nickname: "Yasker",
                    cover_url: "http://maxcdn.thedesigninspiration.com/wp-content/uploads/2012/06/Facebook-Covers-040.jpg",                    
                },
                ethereum_keys: [
                    {
                        address: "AA5dw76d8dv7tefb98b7ter8vwev9wb8etb8erb7v8wcer6w5qw8",
                        balance: "50",
                    },
                    {
                        address: "AA5dw76d8dv7tefb98b7ter8vwev9wb8etb8erb7v8wcer6w5qw8",
                        balance: "1000",
                    },
                    {
                        address: "AA5dw76d8dv7tefb98b7ter8vwev9wb8etb8erb7v8wcer6w5qw8",
                        balance: "12",
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
                projects: [
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
                select_orgas: [],
                select_projects: [],
            }
        },
        /**
        * For all the front in javascript on tje profil page
        */
        mounted() {
            this.profil_data = Object.assign({}, this.auth_data);
            $('.carousel.carousel-slider').carousel({full_width: true});
            $(".user_input").attr("disabled", true)
            $(".parallax").parallax();
            if (navigator.geolocation) {

                console.log("try goelocation");

                navigator.geolocation.watchPosition(this.geolocationSuccess,
                                             this.geolocationError,
                                             { enableHighAccuracy: true, dtimeout : 5000});
            }
            console.log('edit')
            if (this.user) {
                console.log(this.user._id);
                console.log("against : ");
                console.log(this.auth_data.user._id);
                if (this.user._id == this.auth_data.user._id) {
                    $(".friendBtn").hide();
                    this.modify();
                } else {
                    $(".friendBtn").show();
                }
                this.profil_data.user = Object.assign({}, this.user);
            } else {
                this.modify();
                $(".friendBtn").hide();
            }
            this.getUserData();
            this.getSocketID();
        },

        methods: {

              /**
                * Profil of a user
                *
                * @class Profil
                */
            onInput() {
                console.log('yyy')
                this.select_orgas = this.fake.orgas;
                this.select_projects = this.fake.projects;
            },

            modify() {
                $('.fa.fa-pencil').on('click', function() {
                     console.log("1")
                     $(this).parent().parent().children(".editable").children(".user_input").attr("disabled", false);
                     $(this).removeClass("visible").addClass("invisible");
                     $(this).parent().children(".asave").children(".save").removeClass("invisible").addClass("visible");

                 });
                  $('.fa.fa-floppy-o').on('click', function() {
                     console.log("2")
                     $(this).parent().parent().parent().children(".editable").children(".user_input").attr("disabled", true);
                     $(this).removeClass("visible").addClass("invisible");
                     $(this).parent().parent().children(".edit").removeClass("invisible").addClass("visible");
                  });
            },

             /**
             * For all the organisation selection
             * @method selectOrgas
             * @param {Object} the reprensation of the organisation in json 
             */
            selectOrgas(orga) {
                this.select_orgas = []
                this.select_input = ''

                this.$router.push({ name: 'orgaProfil', params: { orgaId : orga._id }}); 
            },

            /**
             * Delete selected user
             * @method deleteSelectedElem
             * @param {Object} representation of the user in json
             */
            deleteSelectedElem(user) {
                console.log('lalala' + user.id)
                for (var i = 0; i < this.select_selected.users.length; ++i) {
                    if (this.select_selected.users[i].id == user.id) {
                console.log('lalalaoooo')
                        this.select_selected.users.splice(i, 1)
                        return;
                    }
                }
            },


            /**
             * @method closeSearchSection
             * initialisation of the search section
             */
            closeSearchSection() {
                this.select_orgas = []
                this.select_projects = []
                this.select_input = ''
            },
            
            ///////////////

            /**
             * @method editPersonalInfos
             * for edit the front during edition
             */
            editPersonalInfos() {
                $("ul.level-2").children().css( "background-color", "red" );
            },

             /**
             * @method openCamera
             * Open the camera for take a picture
             */
            openCamera() {
                navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                destinationType: Camera.DestinationType.FILE_URI
                });
                var self = this

                function onSuccess(imageData) {

                    var image = document.getElementById('image');
                    image.src = "data:image/jpeg;base64," + imageData;
                    image.rotate(-90)
                }

                function onFail(message) {

                    alert('Failed because: ' + message);
                    console.log('error getting photo');
                }

            },

            geolocationError () {
                console.log('geolocation err');
            },

            geolocationSuccess(position) {
                console.log('geolocation success');
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)
                this.lat = position.coords.latitude
                this.lng = position.coords.longitude
            },

            getUserData() {
                this.user_data.first_name = this.profil_data.user.firstname;
                this.user_data.last_name = this.profil_data.user.lastname;
                this.user_data.email = this.profil_data.user.email;
                this.user_data.nickname = this.profil_data.user.name;
                var parsed = this.profil_data.user.eth.keys;
                        var arrProp = [];
                        for(var x in parsed){
                            arrProp.push(parsed[x]);
                        }
                this.ethereum_keys = arrProp;
                this.orgas = this.profil_data.user.organizations;
                this.projects = this.profil_data.user.projects;
            },

            /**
            * @method lastNameChange
             * For the edit of the lastname
             */
            lastNameChange() {
                if (this.profil_data.user.lastname != this.user_data.last_name) {
                    var dataArray = {
                        '_id' : this.profil_data.user._id,
                        'lastname' : this.user_data.last_name,
                     };
                    this.changeName(dataArray);
                }
            },

            /**
            * @method firstNameChange
             * For the edit of the firstname
             */
            firstNameChange() {
                if (this.profil_data.user.firstname != this.user_data.first_name) {
                    var dataArray = {
                        '_id' : this.profil_data.user._id,
                        'firstname' : this.user_data.first_name,
                     };
                    this.changeName(dataArray);
                }
            },


            /**
             * For the edit of the email
             * @method emailChange
             */
             emailChange() {
                if (this.profil_data.user.email != this.user_data.email) {
                     var dataArray = {
                        '_id' : this.profil_data.user._id,
                        'email' : this.user_data.email,
                     };
                     this.changeName(dataArray);
                }
            },

            /**
             * For the edit of the nickname
             * @method nickNameChange
             */
            nickNameChange() {
                if (this.profil_data.user.name != this.user_data.nickname) {
                    var dataArray = {
                        '_id' : this.profil_data.user._id,
                        'name' : this.user_data.nickname,
                     };
                    this.changeName(dataArray);
                }
            },



            /**
             * To get the socket id
             * @method getSocketID
             */
            getSocketID(dataArray) {
                console.log("GetsocketId");
                var url = this.ip + '/socketid/';
                url = url + this.sessionId;
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
             * To add a friend 
             * @method addFriend
             */
            addFriend() {
                var dataArray = {
                "_id": this.auth_data.user._id,
                "contact" : {
                    "id": this.profil_data.user._id,
                    "firstname": this.profil_data.user.firstname,
                    "lastname": this.profil_data.user.lastname,
                    }
                }
                var header = {
                           'authentification' : this.profil_data.token,
                }
                var url = this.ip + '/addToContact';
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
                        this.auth_data.user = output;
                    }.bind(this),
                    error : function(resultat, statut, erreur){
                        this.$toastr('error', 'Error cannot add this contact', 'Error');
                    }.bind(this),
                    cache: false});
                },

            /**
             * Ajax request for the edition 
             * @method changeName
             * @param {Object} representation of the editable value in json
             * '_id' of the user, 'name' of what you want to edit
             */
            changeName(dataArray) {
                console.log(dataArray);
                var header = {
                           'authentification' : this.auth_data.token,
                }
                var url = this.ip + '/updateUser';
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
            error : function(resultat, statut, erreur){},
                cache: false});
            }
        },
    }
</script>
