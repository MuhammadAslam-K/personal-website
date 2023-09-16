import {Link} from "react-router-dom"

function Project() {
    return (
        <div>
            <div className="container-fluid project-img d-flex justify-content-center align-items-center flex-wrap ">
                <div className="row">

                    <div className="card m-5 p-4" style={{ width: "22rem" }}>
                        <a target="_blank" href="https://ajju0075.github.io/netfilx-clone/" rel="noreferrer"><img className="card-img-top" src="../../public/netflix.png" alt="Card image cap" /></a>
                        <div className="card-body">
                            <p className="card-text">This is a design of Netflix Clone Using HMTL and CSS. this is a static website of netflix front page only</p>
                        </div>
                    </div>

                    <div className="card m-5 p-1" style={{ width: "22rem" }}>
                        <a href="https://ajju0075.github.io/band-website/"> <img className="card-img-top" src="../../public/band.png" alt="Card image cap" /></a>
                        <div className="card-body">
                            <p className="card-text">This is a band website that allows you to give information about events hosted by that band</p>
                        </div>
                    </div>

                    <div className="card m-5 p-4" style={{ width: "22rem" }}>
                        <a target="_blank" href="https://ajju0075.github.io/zomato-clone/" rel="noreferrer"><img className="card-img-top" src="../../public/zomato.png" alt="Card image cap" /></a>
                        <div className="card-body">
                            <p className="card-text">This is a design Zomato Clone i made using HTML and CSS. this is a static website of Zomato front page only</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Lets build something together</h2>
                        <Link to={"/contact"} className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project