import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
      imageToggle: function() {
        var stateOfImage = this.get('isImageShowing');
        //
        // console.log("stateOfImage");
        // console.log(stateOfImage);
        // console.log("Opposite stateOfImage");
        // console.log(!stateOfImage);
        //
        this.set('isImageShowing', !stateOfImage);

        // if (this.get('isImageShowing') === true)
        // {
        //   this.set('isImageShowing', false);
        // }
        // else
        // {
        //   this.set('isImageShowing', true);
        // }
      },
  }

});
