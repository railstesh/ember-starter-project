import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  slug: DS.attr("string"),
  // tags: DS.hasMany('tags'),
  description: DS.attr("string"),
  // tagString: DS.attr("string"),
  answers: DS.attr(),
  post_id: DS.attr('number')
});
