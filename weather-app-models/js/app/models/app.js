define([
    'backbone'
], function (Backbone) {
    'use strict';

    var AppModel = Backbone.Model.extend({
        defaults: {
            'backgroundColor': '#999999'
          , 'celsius': true
          , 'welcomeMessage': 'Welcome to weather watcher'
        }
    });

    return AppModel;
});
