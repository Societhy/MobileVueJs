<template>
<div class="content" style="height:100%;">
            <div class="row" style="height:100%;">
                <navBar></navBar>
    			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <div id="site-layout-example-left" class="col s3"  style="height:100%;">
                    <div class="row">
                    <h3><font color="white">Contact list</font></h3>
                 	<ul id="nav1" class="collection overflow">
    					<li class="collection-item avatar contact" v-for="item in contacts" @click="startConv(item)">
      						<i class="material-icons circle">perm_identity</i>
      							<span class="name">{{item.firstname}}</span>
     								<p>{{item.lastname}}</p>
      							<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    					</li>
  					</ul>
  					</div>
            
                </div>
                <div id="site-layout-example-right" class="col s9" style="height:100%;">
            <ul id="nav2"class="conversation_ul collection overflow">
    					<li class="collection-item custom avatar" v-for="item in conversation">
    						<div class="conversation">
      							<i class="material-icons circle">perm_identity</i>
      							<p>{{item.date}}  ---  {{item.firstname}} {{item.lastname}}<br>{{item.message}}</p>
      						</div>
    					</li>
  					</ul>
               	</div>
               	 <div class="row">
               			 <div class="input-field col s7 offset-s3">
                    		<label for="text" class="left-align">Text</label>
                        <input class="text" id="text" name="text" type="text" v-model="text">
                		</div>
                    <div class="col s7 offset-s3">
                      <a @click="submitText" class="waves-effect waves-light btn">
                         Send
                      </a>
                    </div>
                <!-- <a @click.prevent="submitForm" class="waves-effect waves-light btn">Sign In</a> -->
                 </div>
            	</div>
</div>
</template>

<script type="text/babel">
export default {
    name: 'chat',

    store: ['message', 'auth_data', 'client_secret', 'socket', 'ip'],

    components: {
         "searchsection": require('./search/search_section.vue'),
         "navBar" : require('./navBar.vue'),
        },

    data: function () {
            return {
                text: "",
                conversation: [{
                	 _id: "",
                    firstname: "Arthur",
                    lastname: "ngo",
                    message: "Je sais ce que tu va faire",                    
                },
                {
                	_id: "",
                    firstname: "Grout",
                    lastname : "el pollo locos",
                    message: "ah bon ? je vais faire quoi ?",            
                },
                {
                	_id: "",
                    firstname: "Arthur",
                    lastname: "ngo",
                    message: "tu va pt Grout et la sm va exploser !",            
                },
                {
                	_id: "",
                    firstname: "Grout",
                    lastname : "el pollo locos",
                    message: "c'est pas faux.",                    
                }],
                contacts:[{
                  firstname: "Aurelien", 
                  id: "595cf7f0f1c1e300691d1160",
                  lastname: "Giudici"
                },
              ],
              select_contact: {
                  firstname: "Aurelien", 
                  id: "", 
                  lastname: "Giudici"
                }
           	}
        },

    mounted() {
      $('.conversation_ul').hide();
    	this.contacts = this.auth_data.user.contact_list;
      this.conversation = [];
    },

    sockets:{
      last_messages: function(data) {
        console.log("last_messages on");
        //this.receiveMessages(data);
      },
      send_message: function(data) {
        console.log("send_message on")
        this.receiveMessage(data);
      }
    },
      

    methods: {
        /**
         * Method for the chat
         * @class chat
         */
         submitText() {
          if (this.select_contact.id == "") {
            this.$toastr('error', 'Please select a contact !', 'Error');
            return;
          }
          if (this.text != '') {
            var newMessage = {
              'date' : new Date(),
              'content' : this.text,
              'idUser' : this.auth_data.user._id,
              'idOther' : this.select_contact.id,
              'avatar' : '',
              'files' : null,
            }
            this.$socket.emit('send_message', newMessage);
            this.pushMessage(newMessage);
            this.text = '';
          }
         },

         receiveMessage(data) {
          var newMessage = {
            'data' : data.date,
            'content': data.data,
            "idUser" : data.send_address,
            'idOther': data.recip_address,
            'avatar' : data.avatar
          }
          this.pushMessage(newMessage);
         },

         receiveMessages(data) {
          var messages = [];
          var msg;
          for (var message in data) {
            msg = {
              date : data.date,
              firstname : this.select_contact.firstname,
              lastname : this.select_contact.lastname,
              message : data.content,
            }
            messages.push(msg);
          }
          this.conversation = messages;
         },

         startConv(data){
          this.select_contact = data,

          console.log("WEEEEEEEEE");
          $('.contact').addClass("active");
          $('.conversation_ul').toggle();
          this.$socket.emit('join', {'name': this.auth_data.user.name,
            'id': this.auth_data.user._id,
            'otherId': this.select_contact.id});
         },

         pushMessage(data) {
            var message = {
              date : data.date,
              firstname : this.select_contact.firstname,
              lastname : this.select_contact.lastname,
              message : data.content,
            }
            if (data.idUser == this.auth_data.user._id) {
              message.firstname = this.auth_data.user.firstname;
              message.lastname = this.auth_data.user.lastname;
            }
            this.conversation.push(message);
         }

	}
}
</script>