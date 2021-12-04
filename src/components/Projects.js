import './App.css';

import {
    Navbar,
    Nav,
    NavDropdown,
    Container
} from 'react-bootstrap';

import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
	<div className="App-navbar">
	  <Routes>
	    <Navbar className="navbar" expand="lg">
	      <Container>
		<Navbar.Brand href="/home">Thoughts</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
		  <Nav className="me-auto">
		    <Route path="/" element={<Home />} />
		    <Route path="/" element={<Home />} />
		    <Route path="/" element={<Home />} />
		  </Nav>
		</Navbar.Collapse>
	      </Container>
	    </Navbar>
	  </Routes>
	  <header className="App-header">
	    <p>
	      <span className="emoji">&#129300;</span>
	    </p>
            <p>
	      Thoughts and Notes
            </p>
	  </header>
	</div>
    );
}

function Home() {
  return (
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
  );
}

export default App;
