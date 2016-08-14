

Template.dashboardLayout.helpers({
  authInProcess: function() {
    return Meteor.loggingIn();
  },
  canShow: function() {
    return !!Meteor.user();
  }
});

Template.dashboardLayout.events({
    'click .logout': function(event){
        event.preventDefault();
        AccountsTemplates.logout();
    }
});

Template.dashboardLayout.events({
    'click #dashboard_button': function() {

      var userID = Meteor.userId();
        Router.go('/' + userID + '/dashboard');
    }
});
Template.dashboardLayout.events({
    'click #list_clients': function() {

      
       Router.go('Dashboard.ClientList', { userID: Meteor.userId() });
    }
});
Template.dashboardLayout.events({
    'click #new_client': function() {

      console.log("New client clicked!!")
       Router.go('Dashboard.AddClient', { userID: Meteor.userId() });
    }
});



  Template.navDropdown.onRendered(function(){
  	this.$(".button-collapse").sideNav({ menuWidth: 300});
    this.$('.collapsible').collapsible({ accordian: true });
  });