import React, { useState, useEffect } from 'react'
import './Navbar.css'
function Navbar() {
    const [searchField, setSearchField] = useState('')

    const upDateSearch = (e) =>
    {
        setSearchField(e.target.value)
    }
    return (
        <nav className="navbar header-navbar">
            <div className="temporary-logo">MOVIE TIME</div>
            <div className="navbar-items-container">
                <div className="search-container">
                    <input onChange={upDateSearch} type="text" className="search-field"/>
                    <div className="search-icon"></div>
                </div>
                <span>Home</span>
                <span>Favorites</span>
            </div>
        </nav>
    )
}

export default Navbar