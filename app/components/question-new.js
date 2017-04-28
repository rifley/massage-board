import Ember from 'ember';

export default Ember.Component.extend({
  questionFormShowing: false,
  actions: {
    questionFormShow(){
      this.set('questionFormShowing', true);
    },
    saveQuestion() {
      var params = {
        user: this.get('user'),
        userQuestion: this.get('userQuestion'),
        additionalNote: this.get('additionalNote'),
      };
      this.set('questionFormShowing', false);
      this.sendAction('saveQuestion', params);
    },
  }
});
