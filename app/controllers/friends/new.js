import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed('model.first_name', 'model.last_name', 'model.email', 'model.twitter', function(){
		return !Ember.isEmpty(this.get('model.first_name')) && !Ember.isEmpty(this.get('model.last_name')) && !Ember.isEmpty(this.get('model.email')) && !Ember.isEmpty(this.get('model.twitter'));
	}),
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
			this.transitionToRoute("friends");

			return false;
		}
	}
});
