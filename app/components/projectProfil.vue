<template>
    <div class="container">
    <navBar></navBar>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Latest compiled and minified CSS -->
        <div id="upper_profile_div" class="parallax-container">
            <div class="parallax">
                <img id="background_pic" class="centered no_fit" v-bind:src="project_data.cover_url">
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
                <h2 class="header">Project Information</h2>
                <div class="row" align="right">
                    <div class="row">
                        <div class="col s5">
                            <div class="field_header">Name</div>
                        </div>
                        <div class="col s6 editable">
                            <input id="name" type="text" class="user_input disabled" disabled="disabled" v-model="project_data.name">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s5">
                            <div class="field_header">Description</div>
                        </div>
                        <div class="col s6 editable">
                            <input id="description" type="text" class="user_input disabled"  disabled="disabled" v-model="project_data.description">
                        </div>
                    </div>
                     <div class="row">
                        <div class="col s5">
                            <div class="field_header">Balance (eth)</div>
                        </div>
                        <div class="col s6 editable">
                            <input id="name" type="text" class="user_input disabled" disabled="disabled" v-model="project_data.balance">
                        </div>
                    </div>
                </div>
                 <div class="row">
                        <div class="col s4">
                            <a  @click="clickJoin" class="waves-effect waves-light btn joinBtn" >
                                    Join
                         </a>
                         <a @click="clickLeave" class="waves-effect waves-light btn leaveBtn">
                                    Leave
                            </a>
                         </div>
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
                        <div class="collapsible-header">Campaign</div>
                        <div class="collapsible-body">
                           <div class="col s5">
                            <div class="campaign"></div>
                            </div>
                                <div class="row">
                                        <div class="col s10 offset-s1">
                                            <p class="goal">The goal for this project is {{campaign.amount_to_raise}} eth. {{campaign.raise}}</p>
                                            </div>
                                        <div class="col s10 offset-s1">
                                            <div class="progress">
                                                     <div class="determinate" v-bind:style="styleP">
                                                         {{campaign.goal}}%
                                                     </div>
                                                </div>
                                        </div>
                                        <div class="col s10 offset-s1">
                                                <div class="progress">
                                                     <div class="determinate" v-bind:style="styleTime">
                                                         {{campaign.time_left_percent}}%
                                                     </div>
                                                </div>
                                        </div>
                                        </div>

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
                        :to="{ name: 'projectProfil' }">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
    name: 'projectProfil',

    store: ['message', 'auth_data', 'client_secret', 'profil_data', 'fake', 'sessionId', 'txResult', 'ip'],

    props: {
            projectId : {
            required: true
        },
    },
     data: function() {
         return {
             donation: "",  
             styleP: {
                width: "",
             },
             styleTime: {
                width: "",
             },
             project_data: {
                 name: "Societhy",
                 description: "ONG",
                 image_view: null,
                 balance: 0.0,
                 info: "Societhy ça déchire",
                 cover_url: "http://maxcdn.thedesigninspiration.com/wp-content/uploads/2012/06/Facebook-Covers-040.jpg",
                 id : "",
             },
             campaign : {
                time_left_percent:"",
                goal:"",
                duration:"",
                amount_to_raise:"",
                raise:"",
             },
             users: [
                {
                  id: 1,
                  name: "fefef",
                  url: "http://aurelienknaub.com/wp-content/uploads/2015/07/Aur%C3%A9lien.jpg",
                  pending: false,
                },
             ],
             ready: false,
             lat: 'null',
             lng: 'null',
         }
     },

     components: {
         "searchsection": require('./search/search_section.vue'),
         "navBar" : require('./navBar.vue'),
     },

    watch: {
        ready: function (val) {
            this.ready = val;
        },
        txResult: function (val) {
            var dataArrayget = {
                "id": this.projectId,
                "password": "simon",
                "socketid": this.sessionId
            };
            if (val == 'NewMember') {
                this.getProject(dataArrayget);
            } else if (val == 'MemberLeft') {
                this.getProject(dataArrayget);
            } else if (val == 'DonationMade') {
                this.getProject(dataArrayget);
            }
        }
    },

    created() {
         var dataArrayget = {
             "id": this.projectId,
             "password": "simon",
             "socketid": this.sessionId
         };
         this.getProject(dataArrayget);
    },

     mounted() {
        //$("a").get(0).prop("disabled",true);
        console.log(this.projectId);
        this.project_data.id = this.projectId;
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
     },

     updated() {
        this.ready = true;
     },

     methods: {
         /**
          * Profil of an project
          * @class Project Profil
          */

         /**
          * @method clickJoin
          * The data process when you arrived on this page
          */
         clickJoin() {
                
             var dataArrayJoin = {
                 "proj_id": this.projectId,
                 "password": "simon",
                 "tag": "member",
                 "socketid": this.sessionId,
             };
             this.joinProject(dataArrayJoin);
         },

        clickLeave() {
             var dataArrayLeave = {
                 "proj_id": this.projectId,
                 "password": "simon",
                 "socketid": this.sessionId,
             };
             this.leaveProject(dataArrayLeave);
         },

         clickDonation() {
                if (!isNaN(this.donation)) {
                        var dataArrayDonation = {
                        "proj_id": this.projectId,
                        "password": "simon",
                        "donation": {"amount": this.donation},
                        "socketid": this.sessionId,
                        };
                        this.donateToProject(dataArrayDonation);
                }
        },

        disableJoinOrLeave(proj) {
            if (proj.members.hasOwnProperty(this.auth_data.user.account) || proj.members.hasOwnProperty(this.auth_data.user.name)) {
                $(".joinBtn").attr("disabled", true);
                $(".leaveBtn").attr("disabled", false);
                console.log("insoide");
            } else {
                $(".leaveBtn").attr("disabled", true);
                $(".joinBtn").attr("disabled", false);
                console.log("notinside");
            }
        },


         /**
          * @method joinProject
          * ajax method for join the project
          * @param {Object} json object of information on the project
          * 'proj_id', 'password' of the Ethereum's wallet, 'tag', member by default
          */
         joinProject(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/joinProject';
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
                    this.$toastr('info', 'Info', 'wait for the blockchain answer');
                 }.bind(this),
                 error: function(resultat, statut, erreur) {
                     this.$toastr('error', 'Error', 'Cannot join project');
                 }.bind(this),
                 cache: false
             });
         },

         /**
          * @method leaveProject
          * Ajax method for leave the project
          * @param {Object} json object of information on the project
          * 'proj_id', 'password' of the Ethereum's wallet
          */
         leaveProject(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/leaveProject';
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
                         this.$toastr('info', 'Info', 'wait for the blockchain answer');
                 }.bind(this),
                 error: function(resultat, statut, erreur) {
                        this.$toastr('error', 'Error', 'Cannot leave project');
                 }.bind(this),
                 cache: false
             });
         },

         /**
          * @method getProject
          * Ajax for get the information about the getProject
          * @param {Object} json object of information on the getProject
          * '_id' or 'name'
          */
         getProject(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/getProject';
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
                    this.project_data = output.project;
                    this.campaign.time_left_percent = output.project.time_left_percent;
                    this.campaign.amount_to_raise = output.project.campaign.amount_to_raise;
                    this.campaign.duration = output.project.campaign.duration;
                    this.campaign.goal = (this.project_data.balance / output.project.campaign.amount_to_raise) * 100;
                    this.campaign.goal.toFixed(2);
                    if (this.project_data.balance < this.campaign.amount_to_raise)
                        this.campaign.raise = " Recolted now : " + this.project_data.balance + "eth";
                    else
                        this.campaign.raise = " Recolted now : " + this.campaign.amount_to_raise + "eth";
                    if (this.campaign.time_left_percent < 0)
                        this.campaign.time_left_percent = 0;
                    this.styleP.width = this.campaign.goal + '%';
                    this.styleTime.width = this.campaign.time_left_percent + '%';
                    console.log(this.campaign.goal);
                    console.log(this.campaign.time_left_percent);
                    this.disableJoinOrLeave(output.project);
                    this.goal();
                 }.bind(this),
                 error: function(resultat, statut, erreur) {
                        alert(resultat);
                 },
                 cache: false
             });
         },

            goal() {
            if (this.project_data.balance >= this.campaign.amount_to_raise)
                 $(".goal").text("The campaign is a success ! " + this.campaign.amount_to_raise + " eth recolted");
        },



         getAllBalances(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/getAllBalances';
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
          * @method donateToProject
          * Ajax to do a donation to a projet
          * @param {Object} json object of information on the project
          */
         donateToProject(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/donateToProject';
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
                 success: function(output, status, xhr) {
                    this.$toastr('info', 'Info', 'wait for the blockchain answer');
                 }.bind(this),
                 error: function(resultat, statut, erreur) {
                     this.$toastr('error', 'Error', 'Cannot do a donation');
                 }.bind(this),
                 cache: false
             });
         },

     }
}
</script>