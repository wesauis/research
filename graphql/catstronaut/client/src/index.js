import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
