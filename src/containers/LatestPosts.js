import { useQuery } from '@apollo/client'
import Link from "next/link";
import { LATEST_POSTS_QUERY } from '../graphql/latest_posts'
import { DateTime } from 'luxon'

export default function LatestPosts() {
  const { data } = useQuery(LATEST_POSTS_QUERY)
  return (
    <>
    <div id="blogs" className="cards-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">BLOGS</div>
              <h2>See here the most<br/> Recent Blogs</h2>
            </div> 
          </div>
        <div className="row">
          <div className="col-lg-12">
            {data.nodeQuery.entities.map((blog, index) => (
              <Link key={index} href="/blog/[nid]" as={`/blog/${blog.entityId}`}>
              <a>
                <div className="card mr-3" blog-subject={blog.fieldBlogSubject[0].entity.entityLabel}>
                  <div className="card-image">
                    <img src={blog.fieldBlogImage[0].url} className="img-fluid" alt=""/>
                  </div>
                  <div className="card-div pt-3">
                      <h3 className="card-title pb-3">{blog.entityLabel}</h3>
                      <p className="card-text pt-2 text-center"><small className="text-muted">{DateTime.fromISO(blog.entityCreated).toFormat('dd LLL yyyy')}</small></p>
                  </div>
                </div>
              </a>
            </Link>
            ))}
            <div className="text-center">
              <Link href="/blogs?page=1">
                <a className="more-blogs-btn">SEE MORE</a>
              </Link>
            </div>
          </div> 
        </div> 
      </div> 
    </div>
    </>
  )
}