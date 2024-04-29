// Uppercase const?

// Examine the following code:

// const birthday = '18.04.1982';

// const age = someCode(birthday);
// Here we have a constant birthday for the date, and also the age constant.

// The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

// Would it be right to use upper case for birthday? For age? Or even for both?

// const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

// const AGE = someCode(BIRTHDAY); // make age uppercase?


//solution

//By reading that given article i concluded my knowledge about UpperCase Constants that when declaring a variable by using let or const, doesnot matter, We actually use Given UpperCase Constant when values of particular variable is hard coded i.e predefined before the execution of code , we can use uppercase constant .

//here In above Code as :-
// const BIRTHDAY = '18.04.1982';  // a hardcode value is given to variable, so it is right that we can use here UpperCase Variable with const keyword.

// consider this line of code, const AGE = someCode(BIRTHDAY); // make age uppercase?
//It seems that value of Age is calculated when the code is executed rather than predefined  so it is not good practice to use UpperCase Constants here , we can use here lowercase constants. 
// as well as it is better to declare age variable with let, b/c age's value can be modified on daily basis as a day passed. However, in the provided context, AGE is calculated once based on the birthday and doesn't change during the execution of the program. So, using const for AGE is appropriate here.
