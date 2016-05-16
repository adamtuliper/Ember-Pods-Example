import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  createdAt: DS.attr('string', {
    defaultValue() { return new Date(); }
  }),
  description: DS.attr('string')
});
