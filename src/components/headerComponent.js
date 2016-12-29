import React from 'react';
import { render } from 'react-dom'


var Header = React.createClass({

    render: function() {
        return(
            <div id="header">
                <nav className="navbar navbar-default header">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#"><img src="./../images/logo.png" className="logo"></img></a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
});

module.exports = Header;