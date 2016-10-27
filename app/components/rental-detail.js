import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if(confirm('Are you sure?')){
        this.sendAction('destroyRental', rental); //sends 1 up to parent rental
      }
    }

    destroyReview(review) {
      this.sendAction('destroyReview', review); //2nd time beind passed up, now to rental
    }
  }
});
