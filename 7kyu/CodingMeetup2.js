
// Coding Meetup #2 - Higher-Order Functions Series - Greet developers
// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript

// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

function greetDevelopers(list) {
    // pass list parameter through function

    // loop using forEach 
	list.forEach(item => {
        // each item will have new property greeting with the welcome message
		item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`;
	});

    // return list (array)
	return list;
}

// OR 

// I like the regualr for loop a bit better 

function greetDevelopers(list) {
    for (let i = 0; i < list.length; i++){
        
        list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`;
    
    }
    return list
}