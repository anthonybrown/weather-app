define([
    'jquery'
  , 'underscore'
  , 'backbone'
], function ($, _, Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({
      routes: {
          '': 'goToHome'
        , 'dash': 'goToDash'
        , 'dash/:place': 'goToDash'
        , 'about': 'goToAbout'
      }

      , initialize: function (view) {
          this.appView = view;
      }

      , goToHome: function () {
          this.appView.setPage('home');
      }

      , goToDash: function (place) {
          this.appView.setPage('dash');
          if (place) {
            alert('Weather details for ' + place);
          }
      }

      , goToAbout: function () {
          this.appView.setPage('about');
      }

    });

    return Router;
});
