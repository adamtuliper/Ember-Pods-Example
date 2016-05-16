import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bug', function() {});
  this.route('bugs', function() {
    this.route('details', {
      path: ':bug_id'
    }, 
           function() {
                this.route('comments', {resetNamespace: true}, 
                function() {
                  this.route('new');
                  this.route('edit', {  //bugs/123/1/edit
                      path: ':comment_id/edit'
                  });
                });               
           });
           
    this.route('new');

  });
});

export default Router;
