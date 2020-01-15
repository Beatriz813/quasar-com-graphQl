# Quasar App (usando-graphql)

A Quasar Framework app

## Tecnologias
- Quasar Framework
- vue-apollo
- apollo-boost
- graphql

## Instalando Apollo Cliente

``` bash
npm install --save vue-apollo graphql apollo-boost
```

ou

``` bash
yarn add vue-apollo graphql apollo-boost
```

## Criando Plugin Apollo

Criar um arquivo apollo.js na pasta boot com o seguinte código:

```js
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'https://graphql-camara-deputados.herokuapp.com/'
  headers: {
    contentType: 'application/json'
  }
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)

export default apolloProvider
```

Na página index.vue criar o seguinte código:

```js
import gql from 'graphql-tag'
import apolloProvider from '../boot/apollo.js'
export default {
  apolloProvider,
  data() {
    return {
      deputados: ''
    }
  },
  apollo: {
    deputados: gql`{
      deputados (first: 50) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            siglaPartido
            urlFoto
          }
        }
      }
    }`
}

```

E então usar a variável deputados

```vue
  <template>
    <q-page class="flex flex-center">
      {{ deputados }}
    </q-page>
  </template>
```

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
