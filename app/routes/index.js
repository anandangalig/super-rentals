import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {

    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },

    closeNonActiveUpdateForms(activeRental) {
      //TODO: loop through each rental-tile in index.hbs
      // IF: rental-tile does not correspond to activeRental && has property updateRentalForm
      // set to true
      // THEN: Set that property to false
    },

    update(rental, params) {
      // Object.keys(params).forEach(function(key) {
      //   if(params[key]!==undefined) {
      //     rental.set(key, params[key]);
      //   }
      // });

      for (var keyIndex = 0; keyIndex < Object.keys(params).length; keyIndex++) {
        var paramKeys = Object.keys(params);
        var currentParam = paramKeys[keyIndex];
        var currentParamValue = params[currentParam];
        if (currentParamValue != undefined) {
          rental.set(currentParam, currentParamValue);
        }
      }
      rental.save();
      this.transitionTo('index');
   }
  }
});
