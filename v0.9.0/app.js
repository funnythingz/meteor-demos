if (Meteor.isClient) {

    Router.configure({
        layoutTemplate: 'layout',
        notFoundTemplate: 'notFound',
        loadingTemplate: 'loading'
    });

    Router.map(function() {

        this.route('home', {
            path: '/',
            controller: HomeController
            //fastRender: true
        });

        this.route('about', {
            path: '/about',
            controller: AboutController
            //fastRender: true
        });

        this.route('contact', {
            path: '/contact',
            controller: ContactController
            //fastRender: true
        });

    });

    var HomeController = RouteController.extend({
        template: 'home'
    });

    var AboutController = RouteController.extend({
        template: 'about'
    });

    var ContactController = RouteController.extend({
        template: 'contact'
    });

    Template.home.helpers({
        title: function() {
            return 'home';
        }
    });

    Template.about.helpers({
        title: function() {
            return 'about';
        }
    });

    Template.contact.helpers({
        title: function() {
            return 'contact';
        }
    });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
