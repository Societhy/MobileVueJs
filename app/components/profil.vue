<template>
    <div class="container">
        <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row">
            <div class="imgProfile-renderer col s4">
              <img src="./img/arthurSalop.jpg" alt="" class="responsive-img" id="image" v-bind:src="image_view">
            </div>
            <div class="input-field col s3">    
                <input id="first_name" type="text" name="first_name" class="validate" v-model="firstName" disabled="disabled">
                <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s3">
                <input id="last_name" type="text" name="last_name" class="validate" v-model="lastName" disabled="disabled">
                <label for="last_name">Last Name</label>
            </div>
            <div>
                <a @click.prevent="openCamera" class="btn-floating btn-large waves-effect waves-light red"><i class="fa fa-camera-retro"></i></a>
            </div>
            </div>
            <div class='row'>
                <blockquote>
                    <span>Lattitude: {{ lat }}</span>
                    <span>Longitude: {{ lng }}</span>
                </blockquote>
            </div>
        </div>
        <div class="carousel carousel-slider center card-panel grey lighten-5 z-depth-1" data-indicators="true">
         <div class="carousel-item blue white-text" href="#one!">
            <div class="row">
                <div class="col s12">
                    <h2>Personal information</h2>
                </div>
                <div class="col s6">
                    <input id="email" type="text" class="validate white-text" v-model="email"
                    disabled="disabled">
                    <label for="email" class="white-text">Email</label>
                </div>
                <div class="col s6">
                    <input id="phone" type="text" class="validate white-text" v-model="phone"
                    disabled="disabled">
                    <label for="phone" class="white-text">Phone</label>
                </div>
            </div>
        </div>
        <div class="carousel-item green white-text" href="#two!">
            <h2>Activity</h2>
            <p class="white-text">This is your second panel</p>
        </div>
        <div class="carousel-item grey white-text" href="#three!">
            <h2>Organisation and Projet</h2>
            <p class="white-text">This is your third panel</p>
        </div>
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
                firstName: "Arthur",
                lastName: "Ngo-van",
                email: "aurthurNgo@gmail.vietnam",
                phone: "6666666666",
                image_view: null,
                lat: 'null',
                lng: 'null',
            }
        },
        mounted() {
            $('.carousel.carousel-slider').carousel({full_width: true});

            if (navigator.geolocation) {

                console.log("try goelocation");

                navigator.geolocation.watchPosition(this.geolocationSuccess,
                                             this.geolocationError,
                                             { enableHighAccuracy: true, dtimeout : 5000});
            }

        },

        methods: {

            openCamera() {
                navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                destinationType: Camera.DestinationType.FILE_URI
                });
                var self = this

                function onSuccess(imageData) {

                    console.log('success getting photo');
                    self.image_view = imageData;
                    $("#image").rotate(-90)
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
                this.lat = position.coords.latitude
                this.lng = position.coords.longitude

            },
        }
    }
</script>
