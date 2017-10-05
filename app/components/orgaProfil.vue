<template>
    <div class="container">
    <navBar></navBar>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div id="upper_profile_div" class="parallax-container">
            <div class="parallax">
                <img id="background_pic" class="centered no_fit" v-bind:src="orga_data.cover_url">
            </div>
            <div class="absolute" id="profile_div">
                <div id="picture_div" class="absolute z-depth-5">
                    <img id="profile_pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="" class="square responsive-img centered" v-bind:src="orga_data.picture">
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
                            <input id="name" type="text" class="user_input disabled" disabled="disabled" v-model="orga_data.name">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s5">
                            <div class="field_header">Description</div>
                        </div>
                        <div class="col s6 editable">
                            <input id="description" type="text" class="user_input disabled"  disabled="disabled" v-model="orga_data.description">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s5">
                            <div class="field_header">Contact Email</div>
                        </div>
                        <div class="col s6 editable">
                            <input id="email" type="text" class="user_input disabled" disabled="disabled" v-model="orga_data.email">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s5">
                            <div class="field_header">Information</div>
                        </div>
                        <div class="col s6 editable">
                            <input id="info" type="text" class="user_input disabled" disabled="disabled" v-model="orga_data.info">
                        </div>
                    </div>
                     <div class="row">
                        <div class="col s5">
                            <div class="field_header">Balance (eth)</div>
                        </div>
                        <div class="col s6 editable">
                            <input id="name" type="text" class="user_input disabled" disabled="disabled" v-model="orga_data.balance">
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
                    </li>

                    <li>
                        <div class="collapsible-header">Proposals</div>
                        <div class="row collapsible-body">
                            <div class="profile_block z-depth-1 overflow">
                            <table ng-table="tableParams" show-filter="true" class="table bordered highlight" id="project">
                                <!-- ngInclude: templates.header -->
                                <tbody>
                                    <tr v-for="item in proposals">
                                    <div v-bind:id="'offer' + item.offer.address" class="offer" style="display: block;">
                                        <div class="col s8">
                                        <td>
                                            <span>The <a>{{item.offer.name}}</a> proposals is waiting for approval.</span> </br>
                                            <span><a>{{item.offer.owner}}</a> created this {{item.offer.contract_name}} on {{item.offer.creationDate}}</span></br>
                                            <span><a>{{item.offer.client}}</a> is the beneficiary</span>
                                        </td>
                                        </div>
                                        <div class="col s2">
                                            <td>
                                                <span class="badge blue">{{item.status}}</span>
                                             </td>
                                        </div>
                                        <div class="col s2">
                                        <td>
                                            <a type="submit" @click="acceptTheProposal(item)" class="waves-effect waves-light"><i class="medium material-icons">thumb_up</i></a>
                                            <a type="submit" @click="openTheProposal(item)" class="waves-effect waves-light"> <i v-bind:id="'zoom' + item.offer.address" class="medium material-icons">zoom_in</i></a>
                                           <!-- <button type="submit" @click="clickOrga(item)"><i class="medium material-icons">textsms</i></button> -->
                                        </td>
                                        </div>
                                    </div>
                                    <div v-bind:id="'proposal' + item.offer.address" class="proposal" style="display: none;">
                                       <div class="col s6">
                                            <td>
                                                <span>The <a>{{item.offer.name}}</a> proposals is waiting for approval.</span> </br>
                                                <span><a>{{item.offer.owner}}</a> created this {{item.offer.contract_name}} on {{item.offer.creationDate}}</span></br>
                                                <span><a>{{item.offer.client}}</a> is the beneficiary</span>
                                            </td>
                                        </div>
                                        <div class="col s1">
                                            <td>
                                                <span class="badge blue">{{item.status}}</span>
                                            </td>
                                        </div>
                                        <div class="col s2">
                                            <td>
                                                <span class="border-left border-right">Vote : {{item.votes_count}}</span>
                                            </td>
                                        </div>
                                        <div class="col s3">
                                            <td>
                                                <a type="submit" @click="voteForProposalTrue(item)" class="waves-effect waves-light"><i class="medium material-icons">thumb_up</i></a>
                                                <a type="submit" @click="voteForProposalFalse(item)" class="waves-effect waves-light"><i class="medium material-icons">thumb_down</i></a>
                                                <a type="submit" @click="openTheProposal(item)" class="waves-effect waves-light"> <i v-bind:id="'zoom' + item.offer.address" class="medium material-icons">zoom_in</i></a>
                                           <!-- <button type="submit" @click="clickOrga(item)"><i class="medium material-icons">textsms</i></button> -->
                                            </td>
                                        </div>
                                    </div>
                                     <div v-bind:id="'proposals_extend' + item.offer.address" class="proposals_extend" style="display:none;">
                                        <div class="col s12">
                                            <td>
                                                <span>Description : {{item.offer.description}}</span>
                                            </td>
                                        </div>
                                        <div class="col s2">
                                            <td>
                                                <i class="medium material-icons">receipt</i></br>
                                                <span>{{item.offer.type}}</span>
                                            </td>
                                        </div>
                                        <div class="col s4">
                                            <td>
                                                <i class="medium material-icons">query_builder</i></br>
                                                 <span>{{item.offer.duration}}</span>
                                            </td>
                                        </div>
                                        <div class="col s5">
                                            <td>
                                                <i class="medium material-icons">payment</i></br>
                                                <span>{{item.offer.initialWithdrawal}}</span></br>
                                                <span>(+ {item.offer.payoutFreezePeriod}}/month)</span>
                                            </td>
                                        </div>
                                        <div class="col s1">
                                            <td>
                                                <a type="submit" @click="removeTheProposal(item)" class="waves-effect waves-light"><i class="medium material-icons">report_problem</i></a></br>
                                                <span>Report</span>
                                             </td>
                                        </div>
                                    </div>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="collapsible-header">News</div>
                        <div class="collapsible-body">
                            <a type="submit" @click="createNews()" class="waves-effect waves-light" style="float: right;"><i class="medium material-icons">note_add</i></a>

                            <ul class="newUl">
                            <template v-for="item in news"> 
                                <li >
                                    <div class="row">
                                        <div class="col s12 m6">
                                            <div class="card blue-grey darken-1">
                                                <div class="card-content white-text">
                                                    <span class="card-title">{{item.title}}, write by {{item.writer}}</span>
                                                    <div class="card-action">
                                                    <div class="carousel" style="display:none">
                                                    </div>
                                                    <p>{{item.text}}</p>
                                                    <div v-bind:id="'pic_class' + item.createdAt" class="pic_class">
                                                    </div>
                                                </div>
                                                    <iframe width="420" height="315"
                                                        v-bind:src="item.yt_url">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                </template>
                            </ul>
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

    store: ['message', 'auth_data', 'client_secret', 'profil_data', 'fake', 'sessionId', 'txResult' , 'ip'],

    props: {
            orgaId : {
            required: true
        },
    },
     data: function() {
         return {
             donation: "",  
             orga_data: {
                 name: "Societhy",
                 description: "ONG",
                 image_view: null,
                 balance: 0.0,
                 info: "Societhy ça déchire",
                 cover_url: "http://maxcdn.thedesigninspiration.com/wp-content/uploads/2012/06/Facebook-Covers-040.jpg",
                 id : "",
                 picture:"",
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
                offer : {
                    _id: "594288c85f41e20072a592c9", 
                    actors: null, 
                    address: "0x10d3bd93b0ee842ceb3ff2d031126b5289b589ad", 
                    client: "0xfb17207145ef590aa198949845279cb9d508c522", 
                    contract_file: "/societhy/contracts/Offer.sol", 
                    contract_id: "594288c85f41e20072a592c9", 
                    contract_name: "Offer", 
                    contractor: "0x5d8d77e9933279d6896eba0c08a3ec658168fcdb", 
                    creationDate: 1497532611, 
                    dailyWithdrawalLimit: "0",
                    description: "Voila la proposal",
                    duration: 720,
                    hashOfTheProposalDocument: "dd302b8f706037e89655f2efd6b9d8e4", 
                    initialWithdrawal: "10000000000000000000", 
                    isRecurrent: false, 
                    is_deployed: true, 
                    name: "Try",
                    owner: "0x5d8d77e9933279d6896eba0c08a3ec658168fcdb", 
                    payoutFreezePeriod: 0, 
                    type: "service"
                }, 
                status: "pending"
            }],
             ready: false,
             lat: 'null',
             lng: 'null',
             projects: [{
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
             news : [
                {
                    createdAt: 1499697108031,
                    pictures: [{
                        id : "",
                        pic : "",
                    }],
                    text: "vzefazefzeafzaefzeafzaefazefazefazefazefazefazefaz", 
                    title: "Test", 
                    writer: "simon", 
                    yt_url: "https://www.youtube.com/watch?v=84u4DPkW8oc"
                }
            ],
            ytEmbed: "//www.youtube.com/embed/"
         }
     },

     components: {
         "searchsection": require('./search/search_section.vue'),
         "navBar" : require('./navBar.vue'),
     },

    watch: {
        ready: function (val) {
            this.ready = val;
            this.checkIfOfferIsProposals();
        },
        txResult: function (val) {
            console.log("c'est deja pas mal");
            var dataArrayget = {
                "id": this.orgaId,
                "password": "simon",
                "socketid": this.sessionId
            };
            if (val == 'NewMember') {
                this.getOrgaDocument(dataArrayget);
            } else if (val == 'MemberLeft') {
                this.getOrgaDocument(dataArrayget);
            } else if (val == 'DonationMade') {
                this.getOrgaDocument(dataArrayget);
            } else if (val == 'ProposalCreated') {
                dataArrayget = {
                    "id": this.orgaId,
                };
                this.refreshProposals(dataArrayget);
            }
        }
    },

    created() {
         var dataArrayget = {
             "id": this.orgaId,
             "password": "simon",
             "socketid": this.sessionId
         };
         this.getOrgaDocument(dataArrayget);
         this.news[0].picture = new Array();
         this.news[0].picture.push({"id" : "fzffzef", "pic":"efzfazefzaefzeafazefazefze"});
         console.log("petit test pour etre sur" + this.news[0].picture[0].pic)
         console.log("petit test pour etre sur 2" + this.news[1].picture[0].pic)
    },

     mounted() {
        console.log("pic class : " + document.getElementById('pic_class' + this.news[0].createdAt).value);
        console.log(this.orgaId);
        this.orga_data.id = this.orgaId;
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
         //this.getOrgaMemberList(dataArrayget2); 
     },

     updated() {
        this.ready = true;
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
                 "orga_id": this.orgaId,
                 "password": "simon",
                 "tag": "member",
                 "socketid": this.sessionId,
             };
             this.joinOrga(dataArrayJoin);
         },

        clickLeave() {
             var dataArrayLeave = {
                 "orga_id": this.orgaId,
                 "password": "simon",
                 "socketid": this.sessionId,
             };
             this.leaveOrga(dataArrayLeave);
         },

         clickDonation() {
                if (!isNaN(this.donation)) {
                        var dataArrayDonation = {
                        "orga_id": this.orgaId,
                        "password": "simon",
                        "donation": {"amount": this.donation},
                        "socketid": this.sessionId,
                        };
                        this.makeDonation(dataArrayDonation);
                }
        },

        disableJoinOrLeave(org) {
            if (org.orga.members.hasOwnProperty(this.auth_data.user.account) || org.orga.members.hasOwnProperty(this.auth_data.user.name)) {
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
          * @method joinOrga
          * ajax method for join the organisation
          * @param {Object} json object of information on the organisation
          * 'orga_id', 'password' of the Ethereum's wallet, 'tag', member by default
          */
         joinOrga(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/joinOrga';
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
                     this.$toastr('error', 'Error', 'Cannot join orga');
                 }.bind(this),
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
             var url = this.ip + '/leaveOrga';
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
                        this.$toastr('error', 'Error', 'Cannot leave orga');
                 }.bind(this),
                 cache: false
             });
         },

         get_news_photo(dataArray, x) {
            var url = this.ip + '/get_news_photo';

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
                 this.news[x].pictures = new Array();
                 var str = '';
                 for (var n in output) {
                    this.news[x].pictures.push({"id" : n, "pic": output[n]});
                    this.putPic(output[n], x);
                 }
                 console.log("voici str : " + str);

                 }.bind(this),
                 error: function(resultat, statut, erreur) {
                        alert(resultat);
                 },
                 cache: false
             });
         },


         putPic(str, x) {
            var oImg = document.createElement("img");
            oImg.setAttribute('src', str);
            document.getElementById('pic_class' + this.news[x].createdAt).appendChild(oImg);
            console.log("voici str : " + document.getElementById('pic_class' + this.news[x].createdAt).value);
         },

         /**
          * @method getOrgaDocument
          * Ajax for get the information about the organisation
          * @param {Object} json object of information on the organisation
          * '_id' or 'name'
          */
         getOrgaDocument(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/getOrganization';
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
                        this.orga_data.balance = output.orga.balance;
                        this.news = output.orga.news;
                        this.orga_data.picture = output.orga.picture;
                        var yt;
                        for (var x in output.orga.news) {
                            this.news[x] = output.orga.news[x];
                            yt = this.ytEmbed.concat(output.orga.news[x].yt_url);
                            console.log(yt);
                            this.news[x].yt_url = yt;
                            if(this.news[x].hasOwnProperty('img')) {
                                var data_news = {
                                    "orga_id": this.orgaId,
                                    "news_key": this.news[x].createdAt
                                };
                                this.get_news_photo(data_news, x);
                            }
                            //console.log(this.ytEmbed + this.yt_url);
                        }

                        this.disableJoinOrLeave(output);
                        var parsed = output.orga.members;
                        console.log("parsed : " + parsed);
                        var arr = [];
                        for(var x in parsed){
                                 arr.push(parsed[x]);
                        }
                        console.log("============ARRRRR==========");
                        console.log(arr);
                        this.users = arr;

                        var parsed2 = output.orga.proposals;
                        var arrProp = [];
                        for(var x in parsed2){
                                //parsed2[x].id = parsed2[x].id;
                            arrProp.push(parsed2[x]);
                        }
                        console.log("voici Prop Array");
                        console.log(arrProp);
                        this.proposals = arrProp;

                        parsed2 = output.orga.projects;
                        arrProp = [];
                        for (var x in parsed2) {
                            arrProp.push(parsed2[x]);
                        }
                        this.projects = arrProp;
                        console.log("Project");
                        console.log(arrProp);


                 }.bind(this),
                 error: function(resultat, statut, erreur) {
                        alert(resultat);
                 },
                 cache: false
             });
         },

         checkIfOfferIsProposals(){
            for (var x in this.proposals) {
                console.log(this.proposals[x].hasOwnProperty("proposal_id"));
                if (this.proposals[x].hasOwnProperty("proposal_id")) {
                    document.getElementById('offer' + this.proposals[x].offer.address).style.display = 'none';
                    document.getElementById('proposal' + this.proposals[x].offer.address).style.display = 'block';
                } else {
                    document.getElementById('offer' + this.proposals[x].offer.address).style.display = 'block';
                    document.getElementById('proposal' + this.proposals[x].offer.address).style.display = 'none';
                }
            }
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
          * @method makeDonation
          * Ajax to do a donation for a organisation
          * @param {Object} json object of information on the organisation
          */
         makeDonation(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/makeDonation';
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

         /**
          * @method getOrgaMemberList
          * Ajax for fget the member list of the organisation
          * @param {Object} json object of information on the organisation
          * '_id' of the organisation
          */
         getOrgaMemberList(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/getOrgaMemberList/' + dataArray.orga_id;
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
                 }.bind(this),
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },



           /**
          * @method voteForProposal
          * ajax method for vote for proposal
          * @param {Object} json object of information on the organisation
          * 'password', 'socketid', 'orga_id', 'proposal_id', 'vote'
          */
         voteForProposal(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/voteForProposal';
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
                    this.$toastr('error', 'Error', 'Cannot vote');
                 }.bind(this),
                 cache: false
             });
         },



           /**
          * @method createProposal
          * ajax method to create a proposal from a offer
          * @param {Object} json object of information on the organisation
          * 'password', 'socketid', 'orga_id', 'offer'
          */
         createProposal(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/createProposal';
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
                    this.$toastr('error', 'Error', 'Cannot create the proposal');
                 }.bind(this),
                 cache: false
             });
         },


        /**
          * @method cancelOffer
          * ajax method to cancel an offer
          * @param {Object} json object of information on the organisation
          * 'password', 'socketid', 'orga_id', 'offer_id'
          */
         cancelOffer(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/cancelOffer';
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
                    this.$toastr('error', 'Error', 'Cannot cancel the offer');
                 }.bind(this),
                 cache: false
             });
         },

         /**
          * @method voteForProposal
          * Ajax to refresh the proposals list
          * @param {Object} json object of information on the organisation
          * 'password', 'socketid', 'orga_id', 'proposal_id', 'vote'
          */
         voteForProposal(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/voteForProposal';
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
                    this.$toastr('error', 'Error', 'Cannot vote for the proposals')
                 }.bind(this),
                 cache: false
             });
         },


         /**
          * @method refreshProposals
          * Ajax to refresh the proposals list
          * @param {Object} json object of information on the organisation
          * '_id' of the organisation
          */
         refreshProposals(dataArray) {
             console.log(dataArray);
             var url = this.ip + '/refreshProposals/' + dataArray.id;
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
                
                 }.bind(this),
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },

         acceptTheProposal(item) {
            alert("accept");
            var dataArray =  {
                "orga_id": this.orgaId,
                "password": "simon",
                "offer": item.offer.address,
                "socketid": this.auth_data.user._id,
            }
            this.createProposal(dataArray);

         },

         removeTheProposal(item) {
            var dataArray =  {
                "password": "simon",
                "socketid": this.auth_data.user._id,
                "orga_id": this.orgaId,
                "offer_id": item.offer.address,
            }
            //this.cancelOffer(dataArray);
         },

         voteForProposalTrue(item) {
            var dataArray =  {
                "orga_id": this.orgaId,
                "password": "simon",
                "proposal_id": item.proposal_id,
                "socketid": this.auth_data.user._id,
                "vote": true,
            }
            this.voteForProposal(dataArray);
         },

         voteForProposalFalse(item) {
            var dataArray =  {
                "orga_id": this.orgaId,
                "password": "simon",
                "proposal_id": item.proposal_id,
                "socketid": this.auth_data.user._id,
                "vote": false,
            }
            this.voteForProposal(dataArray);
         },

         openTheProposal(item) {
            var e = document.getElementById('proposals_extend' + item.offer.address);
            (e.style.display == 'block') ? e.style.display = 'none' : e.style.display = 'block';
            (e.style.display == 'block') ? document.getElementById("zoom" + item.offer.address).innerHTML = "zoom_out" : document.getElementById("zoom" + item.offer.address).innerHTML = "zoom_in";
         },

         wait(ms){
            var start = new Date().getTime();
            var end = start;
            while(end < start + ms) {
                end = new Date().getTime();
            }
        },

        createNews() {
            console.log("whhhhatt");
            this.$router.push({ name: 'createNews', params: { orgaId : this.orgaId }});
        },

        getId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                 return match[2];
            } else {
                return 'error';
            }
        }
     }
}
</script>