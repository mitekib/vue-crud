
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import VueAxios from 'vue-axios';

import axios from 'axios';

Vue.use(VueAxios, axios);


import App from './components/App.vue';

import CreateEmployee from './components/CreateEmployee.vue';
import DisplayEmployee from './components/DisplayEmployee.vue';
import EditEmployee from './components/EditEmployee.vue';

const routes = [
  {
    name: 'CreateEmployee',
    path: '/employees/create',
    component: CreateEmployee
  },
  {
        name: 'DisplayEmployee',
        path: '/',
        component: DisplayEmployee
  },
  {
      name: 'EditEmployee',
      path: '/edit/:id',
      component: EditEmployee
   }
];

// create a router object, set mode to history to remove the # sign on routes

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');


