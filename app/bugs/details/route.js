import Ember from 'ember';

export default Ember.Route.extend({
    
    actions:
    {
        save: function(model) {
            console.log(Ember.inspect(model) );
            console.log('save called in /bugs/new');
            model.save().then((bug) => {
                console.log("saved to back end");
                console.log(Ember.inspect(bug));
                this.transitionTo('bugs');
            }, function (error) {
                console.log("error found in the controller");
                console.log(error.message);
            })
            .catch(function (error) {
                console.log("'catch'");
                console.log(error);
            });

            return false; //return true causes a bubble up
        },
        cancel() {
            console.log('cancel called in /bugs/new');
            this.transitionTo('bugs');
            return false;
        },
        error: function (error, transition) {
            // handle the error
            console.log("error found in the controller");
            console.log(error.message);
            // retry the transition
            transition.retry();
        }
    }
});
