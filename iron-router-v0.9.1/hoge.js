if (Meteor.isClient) {

    Router.configure({
        layoutTemplate: 'layout'
    });

    Router.map(function() {
        this.route('home', {
            path: '/',
            template: 'home'
        });
    });

    Router.map(function() {
        this.route('about', {
            path: '/about',
            template: 'about'
        });
    });

}
