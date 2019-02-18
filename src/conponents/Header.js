import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <h2 className="brand-logo yellow-text  text-darken-1 center">
                        <b>Hotline finance</b>
                    </h2>
                </div>
            </header>
        );
    }
}

export default Header;

