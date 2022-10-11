import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <nav className="bgn">
                <Link className="navbar-brand" to="/">TaskTracker</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Timer<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tasks">Task List</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar