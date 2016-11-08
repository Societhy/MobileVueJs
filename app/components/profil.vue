<template>
    <div class="container">
        <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="imgProfile-renderer col s5">
              <img src="./img/arthurSalop.jpg" alt="" class="circle responsive-img">
            </div>
            <div class="col s5 offset-s2">
                <input id="first_name" type="text" class="validate" v-model="firstName"
                disabled="disabled">
                <label for="first_name" class="left-align">First name</label>
            </div>
             <div class="col s5 offset-s2">
                <input id="last_name" type="text" class="validate" v-model="lastName" disabled="disabled">
                <label for="last_name" class="left-align">Last name</label>
            </div>
          </div>
        </div>
        
        <div class="carousel carousel-slider center card-panel grey lighten-5 z-depth-1" data-indicators="true">
         <div class="carousel-item blue white-text" href="#one!">
            <h2>Personal information</h2>
            <p class="white-text">This is your first panel</p>
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
        <router-link :to="{ name: 'profil' }">
        </router-link>
    </div>
    </div>
</template>

<script type="text/babel">
 export default {
        name: 'login',

        store: ['message', 'auth_data', 'client_secret'],

        mounted() {
            $('.carousel.carousel-slider').carousel({full_width: true});
        },
        methods: {
        }

    }
</script>
