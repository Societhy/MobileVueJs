<template>
    <div id="app" :class="routeClass">
    <head>
        <link rel="stylesheet" src="../../assets/scss/jquery.toast.css">
    </head>
        <router-view></router-view>
    </div>
</template>


<script type="text/babel">
    export default {
        name: 'app',

        store: ['message'],

        events: {
            testEvent(message) {
                this.message = message
            },

            testTwo(message) {
                this.message = message
            }
        },

        computed: {
            routeClass() {
                return this.$route.path.split('/').filter(part => Boolean(part)).join('-')
            }

        },
    }
</script>
