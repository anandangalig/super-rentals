import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageToggle: function() {
      var stateOfImage = this.get('isImageShowing'); //created a new var to gain access to this.get('isImageShowing')
      this.set('isImageShowing', !stateOfImage); //the set function gets: the property being set, then !stateOfImage - means just set it to the opposite boolean.  
    }
  }
});
