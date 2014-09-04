if (Meteor.isServer) {
    Meteor.startup(function() {
        var testJSON = JSON.parse(Assets.getText('test.json'));
        console.log(testJSON.result_data.name);
    });
}
