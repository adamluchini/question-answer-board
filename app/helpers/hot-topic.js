import Ember from 'ember';

export function hotTopic(params) {
  var question = params[0];

  if(question.get('answers').get('length') > 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span> <span class="glyphicon glyphicon-fire"></span> <span class="glyphicon glyphicon-fire"></span>');
  } else if(question.get('answers').get('length')> 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>')
  } else {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-ice-lolly"></span>');
  }
}

export default Ember.Helper.helper(hotTopic);
