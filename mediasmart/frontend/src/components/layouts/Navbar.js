import React from 'react'
import { Link } from 'react-router-dom'
import PageLinks from './PageLinks'
import '../../styles/styles.css'


const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo logo">MS</Link>
                <PageLinks />
            </div>
        </nav>
    )
}

export default Navbar