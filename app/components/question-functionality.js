import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShowing: false,
  actions: {
    updateFormShow(){
      this.set('updateFormShowing', true);
    },
    updateQuestion() {
      var params = {
        user: this.get('user'),
        userQuestion: this.get('userQuestion'),
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
