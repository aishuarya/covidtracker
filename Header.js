
import react,{Component} from 'react';
import {Navbar ,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
                <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">COVID-19 INDIA </Navbar.Brand>
                <Nav className="mr-auto">
                <Link className="nav-link" to="/India">India</Link>
            
                </Nav>
                </Navbar>

        );
    }
}

export default Header;