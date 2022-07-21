// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// https://www.codewars.com/kata/5827acd5f524dd029d0005a4/javascript

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.

function isRubyComing(list) {
    let isRubyDev = false
    for (let i = 0; i < list.length; i++)
      if (list[i].language === 'Ruby') {
        return true
      } 
    return isRubyDev
}


//   OR 

function isRubyComing(list) {
    return list.some(dev => dev.language === 'Ruby');
}