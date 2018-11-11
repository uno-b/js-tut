// Budget Controller
// From outside, we don't have access to the scope below
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

})();

var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
};

// UI Controller
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
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMStrings: function() {
            return DOMstrings;
        }
    };
})();
/*
* Seperation of concerns - having no connection to other nodes
*/

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

        document.addEventListener("keypress", function(event) {
            if (event.keyCode === 13) {
                ctrlAddItem();
            }
        });
    };
    
    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getinput();

        // 2. Add the item for the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    return {
        init: function() {
            console.log("Application has started.");
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();










