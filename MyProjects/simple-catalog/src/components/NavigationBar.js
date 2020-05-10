import React, { Component } from 'react';
import './NavigationBar.css';
import logo from '../design_concept/logo_transparent.png';

class NavigationBar extends Component {
    constructor({onRegionChanged, onSearchChanged}) {
        super();

        this.state = {
          menu: false,
          dropdown: false,
          onRegionChanged: onRegionChanged,
          onSearchChanged: onSearchChanged
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }

    toggleDropdown = () => {
        this.setState({ dropdown: !this.state.dropdown })
    }

    render() {
        const showMenu = (this.state.menu) ? "show" : "" ;
        const showDropdown = (this.state.dropdown) ? "show" : "" ;

        return (
            <nav className="navbar navbar-expand-sm navbar-dark ">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" />
                </a>
            
                <button className="navbar-toggler" type="button" onClick={ this.toggleMenu } >
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className={"collapse navbar-collapse " + showMenu} >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
            
                        <li className="nav-item dropdown" onClick={ this.toggleDropdown } >
                            <a className="nav-link dropdown-toggle" href="#" >Regions</a>
                            <div className={"dropdown-menu " + showDropdown}>
                                <a className="dropdown-item" href="#" onClick={ () => { this.state.onRegionChanged('Ukraine') }}>Ukraine</a>
                                <a className="dropdown-item" href="#" onClick={ () => { this.state.onRegionChanged('Canada') }}>Canada</a>
                                <a className="dropdown-item" href="#" onClick={ () => { this.state.onRegionChanged('USA') }}>USA</a>
                                <a className="dropdown-item" href="#" onClick={ () => { this.state.onRegionChanged('Moldova') }}>Moldova</a>
                            </div>
                        </li>
            
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacts</a>
                        </li>
                    </ul>

                    <form className="form-inline my-auto my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.state.onSearchChanged}/>
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
