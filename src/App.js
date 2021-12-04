import './App.css';

/* import {
 *     Navbar,
 *     Nav,
 *     Container
 * } from 'react-bootstrap';
 *  */
import {Link} from 'react-router-dom';

function App() {
    return (
	<div className="App">
	  {/* <Navbar className="App-navbar" expand="lg">
	      <Container>
	      <Navbar.Brand href="#home">
	      Thoughts
	      </Navbar.Brand>
	      <Navbar.Toggle aria-controls="basic-navbar-nav" />
	      <Navbar.Collapse id="basic-navbar-nav">
	      <Nav className="me-auto">
	      </Nav>
	      </Navbar.Collapse>
	      </Container>
	      </Navbar> */}
	  <header className="App-header">
	    <p>
	      <span className="emoji">&#129300;</span>
	    </p>
            <p>
	      Thoughts and Notes
            </p>
            <Link to="/home">Home</Link>
	  </header>
	</div>
    );
}

export default App;


