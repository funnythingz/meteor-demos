Router.configure({
  layoutTemplate: 'layoutTpl',
  yieldTemplate: {
    'footerTpl': {to: 'footer'}
  }
});

HomeController = RouteController.extend({
  template: 'homeTpl'
});

AboutController = RouteController.extend({
  template: 'aboutTpl'
});

ContactController = RouteController.extend({
  template: 'contactTpl'
});

Router.map(function() {

  this.route('home', {
    path: '/',
    controller: 'HomeController'
  });

  this.route('about', {
    path: '/about',
    controller: 'AboutController'
  });

  this.route('contact', {
    path: '/contact',
    controller: 'ContactController'
  });

});
