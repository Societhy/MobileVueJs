<template>
    <div class="container">
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
                        <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
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
                        <a class="asave" @click.prevent="changeName">
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
                        <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                    </div>
                </div>
                <div class="row">
                    <div class="col s5">
                        <div class="field_header">Telephone</div>
                    </div>
                    <div class="col s6 editable">
                        <input id="telephone" type="text" class="user_input disabled" v-model="user_data.telephone">
                    </div>
                    <div class="buttons col s1 secondary-content">
                        <i class="edit fa fa-pencil absolute top_padding"></i>
                        <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
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
                        <i class="save fa fa-floppy-o invisible absolute top_padding"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="section white">
            <div class="profile_block z-depth-1">
                <h2 class="header">Mes Clefs et Comptes</h2>
                <ul>
                    <li v-for="item in ethereum_keys">
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
                <h2 class="header">Mes Orgas</h2>
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
                <h2 class="header">Mes Projets</h2>
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
                :to="{ name: 'profil' }">
            </router-link>
        </div>
    </div>
</template>

<script type="text/babel">
 export default {
        name: 'profil',

        store: ['message', 'auth_data', 'client_secret'],

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
                        id: 1,
                        key: "AA5dw76d8dv7tefb98b7ter8vwev9wb8etb8erb7v8wcer6w5qw8",
                        date: "12/12/2016",
                    },
                    {
                        id: 1,
                        key: "AA5dw76d8dv7tefb98b7ter8vwev9wb8etb8erb7v8wcer6w5qw8",
                        date: "12/12/2016",
                    },
                    {
                        id: 1,
                        key: "AA5dw76d8dv7tefb98b7ter8vwev9wb8etb8erb7v8wcer6w5qw8",
                        date: "12/12/2016",
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
            this.getUserData();
        },

        methods: {

            editPersonalInfos() {
                $("ul.level-2").children().css( "background-color", "red" );
            },

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
                this.processUserData();
                /*
                console.log('before request')
                this.$http({
                    url: 'http://localhost:4242/',
                    method: 'GET',
                }).then(function (response) {
                    this.processUserData(window.vue.getJSONData(response));
                }, function (response) {
                    console.log(response)
                }); */
            },

            processUserData() {
                this.profil_data = this.auth_data;
                this.user_data.first_name = this.profil_data.user.firstname;
                this.user_data.last_name = this.profil_data.user.lastname;
                this.user_data.email = this.profil_data.user.email;
                //this.user_data.telephone = this.auth_data.user.phone;
                this.user_data.nickname = this.profil_data.user.name;
                this.ethereum_keys[0].key = this.profil_data.user.eth.mainKey;
            },

            changeName() {
                console.log(this.user_data.last_name);

                if (this.profil_data.user.lastname != this.user_data.last_name) {
                    console.log("rentre dans ta chatte");
                    var dataArray = {
                        'lastname' : this.profil_data.user.last_name,
                     };
                    console.log(this.profil_data.token);
                 //   console.log(this.resp_header['set-cookie']);
                     var header = {
                           'authentification' : this.profil_data.token,
            //               'cookie' : this.resp_header['set-cookie']
                    }
                    var url = 'http://localhost:4242/updateUser';
                this.$http({
                    url: url,
                    headers : header,
                    method: 'POST',
                    body: dataArray
                }).then(function (response) {
                 console.log(response);
                 alert(response.data);
                }, function (response) {

                    this.hasError = true;
                    // error callback
                   alert(response.data);
                  	console.log(response);
                   alert(response.status);
                });
                }
            }
        }
    }
</script>
