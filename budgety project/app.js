// From outside, we don't have access to the scope below
var budgetController = (function() {
    
    // Some code

})();


var UIController = (function() {
    
    // Some code
    
})();
/*
* Seperation of concerns - having no connection to other nodes
*/


var controller = (function(budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function() {
        // 1. Get the field input data

        // 2. Add the item for the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        
    }
    
    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            ctrlAddItem();
        }
    })


})(budgetController, UIController);












