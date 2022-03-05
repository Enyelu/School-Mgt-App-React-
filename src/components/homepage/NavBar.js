import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <header  className="sticky-top darkblue d-flex align-items-center ">
                <div className="container d-flex align-items-center justify-content-between" >

                    <div style={{color:'white'}}>
                        <Link to='/' className="d-inline logo mx-1"><img width='60rem' height='60rem' src="https://th.bing.com/th/id/R.7de05635fc40e49f933debc75bd4b567?rik=zY7BmX%2bUVmah8A&riu=http%3a%2f%2fa490.phobos.apple.com%2fus%2fr30%2fPurple%2fv4%2fb2%2fb8%2f60%2fb2b8605a-5bbb-fdda-73a6-b3e52ed21eb1%2fmzl.yqxakvec.png&ehk=Y9%2bCVDcMCCq7G74GdopTecWI2pXcZO93Pf3UFSh4kcQ%3d&risl=&pid=ImgRaw&r=0" alt="" className="img-fluid" />
                        <h2 className="d-inline mt-2">Haven Institute</h2></Link>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                            <li><a className="nav-link scrollto" href="#team">Team</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                        </ul>
                        <i className="bi mobile-nav-toggle  bi-list"></i>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavBar
