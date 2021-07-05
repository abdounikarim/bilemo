/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import 'bootstrap';
import '../css/app.css';
import Vue from 'vue';
import App from './App.vue';
import router from "./router";

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
