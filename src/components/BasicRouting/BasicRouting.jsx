import React from "react";
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";



function BasicRouting() {
    return(
        <Router>
            <>
            <nav>
                <ul>
                    <li><Link>HOme</Link></li>
                    <li><Link>About</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route></Route>
            </Routes>
            </>
        </Router>
    )
}