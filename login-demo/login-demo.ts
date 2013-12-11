/// <reference path="./packages/typescript-libs/node.d.ts" />
/// <reference path="./packages/typescript-libs/meteor.d.ts" />
/// <reference path="./packages/typescript-libs/jquery.d.ts" />
/// <reference path="./packages/typescript-libs/ironrouter.d.ts" />

if (Meteor.isClient) {

Template['header'].helpers({

    title: () => {
        return 'title';
    }


});

}
