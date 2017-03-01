<style scoped>
.select_button {
    right: 0px;
  width: 25px;
  height: 30px;
  font-size: 1.25rem;
  margin-top: 10px;
    visibility: inherit;
    float: right;
}

.select_avatar {
    height: 35px;
    width: 35px;
    object-fit: cover;
}

.search_results {
    width: 100%;
    position: absolute;
    bottom: 45px;
    padding: 4px;
}

.semi_airpop_section {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 3px;
    visibility: inherit;
}
.contact_list {
    margin: 0px;
}

.contact_list li {
  position: relative;
  float: left;
}
.airpop_item {
  height: 100%;
  width: 100%;
  position: absolute;
}
.item_size {
    height: 56px;
    width: 56px;
    font-size: 12px;
}

.notif_name_contacts {
  position: absolute;
  text-align: center;
  height: 15px;
  width: 100%;
  bottom: 0%;
  z-index: 100;
  overflow: hidden;
}

.notif_image_contacts {
  position: absolute;
  height: 70%;
  width: 70%;
  margin-left: 15%;
  margin-top: 7%;
}

.notif_image_contacts img {
  height: 100%;
  width: 100%;
}


</style>

<template id="searchresults_template">
    <div v-if="input !== ''" id="result_list" class="">
        <ul class="contact_list semi_airpop_section">
            <li v-for="item in contacts" class="item_size">
                <div class="airpop_item" v-on:click="$emit('openItem', item)">
                    <div class="notif_image_contacts">
                            <img v-if="item.url !== null" class="circle" v-bind:src="item.url" alt="">
                            <img v-else class="circle" src="https://adrianinitiative.files.wordpress.com/2015/11/event-3.jpg" alt="">
                    </div>
                    <div class="notif_name_contacts">
                        {{ item.name }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="text/babel">

    export default {

        name: 'searchresults_template',     

        template: "#searchresults",

        props: ['contacts', 'input'],

        data: function () {
            return {

           }
        },

        methods: {
        },
    }

</script>
