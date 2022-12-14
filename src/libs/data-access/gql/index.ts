import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: 'https://dex-server.herokuapp.com/',
	cache: new InMemoryCache(),
})

export default client
