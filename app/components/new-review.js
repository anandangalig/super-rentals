import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
      var params = {
        author: this.get('author'), //STRINGS
        rating: this.get('rating'),
        content: this.get('content'),
        rental: this.get('rental') //NOTE: this is the actual model object passed down from rental.js
      };

      var self = this;
      Object.keys(params).forEach(function(key) {
        self.set(key, ''); //clears the input fields
      });

      this.set('addNewReview', false);//hides the input form
      this.sendAction('saveReview', params); //send to rental with the params attached
    }
  }
});
