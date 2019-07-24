// app/routes/posts/new.js
import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.find('post', params.slug)
  }
});