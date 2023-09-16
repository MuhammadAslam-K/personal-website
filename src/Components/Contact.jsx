
function Contact() {
    return (
        <div>
            <section className="py-5">
                <div className="container px-5">
                    <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <p className="lead fw-normal text-muted mb-0">Lets work together!</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <form role="form" id="submit-form" action="" className="email-form">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label  >Your Name</label>
                                            <input type="text" id="fname" name="name" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Your Email</label>
                                            <input type="text" id="lname" name="email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea id="subject" name="message" className="form-control" rows="10" ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <input className="btn btn-primary" value="Send message" type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact