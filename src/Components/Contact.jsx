import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios"

function Contact() {
    
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required').min(3, "Invaid Name"),
        email: Yup.string().required('Email is required'),
        message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
    });

    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values) => {
            submitForm(values)
            console.log(values);
        },
    });

    const submitForm = async (values) => {
        try {
            const response = await axios.post(
                "https://script.google.com/macros/s/AKfycbwsAJiqJFXVAvDsLdyT-E_zgXwd3WbYt7GOTBfr5Vx1U-nrm9LgFZNvPjgWZE7qj1eB/exec",
                values
            );

            if (response.status === 200) {
                alert("Form submitted successfully");
                window.location.reload();
            } else {
                alert("Form submission failed");
            }
        } catch (error) {
              alert("Something went wrong");
            console.error("error", error);
        }
    };

    return (
        <div>
            <section className="py-5">
                <div className="container px-5">
                    <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <p className="lead fw-normal text-muted mb-0">Lets work together!</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                            />
                                            {formik.touched.name && formik.errors.name ? (
                                                <div className="invalid-feedback">{formik.errors.name}</div>
                                            ) : null}
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="email">Your Email</label>
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className="invalid-feedback">{formik.errors.email}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                                            rows="10"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.message}
                                        ></textarea>
                                        {formik.touched.message && formik.errors.message ? (
                                            <div className="invalid-feedback">{formik.errors.message}</div>
                                        ) : null}
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
    );
}

export default Contact;