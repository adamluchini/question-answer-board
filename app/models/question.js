import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.atttr(),
  text: DS.attr(),
});
