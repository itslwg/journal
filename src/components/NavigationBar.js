import '../App.css';
import './NavigationBar.css'

import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
	<Navbar className="App-navbar" expand="lg">
	  <Container>
	    <Navbar.Brand href="/journal" className="NavigationBar-Brand">
	      <span>&#129300;</span>
	    </Navbar.Brand>
	    <Navbar.Toggle aria-controls="basic-navbar-nav" />
	    <Navbar.Collapse id="basic-navbar-nav">
	      <Nav className="me-auto">
		<NavLink className="App-navlink" to="/projects">Projects</NavLink>
	      </Nav>
	    </Navbar.Collapse>
	  </Container>
	</Navbar>
    );
}

export default NavigationBar;

