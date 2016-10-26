import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(rental) {

      //TODO: Close all other update forms

      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms')
      };
      this.set('updateRentalForm', false);

      //Clear the inputted values after they have been used
      var self = this; //fixing the scope issue by creating this var outside of the forEach loop.
      Object.keys(params).forEach(function(key) {
        self.set(key, "");
      });
      this.sendAction('update', rental, params);
      //SEND TO rental-tile.js
    }
  }
});
