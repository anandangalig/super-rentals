import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if(confirm('Are you sure?')){
        this.sendAction('destroyRental', rental); //sends 1 up to parent rental
      }
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
     //sends 1 up to parent rental
    }
  }
});
