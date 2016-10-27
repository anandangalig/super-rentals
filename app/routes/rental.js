import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id); //talking to Firabase to find the specific 'rental' given the params.rental_id, then passing it to  child components.
  },
  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },

    update(rental, params) { //received the action trigger + the current rental and it's new params from child component update-rental
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) { //loops thru the keys of the passed in params, checks if it is not undefined(i.e. had new input to update)
          rental.set(key,params[key]); //NOTE: what's in the params[key]? the Value?
        }
      });
      rental.save();
      this.transitionTo('index');
    },

    saveReview(params) { //both the trigger and the params argument coming from new-review child component.
      var newReview = this.store.createRecord('review', params); //creates the new object in Firebase database.
      var rental = params.rental; //due to the one-to-many rel, we are grabbing the given rental associated with the passed in params.
      rental.get('reviews').addObject(newReview); //grabbing all the 'reviews' of the above found rental, and adding the newReview to it.
      newReview.save().then(function() { //saving the newReview first, then saving the rental second via the callback function of the Promise.
        return rental.save();
      });
      this.transitionTo('index');
    }
  }
});
