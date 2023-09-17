import { useState, useEffect, useContext } from "react"
import { FirebaseContext } from "../store/firebaseContext.js";

function Blogs() {
    const [blog, setBloge] = useState()
    const { firebase } = useContext(FirebaseContext)

    useEffect(() => {
        firebase.firestore().collection('blog').get().then((snapshot) => {
            const allPost = snapshot.docs.map((product) => {
                console.log("product", product);
                return {
                    ...product.data(),
                    // id: product.id
                }
            })
            setBloge(allPost)
        })
    }, [])

    return (
        <div>
            {blog &&
            <section className="text-center">
                <div className="my-5">
                    <div className="container">
                        <h4 className="mb-5 pt-5 h1"><strong>Technical Writeups</strong></h4>

                        <div className="row">
                            {blog.map((blogs) => {
                                return (
                                    <>
                                        <div className="col-lg-6 col-md-12 mb-4">
                                            <div className="card">
                                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                        <img src={blogs.url} alt="" className="img-fluid" />
                                                    <a href="#!">
                                                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{blogs.text}</h5>
                                                    <p className="card-text">
                                                        {blogs.subtext}
                                                    </p>
                                                    <a href="#" data-mdb-toggle="modal" data-mdb-target="#exampleModal-1" className="btn btn-primary">Read</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })

                            }
                        </div>
                    </div>
                </div>
            </section>
            }
        </div>
    )
}

export default Blogs