define([
    'jquery'
  , 'underscore'
  , 'backbone'
  , 'app/collections/places'
], function ($, _, Backbone, PlacesCollection) {
    'use strict';

    var DashView = Backbone.View.extend({

      html: [
          '<h3>Dashboard Page</h3>'
        , '<div id="places-list" class="clearfix">Loading...</div>'
        , '<div id="dash-buttons"></div>'
      ].join('')

    , initialize: function () {
        this.$el.html(this.html);
        this.$placesList = this.$('#places-list');
        this.$dashButtons = this.$('#dash-buttons');

        this.collection = new PlacesCollection([]);
        this.listenTo(this.collection, 'change', this.render);
        this.collection.fetch();

        window.debug = {
          places: this.collection
        }
      }

    , render: function () {

        return this;
      }

    });

    return DashView;
});
