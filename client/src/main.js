import Vue from 'vue';
import App from './App.vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import router from './router';

Vue.config.productionTip = false;

const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');

