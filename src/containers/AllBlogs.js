import Link from "next/link";
import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { ALL_POSTS_QUERY } from '../graphql/all_posts'
import { scrollToTop } from '../functions/scrollToTop'
import { useRouter } from 'next/router'
import { DateTime } from 'luxon'

export default function AllBlogs() {
  const router = useRouter()
  const { data } = useQuery(ALL_POSTS_QUERY)
  const blogsPerPage = 12
  const [filteredBlog, setFilteredBlog] = React.useState(data.nodeQuery.entities);
  const [activeFilter, setActiveFilter] = React.useState("");
  const [activePage, setActivePage] = React.useState(0);
  const totalPages = Math.ceil(filteredBlog.length / blogsPerPage)
  const paginatedBlogs = filteredBlog.slice(activePage * blogsPerPage, activePage * blogsPerPage + blogsPerPage)

  useEffect(() => {
    onLoadFilter()
    onLoadPagination()
  }, [router])

  function onLoadFilter() {
    const subjects = data.taxonomyTermQuery.entities.map(subject => subject.entityLabel)
    const urlSubject = router.query.subject;

    if(subjects.includes(urlSubject)){ 
      const filteredProps = data.nodeQuery.entities.filter(blog => blog.fieldBlogSubject[0].entity.entityLabel === urlSubject)
      setActivePage(0)
      setFilteredBlog(filteredProps)
      setActiveFilter(urlSubject)
    } else {
      setActiveFilter("")
      setFilteredBlog(data.nodeQuery.entities)
    }
  }

  function onLoadPagination() {
    const urlPage = router.query.page;
    if(Number(urlPage) <= totalPages) {
      setActivePage(Number(urlPage - 1))
    } else if(Number(urlPage) > totalPages) {
      setActivePage(0)
      router.push(`/blogs?subject=&page=1`)
    } else {
      setActivePage(0)
    }
  }
  
  function filterHandler(e) {
      const inputSubject = e.target.value
      const filteredProps = data.nodeQuery.entities.filter(blog => blog.fieldBlogSubject[0].entity.entityLabel === inputSubject)
      setFilteredBlog(filteredProps)
      setActiveFilter(inputSubject)
      setActivePage(0)
      router.push(`/blogs?subject=${inputSubject}&page=1`)
  }
  function filterResetHandler() {
      setActiveFilter("")
      setActivePage(0)
      router.push('/blogs?subject=&page=1')
  }

  function paginationHandler(e) {
      const clickedPage = e.target.value
      scrollToTop()
      console.log(clickedPage)
      if(clickedPage == "next") {
        router.push(`/blogs?subject=${activeFilter}&page=${activePage + 2}`)
      } else if(clickedPage == "prev") {
          router.push(`/blogs?subject=${activeFilter}&page=${activePage}`)
      } else {
          router.push(`/blogs?subject=${activeFilter}&page=${clickedPage}`)
      }
  }
  function nextButton() {
      if(activePage == totalPages - 1) {
        return (<button className="pagination-button-disabled" disabled>Next</button>)
      } else {
        return (<button onClick={(e)=> paginationHandler(e)} value="next" className="pagination-button">Next</button>)
      }
  }
  function prevButton() {
      if(activePage == 0) {
        return (<button className="pagination-button-disabled" disabled>Prev</button>)
      } else {
        return (<button onClick={(e)=> paginationHandler(e)} value="prev" className="pagination-button">Prev</button>)
      }
  }

  return (
    <>
      <div id="blogs" className="cards-2">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="blogpage-title">BLOGS</div>
                  <div className="filter-title">FILTER ON SUBJECT:</div>
                  <div className="text-center pb-3">
                    <button onClick={() => {setFilteredBlog(data.nodeQuery.entities), filterResetHandler()}} className={`filter-blogs-btn mr-2 ${activeFilter === '' ? 'active': ''}`} value="">All</button>
                    {data.taxonomyTermQuery.entities.map((subject, index) => (
                      <button key={index} onClick={(e)=> filterHandler(e)} className={`filter-blogs-btn mr-1 mt-1 ${activeFilter === subject.entityLabel ? 'active': ''}`} value={subject.entityLabel}>{subject.entityLabel}</button>
                    ))}
                  </div>
              </div> 
          </div>
          <div className="row">
            <SwitchTransition>
              <CSSTransition
                key={`${activeFilter}-${activePage}`}
                addEndListener={(node, done) => {
                  node.addEventListener("transitionend", done, false);
                }}
                classNames="blogfade"
              >
              <div className="col-lg-12">
                    {paginatedBlogs.map((blog, index) => (
                      <Link key={index} href="/blog/[nid]" as={`/blog/${blog.entityId}`}>
                        <a>
                          <div className="card mr-3" blog-subject={blog.fieldBlogSubject[0].entity.entityLabel}>
                            <div className="card-image">
                              <img src={blog.fieldBlogImage[0].url} className="img-fluid" alt=""/>
                            </div>
                            <div className="card-div pt-3">
                                <h3 className="card-title">{blog.entityLabel}</h3>
                                <p className="card-text pt-2 text-center"><small className="text-muted">{DateTime.fromISO(blog.entityCreated).toFormat('dd LLL yyyy')}</small></p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    ))}
              </div> 
              </CSSTransition>
            </SwitchTransition>
            </div> 
            <div className="text-center">
              <div className="pagination">
                {prevButton()}
                {[...Array(totalPages)].map((_, index) => {
                  if(totalPages >= 2) {
                    return(
                      <button onClick={(e)=> paginationHandler(e)} value={index + 1} className={`pagination-button ${activePage === index ? 'active' : ''}`} key={index}>{index + 1}</button>
                    )
                  } else {
                    return null
                  } 
                })}
                {nextButton()}
              </div>
            </div>
          </div> 
      </div> 
  </>
  )
}