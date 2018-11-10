// From outside, we don't have access to the scope below
var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();
/*
* Closure was created. Now, publicTest has access
* to "x" and "add" variables
*/ 


var UIController = (function() {
    // Some code
})();
/*
* Seperation of concerns - having no connection to other nodes
*/


var controller = (function(budgetCtrl, UICtrl) {
    var z = budgetController.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
})(budgetController, UIController);









