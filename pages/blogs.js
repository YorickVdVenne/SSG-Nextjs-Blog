import dynamic from 'next/dynamic'
import { initializeApollo } from '../src/lib/apolloClient'
import { ALL_POSTS_QUERY } from '../src/graphql/all_posts'

const Navbar = dynamic(() => import('../src/components/Navbar'))
const AllBlogs = dynamic(() => import('../src/containers/AllBlogs'))
const Footer = dynamic(() => import('../src/components/Footer'))

export default function Blogs() {
  
  return (
    <>
    <Navbar />
    <AllBlogs />
    <Footer />
  </>
  )
}

export async function getStaticProps(ctx) {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}