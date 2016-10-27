import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({ //hashing = associative table of both tables; now both accessible from
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    saveRental3(params) { //params are passed up from the child component new-rental with the action saveRental2(which is called saveRental3 here).
      var newRental = this.store.createRecord('rental', params); // this directly talks to the Firebase and creates the rental in the database.
      newRental.save();
      this.transitionTo('index'); //re-renders the index page
    }
  }
});
