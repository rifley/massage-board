import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    saveAnswer(params){
      console.log(params);
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    },
    deleteQuestion(question){
      if(confirm("Are you sure you want to delete this awesome question?")) {
        console.log(question);
        question.destroyRecord();
        this.transitionTo('index');
      }
    },
  }
});
