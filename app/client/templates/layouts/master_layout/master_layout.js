Template.MasterLayout.helpers({});

Template.MasterLayout.events({
    'click #dashboard_button': function() {

    	var userID = Meteor.userId();
        Router.go('/' + userID + '/dashboard');
    }
});

Template.MasterLayout.onRendered(function() {


});

Template.MasterLayout.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});

// Template._loginButtonsLoggedInDropdown.events({
//     'click #login-buttons-edit-profile': function(event) {
//         Router.go('profileEdit');
//     }
// });
