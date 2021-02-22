import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.DATO_API_KEY}`,
  },
})

export default client
