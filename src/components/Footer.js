import Link from "next/link";

export default function Footer() {

    return (
    <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-2 text-container about">
                            <h4>Get in touch!</h4>
                            <p className="white">Do you have any questions or suggestions for me? Don't be affraid! Send me a mail of call me with phone number below.</p>
                            <ul className="list-unstyled li-space-lg">
                                <li><i className="fas fa-phone"></i><a href="tel:31615273314">+31 6 15 27 33 14</a></li>
                                <li><i className="fas fa-envelope"></i><a href="mailto:yorick@burst-digital.com">yorick@burst-digital.com</a></li>
                            </ul>
                        </div> 
                    </div> 
                    <div className="col-md-5">
                        <div className="form-2 text-container about">
                            <h4>Follow Me On Social Media</h4>
                            <span className="fa-stack">
                                <a href="https://www.instagram.com/yorickvdvenne/?hl=nl">
                                    <span className="hexagon"></span>
                                    <i className="fab fa-instagram fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="https://www.linkedin.com/in/yorick-van-de-venne-514121186/">
                                    <span className="hexagon"></span>
                                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="https://github.com/YorickVdVenne">
                                    <span className="hexagon"></span>
                                    <i className="fab fa-github fa-stack-1x"></i>
                                </a>
                            </span>
                        </div> 
                    </div> 
                    <div className="col-md-2">
                        <div className="text-container">
                            <h4>Roles!</h4>
                            <ul className="list-unstyled li-space-lg white">
                                <li>
                                    <Link href="/terms-conditions">
                                        <a className="white">Terms & Conditions</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a className="white">Privacy Policy</a>
                                    </Link>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div>  
  
    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">Copyright © 2020 <a href="https://github.com/YorickVdVenne">Blog by Yorick</a></p>
                </div> 
            </div>
        </div> 
    </div>  
    </>
    )
}