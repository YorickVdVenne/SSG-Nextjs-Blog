import dynamic from 'next/dynamic'
import { initializeApollo } from '../src/lib/apolloClient'
import { LATEST_POSTS_QUERY } from '../src/graphql/latest_posts'

const Navbar = dynamic(() => import('../src/components/Navbar'))
const Header = dynamic(() => import('../src/components/Header'))
const Footer = dynamic(() => import('../src/components/Footer'))
const About = dynamic(() => import('../src/containers/About'))
const LatestPosts = dynamic(() => import('../src/containers/LatestPosts'))

export default function Home() {

  return (
  <>
  <div data-spy="scroll" data-target=".fixed-top">
    <Navbar />
    <Header />
    <LatestPosts />  
    <About />   
    <Footer />
  </div> 
  </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: LATEST_POSTS_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}