<template>
    <div class="container">
        <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel blue lighten-5 z-depth-1">
          <div class="row">
            <div class="imgProfile-renderer col s4">
              <img src="./img/arthurSalop.jpg" alt="" class="responsive-img">
            </div>
                <div class="input-field col s4">
                    <input name="first_name" id="first_name" type="text" class="validate" v-model="firstName" >
                    <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s4">
                    <input name="last_name" id="last_name" type="text" class="validate" v-model="lastName" >
                    <label for="last_name">Last Name</label>
                </div>
                <div class="col s12">
                    <a class="btn-floating btn-large green">
                        <i class="large material-icons">mode_edit</i>
                    </a>
                </div>
            </div>
        </div>
        </div>
        <div class="carousel carousel-slider center card-panel grey" data-indicators="true">
         <div class="carousel-item blue white-text" href="#one!">
            <div class="row">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
            <div class="card-panel blue lighten-5 z-depth-1">
                <div class="col s12">
                    <h2>Personal information</h2>
                </div>
                <div class="col s12">
                    <input name="email" id="email" type="text" class="validate white-text" v-model="email">
                    <label for="email" class="white-text">Email</label>
                </div>
                <div class="col s12">
                    <input name ="phone" id="phone" type="text" class="validate white-text" v-model="phone">
                    <label for="phone" class="white-text">Phone</label>
                </div>
                <div class="col s12">
                    <input name ="day-of-birth" id="day-of-birth" type="text" class="validate white-text" v-model="dayOfBirth">
                    <label for="day-of-birth" class="white-text">dayOfBirth</label>
                </div>
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
                date:"14/04/1995",
            }
        },
        mounted() {
            $('.carousel.carousel-slider').carousel({full_width: true});

            $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 100
            });
        },
        methods: {
        }
    }
</script>
