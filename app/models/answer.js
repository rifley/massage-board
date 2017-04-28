import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  userAnswer: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
