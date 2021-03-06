//to use hooks 
import React, { useState } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth'

import {
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
} from 'reactstrap';

const Header = () => {
    //hook//
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link href="/">
                    <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {!isAuth() && (
                        
                        <React.Fragment>
                            <NavItem>
                            <Link href="/signin">
                                <NavLink>
                                    Sign-In
                                </NavLink>
                            </Link>
                        </NavItem>


                        <NavItem>
                            <Link href="/signup">
                                <NavLink>
                                    Sign-Up
                                </NavLink>
                            </Link>
                        </NavItem>
                        
                        </React.Fragment>


                        )}
                        {/* <NavItem>
                            <Link href="/signin">
                                <NavLink>
                                    Sign-In
                                </NavLink>
                            </Link>
                        </NavItem>


                        <NavItem>
                            <Link href="/signup">
                                <NavLink>
                                    Sign-Up
                                </NavLink>
                            </Link>
                        </NavItem> */}


                        {isAuth() && (
                            <NavItem>
                                
                                    <NavLink style= {{cursor: 'pointer'}}onClick={() => signout(() => Router.replace(`/signup`)) }>
                                        Sign-Out
                                    </NavLink>
                                
                            </NavItem>
                        )}


                        <NavItem>
                            <NavLink href="https://github.com/vinnyvilasboa">GitHub</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;