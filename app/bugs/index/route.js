import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('bug');
    },
    actions: {
        loading(transition, originRoute) {
            console.log('loading transition');
            console.log(originRoute);
            //let controller = this.controllerFor('bugs');
        
            //controller.set('currentlyLoading', true);
            transition.promise.finally(function () {
                console.log('done loading');
                //controller.set('currentlyLoading', false);
            });
        },
        error(error, transition) {
            if (error) {
                console.log('error substate hit');
                console.log(error);
                console.log(transition);
                return this.transitionTo('bugs.error');
            }
        }
    }
});
