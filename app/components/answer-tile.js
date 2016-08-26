import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
  addToFavorites(answer) {
    this.get('favorites').add(answer);
    },
  }
});
