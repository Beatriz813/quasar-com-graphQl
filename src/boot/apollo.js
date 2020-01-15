import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  // uri: 'https://graphql-camara-deputados.herokuapp.com/'
  uri: 'http://18637060.ngrok.io/api/graphql',
  headers: {
    contentType: 'application/json'
  }
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)

export default apolloProvider
