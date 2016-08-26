import Ember from 'ember';

export default Ember.Component.extend({
  timesAnswered: Ember.computed('question.answers', function() {
    var numberTimesAnswered = this.get('question.answers').get('length');
    if (numberTimesAnswered === 0) {
      return ' nobody has answered this yet';
    }
    else {
      return ' answers submitted: ' + numberTimesAnswered;
    }
  })
});
