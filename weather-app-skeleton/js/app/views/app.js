define([
    'jquery'
  , 'underscore'
  , 'backbone'
  , 'app/views/home'
  , 'app/views/dash'
  , 'app/views/about'
], function ($, _, Backbone, HomeView, DashView, AboutView) {
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
                , '<li id="nav-dash"><a href="#dash">Dashboard</a></li>'
                , '<li id="nav-about"><a href="#about">About</a></li>'
              , '</ul>'
            , '</div>'
          , '</div>'
        , '</div>'
      , '<div id="content" class="container well col-lg-12"></div>'
      ].join('')

    , events: {

      }

    , views: {}

    , initialize: function () {
        this.views['home'] = new HomeView({
            id: 'page-home'
          , className: 'page-view'
        });

        this.views['about'] = new AboutView({
            id: 'page-about'
          , className: 'page-view'
        });

        this.views['dash'] = new DashView({
            id: 'page-dash'
          , className: 'page-view'
        });

        this.$el.append(this.html);
        this.$('#content').append(this.views['home'].render().el);
        this.$('#content').append(this.views['about'].render().el);
        this.$('#content').append(this.views['dash'].render().el);
      }

    , setPage: function (page) {
        this.$('.nav li').removeClass('active');
        this.$('.page-view').hide();
        this.$('#page-'+page).fadeIn(800);
        this.$('#nav-'+page).addClass('active');
      }

  });

  return AppView;
});
