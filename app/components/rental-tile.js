import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
      imageToggle: function() {
        var stateOfImage = this.get('isImageShowing');
        this.set('isImageShowing', !stateOfImage);
      },
      delete(rental) {
        if(confirm('Are you sure?')){
          this.sendAction('destroyRental', rental);
        }
      }
  }

});
