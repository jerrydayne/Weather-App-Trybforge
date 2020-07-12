import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Menu extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen});
    };
    render() {
    return (
        <menu-header>
            <div 
            className={this.state.isOpen?"menu-btn close" : "menu-btn"}
            onClick={this.handleToggle} 
            >
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <nav className={this.state.isOpen?"menu show" : "menu"}>
                <div className={this.state.isOpen?"menu-branding show" : "menu-branding"}>
                    <div className="portrait"></div>
                </div>
                <ul className={this.state.isOpen?"menu-nav show" : "menu-nav"}>
                    <li className={this.state.isOpen?"nav-item current show" : "nav-item "}>
                        <Link 
                        className="nav-link"
                        to='/'>
                            Home
                        </Link>
                    </li>
                    <li className={this.state.isOpen?"nav-item show" : "nav-item"}>
                        <Link 
                        className="nav-link"
                        to='/focast'>
                            Focast 
                        </Link>
                    </li>
                    <li className={this.state.isOpen?"nav-item show" : "nav-item"}>
                        <Link 
                        className="nav-link"
                        to='/about'>
                            Dayne.io
                        </Link>
                    </li>
                </ul>
            </nav>
        </menu-header>
    )
}
}

export default Menu
