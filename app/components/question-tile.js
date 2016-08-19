import Ember from 'ember';

export default Ember.Component.extend({
  timesAnswered: Ember.computed('question.answers', function() {
    var numberTimesAnswered = this.get('question.answers').get('length');
    // console.log(.get('length'))
    if (numberTimesAnswered <= 1) {
      return ' nobody has answered this yet';
    // } else if (length === 0) {
    //   return "0 answers";
    }
    else {
      return ' answers submitted: ' + numberTimesAnswered;
    }
  })

});
