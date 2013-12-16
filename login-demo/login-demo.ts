/// <reference path="./packages/typescript-libs/node.d.ts" />
/// <reference path="./packages/typescript-libs/meteor.d.ts" />
/// <reference path="./packages/typescript-libs/jquery.d.ts" />
/// <reference path="./packages/typescript-libs/ironrouter.d.ts" />

if (Meteor.isServer) {
    Accounts.config({
        sendVerificationEmail: true,
        restrictCreationByEmailDomain: 'hoge.hoge',
        loginExpirationInDays: 90
    });
}

var isMailVerified = function(){
    return Meteor.user() && Meteor.user().emails[0].verified;
}


if (Meteor.isClient) {

Template['header'].helpers({

    title: () => {
        return 'login demo';
    },

    loginMessage: () => {
        return isMailVerified() === null || isMailVerified() ? null : "メール認証してください";
    }

});

}
