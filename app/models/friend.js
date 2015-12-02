import Ember from 'ember';
import DS from 'ember-data';
import changeGate from 'ember-computed-change-gate/change-gate';

export default DS.Model.extend({
	articles: DS.hasMany('article', { async: true }),
	first_name: DS.attr('string'),
	last_name: DS.attr('string'),
	email: DS.attr('string'),
	twitter: DS.attr('string'),
	total_articles: DS.attr('number'),
	full_name: Ember.computed('first_name','last_name', function(){
		return this.get('first_name') + ' ' + this.get('last_name'); 
	}),
	captalizedFirstName: changeGate('first_name', function(first_name){
		return Ember.String.capiitalize(first_name);
	})
});


