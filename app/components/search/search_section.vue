<style scoped>

#core_search_results {
  width: 100%;
  visibility: inherit;
  position: relative;
}
.bottom_search_section {
  height: 38px;
  width: 100%;
  bottom: 48px;
  z-index: 200;
}

</style>

<template id="searchsection_component">
	<div>
        <div class="bottom_search_section">
            <searchbar
                v-on:input="onSelectInput"
                    :input="input">
            </searchbar>
        </div>
        <div id="core_search_results">  
            <searchresults v-on:openItem="fetch"
                           :input="input"
                           :contacts="contacts">
            </searchresults>
        </div>
    </div>
</template>


<script type="text/babel">

    export default {

        name: 'searchsection',     

        template: "#searchsection_component",

        props: ['contacts'],

        store: [
	        'validator',
            'text',
        ],

        data: function () {
            return {
                searchbar: false,
                input: '',
           }
        },

        components: {
            "searchresults": require('./search_results.vue'),
            "searchbar": require('./search_bar.vue'),
        },	

        watch: {
        },

        mounted() {
       	},

        methods: {

        	emptyItem() {
        	},

            selectItemResult() {

            },

            fetch(item) {
                this.$emit('fetch', item)
            },

            onSelectInput(input) {
                this.input = input
                // if (input != '') {
                        
                //     console.log(dataArray);
                //     var url = 'http://localhost:4242/getOrgaMemberList/' + this.auth_data.token.replace('|', '.') + '/' + dataArray.id;
                //     console.log(url);
                //     var authorizationToken = this.auth_data.token;
                //     var xhr = $.ajax({
                //     url: url,
                //     dataType : "json",
                //     type: 'GET',
                //     contentType: "application/json; charset=utf-8",
                //     xhrFields: { withCredentials: true },
                //     crossDomain: true,
                //     data: JSON.stringify(dataArray),
                //     beforeSend: function(request) {
                //         request.setRequestHeader("Authentification", authorizationToken);
                //     },
                //         success: function(output, status, xhr) {
                //     },
                //         error : function(resultat, statut, erreur){

                //     },
                //         cache: false
                //     });
                // }
                // else {
                //     this.contacts = []
                // }
            },
		},
    }

</script>