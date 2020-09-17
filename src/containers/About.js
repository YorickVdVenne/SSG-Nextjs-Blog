
export default function About() {

    return (
    <>
    <div id="about" className="counter">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-xl-6">
                    <div className="image-container">
                        <img className="img-fluid" src="/about.jpg" alt="alternative"/>
                    </div> 
                </div>
                <div className="col-lg-7 col-xl-6">
                    <div className="text-container">
                        <div className="section-title">ABOUT</div>
                        <h2>Internship Documentation Blog</h2>
                        <p>This site I created during my internship at Digital-agency Burst. The meaning of it is to Document my progress here.
                            This site is made with:    
                        </p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-div pl-2">Next.js, as front-end</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-div pl-2">Drupal 8, as back-end</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-div pl-2">GraphQL, as query language</div>
                            </li>
                        </ul>
                  
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
    </>
    )
}