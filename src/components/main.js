import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

import Dashboard from './dashboard/Dashboard.smart'
import Tasks from './tasks/Tasks.smart'

Vue.use(VueResource)
Vue.use(VueRouter)

// ---------------------------------
// router
// ---------------------------------

let router = new VueRouter({
    hashbang: false,
    history: true,
    linkActiveClass: 'active-class'
})

// router: map

router.map({
    '/dashboard': {
        component: Dashboard
    },
    'tasks': {
        component: Tasks
    }
})

// router: redirects

router.redirect({
    '*': '/dashboard'
})

// router: bootstrap ( default to the App component )

router.start({
    components: { App }
}, 'body')
