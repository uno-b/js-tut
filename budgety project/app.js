// From outside, we don't have access to the scope below
var budgetController = (function() {
    
    // Some code

})();


var UIController = (function() {
    
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn"
    }

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, 
                // Will be either inc or exp

                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    };
    
})();
/*
* Seperation of concerns - having no connection to other nodes
*/

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMStrings();

    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getinput();
        console.log(input);

        // 2. Add the item for the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }
    
    document.querySelector(DOMStrings.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            ctrlAddItem();
        }
    })


})(budgetController, UIController);












