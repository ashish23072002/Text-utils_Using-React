import React from 'react'
import PropTypes from 'prop-types'
import "./Style.css"
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>   
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" hrf="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.aboutText}</a>
                        </li>
                    </ul>
                    <div className="container-my1">
                       
                        <button className="red-container box"></button>
                        <button className="green-container box"></button>
                        <button className="blue-container box"></button>
                    </div>
                    {/* <div className={`container-my1 `}>
                        {colors.map(color => (
                            <button className="box" onClick={() => handleClick(color)} style={{ backgroundColor: color }}></button>
                        ))}

                    </div> */}
                    <div className={`form-check form-switch  text-${props.mode === 'dark' ? 'light' : 'dark'} `}>
                        <input className="form-check-input pointer-link" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
                    </div>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};