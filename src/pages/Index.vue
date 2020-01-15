<template>
  <q-page class="flex flex-center">
    <!-- {{ deputados }} -->
    {{ produtos }}
  </q-page>
</template>

<script>
import gql from 'graphql-tag'
import apolloProvider from '../boot/apollo.js'
export default {
  name: 'PageIndex',
  apolloProvider,
  data () {
    return {
      deputados: '',
      produtos: ''
    }
  },
  apollo: {
    // deputados: gql`{
    //   deputados (first: 50) {
    //     pageInfo {
    //       endCursor
    //       hasNextPage
    //     }
    //     edges {
    //       cursor
    //       node {
    //         id
    //         siglaPartido
    //         urlFoto
    //       }
    //     }
    //   }
    // }`
    produtos: gql`{
      produtos{
        codigoBarras
        nome
        preco
      }
    }`
  },
  watch: {
    deputados: (valor) => {
      console.log('deputados => ', valor)
    }
  },
  mounted () {
    console.log(this.$apollo.provider.defaultClient)
  }
}
</script>
