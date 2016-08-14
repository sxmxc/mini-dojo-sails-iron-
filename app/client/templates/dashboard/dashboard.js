/*****************************************************************************/
/* Dashboard: Event Handlers */
/*****************************************************************************/
Template.dashboard.events({
});

/*****************************************************************************/
/* Dashboard: Helpers */
/*****************************************************************************/
Template.scheduler_month.onRendered( function (){
	scheduler.init("scheduler_month", new Date(), "month");
	

});
Template.scheduler_week.onRendered( function (){
	scheduler.init("scheduler_week", new Date(), "week");
	

});
Template.scheduler_day.onRendered( function (){
	scheduler.init("scheduler_day", new Date(), "day");
	

});

/*****************************************************************************/
/* Dashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.dashboard.onCreated(function () {
});

Template.dashboard.onRendered(function () {
	
});

Template.dashboard.onDestroyed(function () {
});
