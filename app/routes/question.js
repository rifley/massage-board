import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    saveAnswer(params){
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
        var answer_deletions = question.get('answers').map(function(answer){
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function(){
          return question.destroyRecord();
        });
        this.transitionTo('index');
      }
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(key=>{
        if(params[key]!==undefined){
          question.set(key, params[key]);
        }
      });
      question.save();
    }
  }
});
