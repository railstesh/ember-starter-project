import Component from '@ember/component';
import { set } from '@ember/object';
import { alias } from '@ember/object/computed';



export default Component.extend({
	id: alias('post.id'),
	description: null,
	store: Ember.inject.service(),

	actions: {
		saveAnswer() {
			let post = this.store.createRecord('post', {
			  description: this.get('description'),
			  post_id: this.get('id')
			});

			post.save();
			this.set('description', null)
		}
	}


});
