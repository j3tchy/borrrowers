import Ember from 'ember';

export default Ember.Controller.extend({
	sortAscending: true,
	sortBy: 'first_name',

	possibleStates: ['borrowed','returned'],
	contentDidChange: Ember.observer('model.[]', function(){
		console.log('Called when we add or remove an article');
	}),
	stateDidChange: Ember.observer('model.@each.state', function(){
		console.log('Called when the state property change for any of the articles');
	}),

	actions: {
		setSortBy: function(field_name){
			this.set('sortBy', field_name);
			this.toggleProperty('sortAscending');

			console.log('Sorting by ' + field_name);
			console.log('Sort Ascending ' + this.get('sortAscending'));

			return false;
		}
	}
});
