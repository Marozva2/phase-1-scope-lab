// Write your solution in this file!

var customerName = 'bob';

// Access global variable
function upperCaseCustomerName(){
    if (customerName){
        customerName = customerName.toUpperCase();
    }
}

//  A variable in global scope
function setBestCustomer(){
    bestCustomer = 'not bob';
}

// Overwrite the above function
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

//
const leastFavoriteCustomer = 'John';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Smith';
}
changeLeastFavoriteCustomer();