import Ember from 'ember';

export default Ember.Controller.extend({

	firebaseApp: Ember.inject.service(),

	email: "",
	password: "",
	formErrors: [],

	actions: {
		logIn() {
			var self = this;

			var email = this.get('email');
			var password = this.get('password');
			
			var firebase = this.get('firebaseApp');

			firebase.auth()
					.signInWithEmailAndPassword(email, password)
					.then(function() {
						self.set('formErrors', []);
					})
					.catch(function(error) {
						var errorCode = error.code;
						var errorMessage = error.message;
						self.set('formErrors', [errorMessage]);
					});
		}
	}
});
