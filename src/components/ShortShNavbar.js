import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand} from 'reactstrap';

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
                    <NavbarBrand href="/">short.sh</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                </Navbar>
            </div>
        );
    }
}

export default ShortShNavbar;