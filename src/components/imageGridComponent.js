import React from 'react';
import { render } from 'react-dom'


var Header = React.createClass({

    render: function() {
        return (
            <div className="col-sm-3 col-md-4">
                <div className="thumbnail imageContainer">
                    <img src={this.props.imageSrc} className="imageStyle"/>
                    <div className="caption">
                        <h3>{this.props.desc}</h3>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Header;