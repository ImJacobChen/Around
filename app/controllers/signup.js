import Ember from 'ember';

export default Ember.Controller.extend({

	firebaseApp: Ember.inject.service(),

	email: "",
	emailErrors: [],
	emailIsValid: null,

	password: "",
	passwordErrors: [],
	passwordIsValid: null,

	formErrors: [],

	actions: {
		createUser() {
			var self = this;

			if (this.get('emailIsValid') !== true || this.get('passwordIsValid') !== true) {
				this.set('formErrors', ['There is a problem with your form data']);
				return;
			}

			var email = this.get('email');
			var password = this.get('password');

			var firebase = this.get('firebaseApp');

			firebase.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(function() {
						self.set('formErrors', []);
					})
					.catch(function(error) {
						var errorCode = error.code;
						var errorMessage = error.message;
						self.set('formErrors', [errorMessage]);
					});
		},
		validateEmail() {
			var self = this;
			var email = this.get('email');

			if (email.length < 1) return;

			var patt = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
			if (patt.test(email)) {
				self.set('emailIsValid', true);
				self.set('emailErrors', []);
			} else {
				self.set('emailIsValid', false);
				self.set('emailErrors', ['Please enter a valid email address']);
			}
		},
		validatePassword() {
			var self = this;
			var password = this.get('password');
			if (password.length < 5) {
				self.set('passwordIsValid', false);
				self.set('passwordErrors', ['Please enter a password over 5 characters']);
			} else {
				self.set('passwordIsValid', true);
				self.set('emailErrors', []);
			}
		}
	}
});
