'use strict';

var util = require('util');

module.exports = {
  hack: hack,
  babble: babble
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
  Param 3: The nickname of your childhood best friend's sheep
 */

 function babble(req, res) {
   var babbles = [
      "what is this arg stuff, you're not a pirate.",
      "My grandpa started walking 5 miles a day when he was 63. Now he's 90 and we have no idea where the hell he is.",
      "// this is a comment without caps",
      " // tHis is a comment with one cap in the wrong place",
      "I have a pet squid named Leonard Nimoy",
      "Leonard Nimoy wasn't amused; #willTheRealLeonardPleaseStandUp",
      "Sorry to hear about Leonard. Too soon?"
   ];

   var numBabbles = babbles.length;
   var chosenBabble = Math.floor(Math.random() * numBabbles);
   res.json(babbles[chosenBabble]);
 }

 function rot13(c) {
    return c.replace(/([a-m])|([n-z])/ig, function($0,$1,$2) {
        return String.fromCharCode($1 ? $1.charCodeAt(0) + 13 : $2 ? $2.charCodeAt(0) - 13 : 0) || $0;
    });
}

function hack(req, res) {
  var response = 'athon';

  // Do a double rot 13 to secure the return results. Twice as secure as a single rot 13.
  // should make up for lack of ssh...

  // Could have done a single rot 26, but that's a little hard core...

  var slightyEncrypted = rot13(response);
  var massivelyEncrypted = rot13(slightyEncrypted);

  res.json(massivelyEncrypted);
}
