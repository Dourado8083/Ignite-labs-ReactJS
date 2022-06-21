import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
 uri:'https://api-sa-east-1.graphcms.com/v2/cl4oea5pw1z4501xmfgdn48tb/master',
 cache:new InMemoryCache() //faz o cache na memoria, podemos usar localstorage.   
})