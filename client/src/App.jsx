import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import DisplayData from './components/DisplayData'

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
  })
  return (
    <ApolloProvider client={client}>
      <nav>
        <h1 className='text-xl'>GraphQL 🚀 ( Pedro-Tech )</h1>
      </nav>

      <DisplayData />
    </ApolloProvider>
  )
}

export default App
