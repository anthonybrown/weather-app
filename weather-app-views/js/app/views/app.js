define([
    'jquery'
  , 'underscore'
  , 'backbone'
], function ($, _, Backbone) {
  'use strict';

  var AppView = Backbone.View.extend({
      id: 'app-view'

    , html: [
        , '<div class="navbar navbar-inverse navbar-fixed-top" roll="navigation">'
          , '<div class="container">'
            , '<div class="navbar-header">'
              , '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'
                , '<span class="sr-only">Toggle navigation</span>'
                , '<span class="icon-bar"></span>'
                , '<span class="icon-bar"></span>'
                , '<span class="icon-bar"></span>'
                , '<span class="icon-bar"></span>'
              , '</button>'
              , '<a class="navbar-brand" href="#">Weather Wather</a>'
            , '</div>'
            , '<div class="collapse navbar-collapse">'
              , '<ul class="nav navbar-nav">'
                , '<li id="nav-dash"><a href="#">Dashboard</a></li>'
                , '<li id="nav-about"><a href="#">About</a></li>'
              , '</ul>'
            , '</div>'
          , '</div>'
        , '</div>'
      , '<div id="content"></div>'
      ].join('')

    , events: {
          'click #nav-dash': 'onNavDash'
        , 'click #nav-about': 'onNavAbout'
      }

    , onNavDash: function (e) {
        e.preventDefault();
        console.log('Navigatoin button clicked');
      }

    , onNavAbout: function (e) {
        e.preventDefault();
        console.log('About button Clicked')
      }

    , initialize: function () {
        this.$el.append(this.html);
      }
  });

  return AppView;
});
