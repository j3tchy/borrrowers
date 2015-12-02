import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['sortBy','sortAscending'],
	sortAscending: true,
	sortBy: 'first_name',

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
