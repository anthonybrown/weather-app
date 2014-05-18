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
              <p><em>Weather Watch!</em><br>Is a single page \
                javascript application!</p>';
          this.$el.html(html);
          return this;
      }

    });

    return AboutView;
});
