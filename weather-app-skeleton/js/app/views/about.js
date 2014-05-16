define([
    'jquery'
  , 'underscore'
  , 'backbone'
], function ($, _, Backbone) {
    'use strict';

    var AboutView = Backbone.View.extend({

       initialize: function () {

      }

      , render: function () {
          var html = '<h3>Welcome to the About page.</h3> \
              <p>weather app coming soon!<br> Stay tuned!</p>';
          this.$el.html(html);
          return this;
      }

    });

    return AboutView;
});
