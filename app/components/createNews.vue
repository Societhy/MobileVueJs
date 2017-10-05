<template>
    <div class="container">
    <navBar></navBar>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div class="row center-align">
            <h2 class="blue-text col s12">Societhy</h2>
            <h4 class="blue-text col s12 flow-text">Publish News</h4>
        </div>

        <form id="news_forms" class="col s12 center-align">
            <div class="row">
                <div class="input-field col s10 offset-s1">
                    <input id="title" name="title" type="text" class="validate" v-model="title">
                    <label for="title" class="left-align">Title</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s10 offset-s1">
                    <textarea v-model="text" placeholder="Enter the text of the news"></textarea>
                </div>
            </div>
             <div class="row">
                <div class="input-field col s10 offset-s1">
                    <input id="yt_link" name="yt_link" type="text" class="validate" v-model="yt_url">
                    <label for="yt_link" class="left-align">Youtube Link</label>
                </div>
            </div>
            <div class="row">
                <a @click="submitForm" class="waves-effect waves-light btn">
                    Publish the new
                </a>
                <!-- <a @click.prevent="submitForm" class="waves-effect waves-light btn">Sign In</a> -->
            </div>
        </form>
    </div>
</template>

<script type="text/babel">
export default {
    name: 'createNews',

    store: ['message', 'auth_data', 'client_secret', 'socket', 'ip'],

    props: {
            orgaId : {
            required: true
        },
    },

    components: {
         "searchsection": require('./search/search_section.vue'),
         "navBar" : require('./navBar.vue'),
     },

    mounted() {
    },

    data: function() {
        return {
            title: "",
            text : "",
            yt_url: "",
            hasError: false,
        }
    },

    methods: {
        /**
         * Method for the createNews
         * @class createNews
         */

        /**
         * @method submitForm
         * submit for the createNews
         */
        submitForm() {
            this.publish_news();
            //this.nextPage();
        },

        /**
         * @method publish_news
         * Call ajax for the publish_news
         */
        publish_news() {
            var dataArray = {
                'orga_id' : this.orgaId,
                'title' : this.title,
                'text' : this.text
            };
            if (this.yt_url != '') {
                dataArray.yt_url = this.yt_url;
            }
            var url = this.ip + '/publish_news';
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
                    this.$router.push({ name: 'orgaProfil', params: { orgaId : this.orgaId }});
                 }.bind(this),
                 error: function(resultat, statut, erreur) {
                        alert(resultat);
                 },
                 cache: false
             });
         },
    }
}
</script>
