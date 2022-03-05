import React from 'react'

const FeaturedNews = () => {
    return (
        <section className="icon-boxes">
            <div className="container">
                <div>
                   <h1> News and Events</h1>
                </div>
                <div className="row">

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
                        <div className="icon-box">
                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                        <h4 className="title"><a href="#!">University Sports</a></h4>
                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon-box">
                        <div className="icon"><i className="bx bx-file"></i></div>
                        <h4 className="title"><a href="#!">Admission is ongoing..</a></h4>
                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-tachometer"></i></div>
                            <h4 className="title"><a href="#!">Inaugural Lecture</a></h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-layer"></i></div>
                            <h4 className="title"><a href="#!">2021 Matriculation</a></h4>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedNews
