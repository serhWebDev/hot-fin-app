import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <h4 className="yellow-text text-darken-1 center">
                        <b>Hotline finance</b>
                    </h4>
                </div>
            </header>
        );
    }
}

export default Header;

