import Ember from 'ember';

export function rentalPopularity(params/*, hash*/) {
  var rental = params[0]; //params is the only object being passed from the parent's each loop, but in form of an array with only 1 object in it.
  if(rental.get('reviews').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');//s a method that allows Ember to render our line of HTML. Ember escapes HTML by default to protect against cross-site scripting vulnerabilities.
  }
}

export default Ember.Helper.helper(rentalPopularity);
