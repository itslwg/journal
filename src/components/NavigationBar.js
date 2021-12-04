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
	    <h4 className="NavigationBar-Brand">Thoughts</h4>
	    <Navbar.Toggle aria-controls="basic-navbar-nav" />
	    <Navbar.Collapse id="basic-navbar-nav">
	      <Nav className="me-auto">
		<NavLink className="App-navlink" to="/Concepts">Concepts</NavLink>
		<NavLink className="App-navlink" to="/projects">Projects</NavLink>
	      </Nav>
	    </Navbar.Collapse>
	  </Container>
	</Navbar>
    );
}

export default NavigationBar;

