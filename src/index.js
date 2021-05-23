import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';


const client = new ApolloClient({
  uri: 'https://260v9s5l.api.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache()
});



ReactDOM.render(
  <React.StrictMode>
     <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

