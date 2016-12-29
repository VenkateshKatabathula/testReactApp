var AppDispatcher = require('../dispatcher/AppDispatcher');

var SearchViewAction = {

    searchView: function (data) {
        AppDispatcher.dispatch({
            source: 'SEARCH',
            action: {
                actionType: data
            },
            data: data
        });
    }
};

module.exports = SearchViewAction;
