import { useQuery } from '@apollo/client'
import { initializeApollo } from '../../src/lib/apolloClient'
import { BLOG_QUERY } from '../../src/graphql/single_post'
import { BLOG_IDS_QUERY } from '../../src/graphql/ids_posts'
import dynamic from 'next/dynamic'
import Link from "next/link";
import { DateTime } from 'luxon'

const Navbar = dynamic(() => import('../../src/components/Navbar'))
const Footer = dynamic(() => import('../../src/components/Footer'))

export default function Blog( props ) {
  const { data } = useQuery(
    BLOG_QUERY,
    {
      variables: props.variables
    })
    return (
      <>
      <Navbar />
  
      <div className="container pt-3 pb-3">
        <Link href="/blogs?page=1">
          <a className="btn btn-warning">Back to Blogs</a>
        </Link>
        <h1 className="text-center pt-3">{data.nodeQuery.entities[0].entityLabel}</h1>

        <div className="text-center">
          <img src={data.nodeQuery.entities[0].fieldBlogImage[0].url} className="img-fluid" alt=""/>
        </div>
        <p className="pt-3">{data.nodeQuery.entities[0].body.value}</p>
        <p><small>Posted on: {DateTime.fromISO(data.nodeQuery.entities[0].entityCreated).toFormat('dd LLL yyyy')}</small></p>
      </div>

      <Footer />
    </>
    )
}

export async function getStaticProps(ctx) {
  const apolloClient = initializeApollo()
  const blogQueryVars = {
    id: ctx.params.nid
  }
  await apolloClient.query({
    query: BLOG_QUERY,
    variables: blogQueryVars
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables: blogQueryVars,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const result = await apolloClient.query({
    query: BLOG_IDS_QUERY,
  })

    const paths = result.data.nodeQuery.entities.map((blog) => ({
      params: { nid: blog.entityId}
    }))

    return {paths, fallback:false}
}