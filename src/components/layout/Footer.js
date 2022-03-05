import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">

                    <div className="footer-newsletter">
                        
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4>Our Newsletter</h4>
                                    <p>
                                        Subscribe to our news letter to get notified of the school's events and activities.
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <form >
                                        <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                    </form>
                                </div>
                            </div>
                        
                    </div>

                    <div className="footer-top">
                    
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#!">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#!">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#!">News Letters</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#!">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#!">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Featured Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#!">Admissions</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#!">Registration</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#!">Faculties</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#!">Accomodation</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#!">Events</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    A108 Adam Street,<br/>
                                    Ikoyi, Lagos<br/>
                                    Nigeria <br/><br/>
                                    <strong>Phone:</strong> +234 80 000 0000<br/>
                                    <strong>Email:</strong> ogachucks@example.com<br/>
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>About Us</h3>
                                <p>
                                    Best rated school in West Africa and amongst the top 20 rated schools in the world<br/>
                                    Excellence is our watchword!
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#!" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#!" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#!" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#!" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#!" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                        
                        </div>
                    </div>
               
                    <div className="copyright">
                        &copy; Copyright. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="#!">NormalLevel</a>
                    </div>   

                </div>
            </footer>
       
            <a href="#!" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> 
        </>
    );
};

export default Footer
