import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveQuestion() {
      var params = {
        user: this.get('user'),
        userQuestion: this.get('userQuestion'),
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
