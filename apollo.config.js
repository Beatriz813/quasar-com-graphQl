module.exports = {
  client: {
    service: {
      name: 'Quasar App',
      // URL to the GraphQL API
      url: 'http://localhost:3000/graphql'
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js'
    ]
  }
}
