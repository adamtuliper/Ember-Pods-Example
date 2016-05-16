import Ember from 'ember';

export default Ember.Route.extend({
    model()
    {
        return this.modelFor('bugs/details').get('comments');
    },
    actions:
    {
        delete(model)
        {
            //this gets the bug
            //var model = this.modelFor('bugs/details');
            
            
            //how to get the current child?
            //model = this.modelFor('bugs/1/comments/index');
            //console.log(model.get('description'));
            console.log('deleting comment');
            console.log(model);
           // var model = this.modelFor('comments/index');
           // console.log(model);
           model.destroyRecord();
        }
    }
});
