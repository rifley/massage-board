import Ember from 'ember';

export default Ember.Component.extend({
  answerFormShowing: false,
  actions: {
    answerFormShow() {
      this.set('answerFormShowing', true);
    },
    saveAnswer() {
      var params = {
        user: this.get('user'),
        userAnswer: this.get('userAnswer'),
        question: this.get('question')
      };
      this.set('answerFormShowing', false);
      this.sendAction('saveAnswer', params);
    },
  }
});
