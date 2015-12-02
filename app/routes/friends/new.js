import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.createRecord("friend");
	},
	activate: function(){
		console.log("------ activate hook called");
	},
	deactivate: function(){
		console.log("------- deactivate hook called");
	},
	resetController: function(controller, isExiting){
		if(isExiting){
			var model = controller.get("model");
			if(model.get("isNew")){
				model.destroyRecord(); 
			}
		}
	},
	actions:{
		save: function(){
			console.log("+--- save action in friends new route");
			return false;
		},
		cancel: function(){
			console.log("+--- cancel action in friends new route");
			return false;  
		}
	}
});
