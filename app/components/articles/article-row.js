import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	article: null,
	articleStates: null,

	stateChanged: Ember.observer('article.state', function(){
		console.log('State has changed');
	}),

	actions: {
		saveArticle: function(){
			let article = this.get("article");

			if(article.get("hasDirtyAttributes")){
				this.sendAction("save", article);
			}
		}
	}
});
