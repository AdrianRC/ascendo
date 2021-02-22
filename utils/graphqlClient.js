import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer c8048cadee1347391eeb089ffbd873`,
  },
})

export default client
