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
              <div key={index} className="card">
                <div className="card-image">
                  <img src={blog.fieldBlogImage[0].url} className="img-fluid" alt=""/>
                </div>
                <div className="card-div pt-3">
                    <h3 className="card-title pb-3">{blog.entityLabel}</h3>
                    <div className="button-container pt-3">
                      <Link href={`/blog/${blog.entityId}`}>
                        <a className="btn-solid-reg page-scroll">Read More</a>
                      </Link>
                    </div> 
            <p className="card-text pt-2 text-center"><small className="text-muted">Posted on {DateTime.fromISO(blog.entityCreated).toFormat('dd LLL yyyy')}</small></p>
                </div>
              </div>
            ))}
            <div className="text-center">
              <Link href="/blogs?page=1">
                <a className="more-blogs-btn">Check out more Blogs</a>
              </Link>
            </div>
          </div> 
        </div> 
      </div> 
    </div>
    </>
  )
}