import React from 'react';
import { render } from 'react-dom';
var Constants = require('./../constants');


var Header = React.createClass({
    getInitialState: function() {
      return {
          inputVal: ''
      };
    },

    handleInput: function(event) {
        var inputValue = event.target.value;
        this.setState({inputVal: inputValue});
    },

    handleSearch: function(event) {
        this.props.handleSearch(this.state.inputVal);
    },

    render: function() {
        return(
            <div id="search" className="col-lg-6">
                <div className="input-group">
                    <span>
                        <input type="text" className="form-control" onChange={this.handleInput} placeholder={Constants.PLACEHOLDER} />
                    </span>
                    <span className="input-group-btn">
                        <button className="btn btn-default glyphicon glyphicon-search" type="button" onClick={this.handleSearch}></button>
                    </span>
                </div>
            </div>
        )
    }
});

module.exports = Header;
