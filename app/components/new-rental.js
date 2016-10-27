import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    saveRental1() {
      var params = {
        owner: this.get('owner'), // left side of the : are the keys of the params object(array like). 
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms')
      };
      this.set('addNewRental', false); //hides the input form back

      this.set('owner', ''); //these clear the input fields
      this.set('city', '');
      this.set('type', '');
      this.set('image', '');
      this.set('bedrooms', '');

      this.sendAction('saveRental2', params); //sends saveRental2 action to parent index with the inputted params.
    }
  }
});
