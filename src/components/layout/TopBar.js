import React from 'react'

const TopBar = () => {
    return (
        <div id="topbar" className="mybackground " style={{paddingTop:'1rem'}}>
            <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center ">
                <p>
                    <i className="bi bi-envelope-fill"></i><a href="mailto:ogachucks@example.com">ogachucks@example.com</a>
                    <i className="bi bi-telephone-fill phone-icon"></i>+234 80 0000 000
                </p>
            </div>
            <div className=" contact-info d-flex align-items-center d-none d-md-block">
                <p>
                    <strong><a href="#students" >Students</a></strong> |
                    <strong><a href="#staff" >Staff</a></strong>  |
                    <strong><a href="#alumni" >Alumni</a></strong>
                </p>
            </div>
            </div>
        </div>
    );
};

export default TopBar;
