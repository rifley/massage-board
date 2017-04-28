import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShowing: false,
  actions: {
    updateFormShow(){
      this.set('updateFormShowing', true);
    },
    update(question) {
      var params = {
        user: this.get('user'),
        userQuestion: this.get('userQuestion'),
        additionalNote: this.get('additonalNote'),
      };
      this.set('updateFormShowing', false);
      this.sendAction('saveQuestion', params);
    },
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    }
  }
});
