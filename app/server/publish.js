import { Meteor } from 'meteor/meteor'

Meteor.publish("userData", function() {
    if (this.userId) {
        return Meteor.users.find({ _id: this.userId }, { fields: { 'name': 1, 'gravatarUrl': 1, 'emails': 1, 'username': 1 } });
    } else {
        this.ready();
    }
});
Meteor.publish("clients.all", function() {
    if (this.userId) {
        return Clients.find({}, { fields: {'name': 1, 'address': 1, 'pets': 1, 'comments': 1}})
    } else {
        this.ready();
    }
    
});

