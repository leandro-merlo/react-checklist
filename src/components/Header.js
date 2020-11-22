import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, Nav } from 'reactstrap';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        return (
            <div>
                <Navbar color="light" expand="md">
                    <NavbarBrand>Checklist</NavbarBrand>
                    <NavbarToggler onClick={ this.toggle }></NavbarToggler>
                    <Collapse isOpen={ this.state.open } navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">HOME</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}