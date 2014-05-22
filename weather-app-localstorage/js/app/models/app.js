define([
    'backbone'
  , 'backbone.localStorage'
], function (Backbone) {
    'use strict';

    var AppModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('AppSettings')
      , defaults: {
            'backgroundColor': '#7E3131'
          , 'celsius': true
          , 'welcomeMessage': 'Welcome to weather watcher'
        }
    });

    return AppModel;
});
