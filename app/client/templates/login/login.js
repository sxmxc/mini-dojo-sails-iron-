/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
    'submit form': function(event) {
       event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    }

});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
 atDisabled: function() {
  return AccountsTemplates.disabled();
 },
 atClass: function() {
  return AccountsTemplates.disabled() ? 'disabled' : 'active';
 }
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function() {
});

Template.Login.onRendered(function() {});

Template.Login.onDestroyed(function() {
});
