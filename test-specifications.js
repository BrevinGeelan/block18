//Unit tests for a function called "multiplication" that returns the product of two input numbers

//Expect multiplication(1, 2) to be a number
//Expect multiplication(1, 2) to be equal to 2
//Expect multiplication(1, 0) to be equal to 0
//Expect multiplication(1, "2") to be an error
//Expect multiplication (1, -2) to be equal to -2


//Unit test for a function called "concatOdds" that takes two arrays and returns a single array that contains only the odd numbers, in ascending order.

//Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be a single array
//Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be an array containing only odd numbers
//Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be in ascending order, starting with -1
//Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15]
//Expect concatOdds([16, 8, 40], [2, 98]) to be an empty array
//Expect concatOdds([2, 4, 6, 8], [1, 2, 3 , 4, 75]) to be [1, 3, 75]
//Expect concatOdds([], []) to be an empty array
//Expect concatOdds(["5", 4, 8], [0, 20]) to be an empty array
//Expect concatOdds([1, 2, "3", 4], [5, 6, 7, 8]) to be [1, 5, 7]


//Functional tests for a cart checkout feature that alllows you to checkout with, or without an account. However, they should be asked if they want to log in / create an account, or continue as a guest..

//Test that users can successfully add items to the shopping cart
//Ensure the shopping cart displays both the items, and total cost.
//Test that users can proceed to checkout from the cart
//Test that users can, in fact, checkout without an account
//Test that when proceeding to checkout, users are prompted to either "Log In or Create an Account" or "Continue as Guest"
//Test that Users can Log In from the prompt
//Test that users are correctly routed to create an account if they chose to do so..
//Test payment processing system
//Ensure receipt is displayed and sent to email if user is logged into an account