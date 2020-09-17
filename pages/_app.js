import '../styles/bootstrap.css'
import '../styles/fontawesome-all.css'
import '../styles/styles.css'

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../src/lib/apolloClient'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    )

}

export default MyApp
