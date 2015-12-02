import Ember from 'ember';

export default Ember.Controller.extend({

	hasEmail: Ember.computed.notEmpty('model.email'),
	hasFirstName: Ember.computed.notEmpty('model.first_name'),
	hasLastName: Ember.computed.notEmpty('model.last_name'),
	hasTwitter: Ember.computed.notEmpty('model.twitter'),
	isValid: Ember.computed.and(
		'hasEmail',
		'hasFirstName',
		'hasLastName',
		'hasTwitter'
	),
	
	actions: {
		save: function(){
			if(this.get('isValid')){ 
				this.get("model").save().then((friend) => {
					this.transitionToRoute("friends.show", friend);
				});
			} else {
				this.set("errorMessage", "You have to fill all the fields");
			}

			return false;
		},
		cancel: function(){
			return true;
		}
	}
});
