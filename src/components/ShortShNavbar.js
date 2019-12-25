import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand, Collapse, Nav, NavItem, NavLink
} from 'reactstrap';
import {Link} from "react-router-dom";
import config from '../_config/config';

class ShortShNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={Link} to="/">{config.site.name}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={"ml-auto"} navbar>
                            <NavItem>
                                <NavLink href={"https://github.com/short-sh"} target={"_blank"}>Github</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/tos">Terms of Service</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/faq">F.A.Q.</NavLink>
                            </NavItem>
                        </Nav>
                        {/*<NavbarText>Simple Text</NavbarText>*/}
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default ShortShNavbar;