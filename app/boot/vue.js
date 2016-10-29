import Vue from 'vue'


// Vue Plugins
import Http from 'vue-resource'
import Router from 'vue-router'
import Store from 'vue-stash'
import Events from 'vue-events'
import Validator from 'vue-validator'

[Http, Router, Store, Events].forEach(Plugin => Vue.use(Plugin))

export { Vue, Router, Validator }