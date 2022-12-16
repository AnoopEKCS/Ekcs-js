// Take age input from the user and check if he is eligible for a driving liscence.
// Take name input from the user and check if his first character is a if it is a then say its a or else say its not a


// age = Number(prompt('Please enter here your age'));
// if(age < 18){
//     alert("You are not eligible for the Liscence")
// }else{
//     alert("You are eligible")
// }


// var user = prompt("Please enter your Name"); //Here I am facing case senstivity prob
// if(user[0].toLocaleUpperCase() == "A"){
//     alert("First letter of your name is A");
// }else{
//     alert("First letter of your name is not A")
// }



// var names = ["Anoop", "Suheer", "Rahul"];
// //var all = names.length;
// for (var i = 0; i < names.length; i++)
// console.log(names[i]);


var names = [];   
sum = 0;
for (var i = 0; i < 3; i++) {  
  // names.push(prompt('Enter Name' + (i+1))) 
  var inp = parseInt(prompt('Enter Numbers' + (i+1)))
  names.push(inp);
  sum += inp;
  console.log(sum); 
}

//console.log(sum); 
