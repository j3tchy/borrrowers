import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.createRecord('article', {
			friend: this.modelFor('friends/show')
		});
	},
	resetController: function(controller, isExiting){
		if(isExiting){
			var model = controller.get("model");

			if(model.get("isNew")){
				model.destroyRecord();
			}
		}
	},
	actions: {
		save: function(){
			console.log('+--- save action in the articles new route');
			var model = this.modelFor('articles/new');
			model.save().then(() => {
				this.transitionTo('articles');
			});
		},
		cancel: function(){
			this.transitionTo('articles');
		}
	}
});
