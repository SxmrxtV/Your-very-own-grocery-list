var rsl = require('readline-sync');
var gList = [];

//function to add an item to the array 
function arrAdd(list, Item) {
    list.push(Item);
    return list;
}

var intro = "Welcome dear user, currently your grocery list is"
console.log(intro + " empty");
var num = rsl.question("How many item would you like to add? ");

//the loop to keep adding items to the array
for (i=0; i<num; i++) {
    var item = rsl.question("What would you like to add: ")
    gList=arrAdd(gList,item);
}
console.log("Your final list is: " + gList);
console.log("Thank you for using our services")