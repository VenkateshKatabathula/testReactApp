import React from 'react';
import { render } from 'react-dom'
var Constants = require('./../Constants');


var TableComponent = React.createClass({

    render: function() {
        var headers = [];
        var products = [];
        Constants.LIST_VIEW_HEADERS.forEach(function(header){
            headers.push(<th key={header}>{header}</th>);
        });
        this.props.productData.forEach(function(product){
           products.push(<tr key={product.name}>
               <td>{product.name}</td>
               <td>{product.weight}</td>
               <td>{product.price}</td>
               <td>{product.bestBefore}</td>
               <td>{product.ingredients}</td>
               <td>{product.manufacturer}</td>
           </tr>)
        });
        return(
            <div id="listView">
                <table className="table table-striped tableClass">
                    <thead>
                    <tr className="tableHeader">
                        {headers}
                    </tr>
                    </thead>
                    <tbody>
                    {products}
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = TableComponent;
