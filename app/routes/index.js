import Ember from 'ember';

export default Ember.Route.extend({
	
	firebaseApp: Ember.inject.service(),

	checkAuthentication: function() {
		var firebase = this.get('firebaseApp');
		var self = this;
		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    console.log(user);
		  } else {
		    console.log('No user signed in.');
		    self.transitionTo('signup');
		  }
		});
	}.on('activate'),

	getLocation: function() {
		if (window.navigator.geolocation) {
        	window.navigator.geolocation.getCurrentPosition(showPosition);
    	}
    	function showPosition(position) {
    		console.log(position)
    	}
	}.on('activate')
});
