<template>
    <div id="app" :class="routeClass">
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

        components: {
            'navbar': require('./nav/navbar.vue')
        }
    }
</script>
