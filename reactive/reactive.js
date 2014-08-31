var Messages = new Meteor.Collection('messages');

if (Meteor.isClient) {

  Template.hello.events({
  
    'click #post': function() {

      var $inputMessage = $('#inputMessage');

      if(! _.isEmpty($inputMessage.val())) {
        Messages.insert({message: $inputMessage.val()});
      }
    }

  });

  Template.hello.helpers({

    messages: function() {
      Meteor.subscribe('allMessages');
      return Messages.find().fetch();
    }

  });

}

if (Meteor.isServer) {

  Meteor.publish('allMessages', function() {
    return Messages.find({});
  });

}
