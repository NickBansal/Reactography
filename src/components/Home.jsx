import React from 'react'
import { Link } from "@reach/router";
import '../App.css'

const Home = ({ children }) => {
    return (
        <div>
            <div className="Home">
            <Link to="booklist"><button>Books</button></Link>
            <Link to="graph"><button>Graphs</button></Link>
            </div>
            {children}
        </div>
    )
}

export default Home;