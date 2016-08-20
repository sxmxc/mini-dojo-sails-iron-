/*****************************************************************************/
/* ClientList: Event Handlers */
/*****************************************************************************/
Template.clientCard.onCreated(function() {

  this.editMode = new ReactiveVar(false);
   $('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

Template.clientCard.events({
    'click .trash-icon': function() {
        console.log("Trashing " + this._id);
        Meteor.call('deleteClient', this._id);
    },
    'click .edit-icon': function(event, template) {
        template.editMode.set(!template.editMode.get())
    }
});
Template.clientCard.helpers({
   editMode: function() {
      return Template.instance().editMode.get();
    },
    updateClientId: function() {
        return this._id;
    },

})

/*****************************************************************************/
/* ClientList: Helpers */
/*****************************************************************************/
Template.DashboardClientList.helpers({

    clientArray() {
        const instance = Template.instance();
        const userId = instance.getUserId();
        return Clients.find({}).fetch();
    },
   

    
});

/*****************************************************************************/
/* ClientList: Lifecycle Hooks */
/*****************************************************************************/
Template.DashboardClientList.onCreated(function() {
    this.getUserId = () => Router.current().params.userID;

    this.autorun(() => {
        this.subscribe('clients.all');
    });



    
});

Template.DashboardClientList.onRendered(function() {
   
});

Template.DashboardClientList.onDestroyed(function() {});

Template.searchBox.helpers({
    clientsIndex: () => ClientIndex,
    searchAttributes: () => {
        return {
            placeholder: 'Find ...',
        };
    },
    
    
});
