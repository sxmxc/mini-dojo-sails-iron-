Clients = new Mongo.Collection('clients');

var Schemas = {};

if (Meteor.isServer) {
  Clients.allow({
    insert: function (userId, doc) {
        if(Meteor.user) {
            return true;
        }
      
    },

    update: function (userId, doc, fieldNames, modifier) {
      if(Meteor.user) {
            return true;
        }
    },

    remove: function (userId, doc) {
      return false;
    }
  });

}


Schemas.Clients = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    address: {
      type: [Object],
      minCount: 1
    },
    "address.$.street": {
      type: String
    },
    "address.$.city": {
      type: String
    }, 
    "address.$.state": {
      type: String
    },
    "address.$.zip": {
      type: String
    }
});

Clients.attachSchema(Schemas.Clients);

ClientIndex = new EasySearch.Index({
    collection: Clients,
    fields: ['name'],
    engine: new EasySearch.Minimongo()
  });