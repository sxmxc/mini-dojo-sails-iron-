Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

var goToDashboard = function(pause) {
  if (Meteor.userId()) {
    Router.go('Dashboard',{userID: Meteor.userId()});
  } else {
    this.next();
  }
};

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client',
  onBeforeAction: goToDashboard
});

Router.onBeforeAction(function() {
  if (! Meteor.user()) {
    this.redirect('/login');
    this.next();
  } else {
    this.next();
  }
});

Router.route('/login', {
  name: 'Login',
  controller: 'LoginController',
  layoutTemplate: 'MasterLayout',

});

// var isValidRoute = function (pause) {
//   if (!Meteor.userId == this.params.userID) {
//     this.render('NotFound');
//   } else {
//     this.next();
//   }
// }
// Router.onBeforeAction(isValidRoute, {only: ['Dashboard'] })

Router.route('/:userID/dashboard', function() {
  this.render('dashboard');
},{
  name: 'Dashboard',
  layoutTemplate: 'DashboardLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    return Meteor.subscribe("userData");
  },
  controller: 'DashboardController',
  data: function () { return Meteor.users.findOne({_id: this.params.userID}); }
});

// Router.onBeforeAction(function() {
//   only: ['dashboard']
//   // or except: ['routeOne', 'routeTwo']
//   this.next();
// });

Router.route('/:userID/profile_edit', {
  name: 'Dashboard.profileEdit',
  controller: 'ProfileEditController',
  where: 'client'
});

Router.route('/:userID/dashboard/client_list', {
  name: 'Dashboard.ClientList',
  controller: 'ClientListController',
  layoutTemplate: 'DashboardLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    return Meteor.subscribe("userData");
  },
  //data: function () { return Clients.find({}); }
});

Router.route('/:userID/dashboard/add_client', {
  name: 'Dashboard.AddClient',
  controller: 'AddClientController',
  layoutTemplate: 'DashboardLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    return Meteor.subscribe("userData");
  },
});