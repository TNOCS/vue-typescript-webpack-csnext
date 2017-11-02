import Vue from 'vue';
import { AppState, csapp } from '@csnext/cs-client';
import Vuetify from "vuetify";

import "./../node_modules/vuetify/dist/vuetify.css";

Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(csapp)
});

let intro = Vue.component('intro', {
  template: '<h1 class="maintitle">this is an introduction widget</h1>'
});

let about = Vue.component('about', {
  template: '<h1 class="maintitle">this is an about widget</h1>'
});


let app = AppState.Instance;
app.project = {
  title: "csnext demo",
  navigation: {
    style: "top"
  },
  dataSources: {    
  },
  leftSidebar: {
    open: false,    
    clipped: true
  },
  theme: {
    dark: false,
    primary: "blue"
  },
  dashboards: [
    {
      path: "/",
      manager: "single",
      title: "Intro",
      widgets: [ { component: intro} ]
    },
    {
      path: "/about",
      manager: "grid",
      title: "About",
      widgets: [ { component: about} ]
    }
    
  ]
};

app.Init();