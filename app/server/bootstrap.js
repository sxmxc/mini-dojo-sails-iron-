Meteor.startup(function () {

    // Create in 25 fake users.

    // If the user count ever falls below 25 this code will
    // make sure that you ALWAYS have 25 fresh users to
    // do with what you will. Be sure to place this
    // in your Meteor.startup or a Tracker.deps block
    if(Clients.find().count() < 250){
      _.each(_.range(250), function(){
        var randomEmail = faker.internet.email();
        var randomName = faker.name.findName();
        var userName = faker.internet.userName();
        Clients.insert({
          name: randomName,
      address: [{
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode()
          }],
          pets: [{
            type: faker.lorem.words(1).toString(),
            name: faker.name.findName(),
            breed: faker.lorem.words(1).toString()
          },{
            type: faker.lorem.words(1).toString(),
            name: faker.name.findName(),
            breed: faker.lorem.words(1).toString()
          }],
          comments: [{
            date: faker.date.past(),
            content: faker.lorem.paragraph()
          }]
        });
      });
    }
});
