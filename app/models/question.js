import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  userQuestion: DS.attr()
});
