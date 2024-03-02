import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';



function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/Home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}



// Make Home and About as two seperate Components
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function BasicRouting() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" exact element={<Nav/>} />
        <Route path="/Home" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default BasicRouting;
