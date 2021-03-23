import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar header-navbar">
            {/* <img src="" alt="" className="movie-app-logo"/> */}
            <div className="temporary-logo">MOVIE TIME</div>
            <div className="navbar-items-container">
                <div className="search-container">
                    <input type="text" className="search-field"/>
                    <div className="search-icon"></div>
                </div>
                <span>Home</span>
                <span>Favorites</span>
            </div>
        </nav>
    )
}

export default Navbar