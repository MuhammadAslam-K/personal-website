import {Link} from "react-router-dom"
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link to={"/"} className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to={"/resume"} className="nav-link" >Resume</Link></li>
                            <li className="nav-item"><Link to={"/project"} className="nav-link" >Projects</Link></li>
                            <li className="nav-item"><Link to={"/about"} className="nav-link" >About Me</Link></li>
                            <li className="nav-item"><Link to={"/blogs"} className="nav-link" >My blog</Link></li>
                            <li className="nav-item"><Link to={"/contact"} className="nav-link" >Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar