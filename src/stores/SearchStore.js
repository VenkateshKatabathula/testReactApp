var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Constants = require('./../constants');
var _state = {};

var SearchStore = assign({}, EventEmitter.prototype, {
    getProductData: function () {
        return _state;
    },
    emitChange: function () {
        this.emit('SEARCH');
    },
    addChangeListener: function (cb) {
        this.on('SEARCH', cb);
    },
    removeChangeListener: function (cb) {
        _state = {};
        this.removeListener('SEARCH', cb);
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        case Constants.PRODUCTS:
            _state = Constants.PRODUCT_DATA;
            break;
        case Constants.IMAGES:
            _state = Constants.PRODUCT_IMAGE_DATA;
            break;
        default: _state = Constants.NO_DATA;
    }
    SearchStore.emitChange();
});

module.exports = SearchStore;




