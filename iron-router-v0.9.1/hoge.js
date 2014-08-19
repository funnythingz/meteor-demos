if (Meteor.isClient) {

    Router.configure({
        layoutTemplate: 'layout'
    });

    Router.map(function() {

        this.route('home', {
            path: '/',
            template: 'home',
            data: function() {
              return Session.get('hoge');
            }
        });

        this.route('about', {
            path: '/about',
            template: 'about'
        });

        this.route('show', {
            path: '/hoge/:_id',
            template: 'show',
            data: function() {
                return this.params._id;
            }
        });

    });

    Template.home.events({
        "change #hoge": function() {
            Session.set('hoge', $('#hoge').val());
        }
    });

}
