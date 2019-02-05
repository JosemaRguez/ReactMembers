import React from 'react'
import '../../styles/styles.css'
import PageLinks from './PageLinks';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top navbar-style" >  
            <a className="navbar-brand navbarTextSize" href="/">MS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse collapse" id="navbarTogglerDemo02" >
                <PageLinks />
            </div>
        </nav>
    )
}

export default Navbar