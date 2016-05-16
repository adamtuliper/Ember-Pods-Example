import Ember from 'ember';

export default Ember.Route.extend({
    
     save: function(model) {
            console.log(model);
            console.log('save called in comments/new');
            model.save().then((comment) => {
                console.log("saved to back end");
                console.log(comment);
                //do I need an ID here or is it smart enough?
                this.transitionTo('commments');
            }, function (error) {
                console.log("error found in the controller");
                console.log(error.message);
            })
            .catch(function (error) {
                console.log("'catch'");
                console.log(error);
                //controller.send('wakeUpDevs', error);
            });

            return false; //return true causes a bubble up
        },
        cancel() {
            console.log('cancel called in controllers/comments/new');
              this.transitionTo('commments');
            return false;
        },
        delete(){
             var model =  this.modelFor('bugs/details');
            console.log('deleting model:' + model);
            
        //     
        //     //destroyRecord persists deletion (delete needs a save() after it)
        //    var _this = this;
        //     this.modelFor('bugs/details').destroyRecord().then(function(model){
        //         //delete then transistion back, otherwise local collection still may have it 
        //         //we could try to             this.store.removeObject(model) but lets let it work.
        //         console.log(model);
        //         console.log('bug deleted');
        //          this.transitionTo('bugs.details');         
        //     }, 
        //     
        //     function(response) {
        //         console.log('bug not  deleted');
        //         console.log(response);
        //     });
        //     //this.get('model').delete().then()
        //     return false;
        },
        error: function (error, transition) {
            // handle the error
            console.log("error found in the controller");
            console.log(error.message);
            // retry the transition
            transition.retry();
        }
        
});
