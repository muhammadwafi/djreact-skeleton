import React from "react";
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">djreact</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="http://www.mwprolabs.com">
                                        Website
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/muhammadwafi/djreact-skeleton">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>Option 1</DropdownItem>
                                        <DropdownItem>Option 2</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Reset</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;
