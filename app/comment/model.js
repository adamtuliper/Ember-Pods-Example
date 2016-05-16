import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  createdDate: DS.attr('string'),
  createdBy: DS.attr('string'),
  bug: DS.belongsTo('bug')
});
