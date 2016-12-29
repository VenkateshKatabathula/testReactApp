import React from 'react';
import { render } from 'react-dom'
var Header = require('./headerComponent');
var Search = require('./searchComponent');
var TableComponent = require('./tableComponent');
var GridComponent = require('./imageGridComponent');
var Constants = require('./../constants');
var SearchAction = require('./../actions/searchAction');
var SearchStore = require('./../stores/SearchStore');


var HomePage = React.createClass({
    getInitialState: function() {
        return {
            isSearch: false,
            productData: ''
        };
    },

    componentDidMount: function() {
        SearchStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        var response = SearchStore.getProductData();
          this.setState({
              productData: response,
              isSearch: true
          })
    },

    handleSearch: function(value) {
        SearchAction.searchView(value);
    },

    componentWillUnmount: function() {
        SearchStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var displayComp = "";
        var responseType = this.state.productData.responseType;
        var display = [];
        if(this.state.isSearch) {
            if (responseType === Constants.PRODUCTS) {
                display = (<TableComponent productData={this.state.productData.products}/>)
            } else if(responseType === Constants.IMAGES) {
                this.state.productData.productsImages.forEach(function (data) {
                    display.push(<GridComponent key={data.name} imageSrc={data.imageUrl} desc={data.name}/>);
                });
            } else {
                display = (<div className="noData">{Constants.NODATA}</div>)
            }
        } else {
            display = "";
        }
        return(
            <div>
                <Header />
                <div>
                    <Search handleSearch={this.handleSearch}/>
                </div>
                <div className="listView">
                    <div className="row">
                        {display}
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = HomePage;
