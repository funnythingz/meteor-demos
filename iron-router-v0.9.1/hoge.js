if (Meteor.isClient) {

    Router.configure({
        layoutTemplate: 'layout'
    });

    Router.map(function() {

        this.route('home', {
            path: '/',
            template: 'home'
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

}
