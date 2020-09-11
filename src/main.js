import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBB4RAJTWP0LwYH4STWJaoGkWt4lz4Yk6k",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
