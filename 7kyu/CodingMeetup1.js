// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

// will use filter method to filter specific requirements 

// pass list parameter thru function
function countDevelopers(list) {
    // return list and filter for langauge and continet properties from the object
    return list.filter(dev => dev.language === 'JavaScript')
    .filter(dev => dev.continent === 'Europe' )

    // return the lenght of the array which returns an integer (here would be # of devs that meet filter)
    .length
}