///<reference path="./typings/lib.d.ts"/>
///<reference path="./typings/meteor.d.ts"/>
///<reference path="./typings/underscore.d.ts"/>
///<reference path="./typings/jquery.d.ts"/>
///<reference path="./typings/ironrouter.d.ts"/>


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
        });

        this.route('about', {
            path: '/about',
            controller: AboutController
        });

        this.route('contact', {
            path: '/contact',
            controller: ContactController
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

    Template["home"].helpers({
        title: function() {
            return 'home';
        },
        hoge: function() {
            return "hoge";
        }
    });

    Template["about"].helpers({
        title: function() {
            return 'about';
        }
    });

    Template["contact"].helpers({
        title: function() {
            return 'contact';
        }
    });

}
