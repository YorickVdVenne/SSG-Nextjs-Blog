import Link from "next/link";
import { navBarCollapse } from '../functions/navBarCollapse'

export default function Navbar() {

    return (
    <>
    <div className="navbarspacing mb-5">
        <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
            <Link href="/">
                <a className="navbar-brand logo-text">BLOG</a>
            </Link>
            <button onClick={navBarCollapse} className="navbar-toggler">
                <span id="navbar-toggler" className="navbar-toggler-awesome fas fa-bars"></span>
            </button>

            <div className="collapse navbar-collapse" id="topnav-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/#header">
                            <a className="nav-link page-scroll">HOME <span className="sr-only">(current)</span></a>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link href="/blogs?page=1">
                            <a className="nav-link page-scroll">BLOG</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/#about">
                            <a className="nav-link page-scroll">ABOUT</a>
                        </Link>
                    </li>
                </ul>
                <span className="nav-item social-icons">
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
                </span>
            </div>
        </nav> 
    </div>
    </>
    )
}