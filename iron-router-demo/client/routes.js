Router.configure({
  layoutTemplate: 'layoutTpl',
  yieldTemplate: {
    'footerTpl': {to: 'footer'}
  }
});


Router.map(function() {

  this.route('home', {
    path: '/',
    template: 'homeTpl'
  });

  this.route('about', {
    path: '/about',
    template: 'aboutTpl'
  });

  this.route('contact', {
    path: '/contact',
    template: 'contactTpl'
  });

});
