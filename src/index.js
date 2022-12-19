import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  //uri: "https://nex-liftoff-render-1.onrender.com",
  //uri: "https://apollosvr.duckdns.org",
  uri: "https://liftoff-svr-ts.onrender.com",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
