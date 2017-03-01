<style scoped>
.search_input {
    width: 100%;
    height: 100%;
    float: left;
}

.search_section {
    text-align: left;
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding: 0px 12px;
    visibility: inherit;
    background-image: linear-gradient(to right bottom, #ebedee, #fdfbfb);
    bottom: 0px;
}

#select_input {
    height: 100%;
    margin-top: 0px;
    margin-left: 8px;
    position: absolute;
}

.delete_button {
    right: 0px;
    width: 25px;
    height: 30px;
    font-size: 1.25rem;
    margin-top: 10px;
    visibility: inherit;
    float: right;
    position: absolute;
}

.selected_results {
    margin-top: 0px;
    margin-bottom: 0px;
    display: inline;
    height: 100%;
}

.select_avatar {
    height: 35px;
    width: 35px;
    object-fit: cover;
}

.selected_results li {
    display: table-cell;
    padding: 4px 2px;
}

.selected_item {
    background: white;
    border-radius: 13px;
    padding: 1px 5px;
}

#search_result_input {
    left: 45px;
    height: 100%;
    width: 100%;
    position: absolute;
    padding: 2px 4px;
}

#search_button {
    padding: 6px 4px;
    height: 100%;
    position: absolute;
}
.rainbow_blue_text {
  background-image: linear-gradient(to right bottom, #84fab0, #8fd3f4);
  color: transparent;
  -webkit-background-clip: text;
}

</style>

<template id="searchbar_template">
    <div class="search_section">
        <div class="search_input">
            <a id="search_button" v-on:click="$emit('submit')"><i class="fa fa-search rainbow_blue_text"></i></a>
            <div id="search_result_input">
                <input id="select_input" class="no_margin float" placeholder="Rechercher ..." v-model="iinput" v-on:input="$emit('input', iinput)"/>                        
            </div>
        </div>
        <a v-if="iinput !== ''" class="visible delete_button" v-on:click="handleClick()"><i class="fa fa-times"></i></a>
    </div>
</template>


<script type="text/babel">

    export default {

        name: 'searchbar_template',     

        template: "#searchbar",

        props: ['input'],

        data: function () {
            return {
                iinput: "",
           }
        },

        watch: {
            input() {
                this.iinput = this.input
            },
        },

        methods: {
            handleClick () {
                console.log('inside handle click')
                if (this.iinput.length != 0)
                    this.$emit('input', '')
            },
        }
    }

</script>
