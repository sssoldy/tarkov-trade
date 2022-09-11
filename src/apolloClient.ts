import {InMemoryCache, ApolloClient} from '@apollo/client'
import {offsetLimitPagination} from '@apollo/client/utilities'

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        items: {
          ...offsetLimitPagination(['name']),
        },
      },
    },
    Item: {
      fields: {
        sellFor: {
          read(sellFor) {
            return [...sellFor].sort((a, b) => b.priceRUB - a.priceRUB)
          },
        },
        buyFor: {
          read(buyFor) {
            return [...buyFor].sort((a, b) => a.priceRUB - b.priceRUB)
          },
        },
      },
    },
  },
})

export const client = new ApolloClient({
  uri: 'https://api.tarkov.dev/graphql',
  cache,
})
