import Ember from 'ember';

export default Ember.Route.extend({
	
	firebaseApp: Ember.inject.service(),

	checkAuthentication: function() {
		var firebase = this.get('firebaseApp');
		var self = this;

		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    self.transitionTo('index');
		  }
		});
	}.on('activate')

});
