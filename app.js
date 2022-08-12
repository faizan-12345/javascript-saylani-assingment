// reverse a passed string
function rev() {
    var x = document.getElementById("reverse").value;
    var res = "";
    for (i = x.length-1; i>=0; i--) {
  res+= x[i];
}alert(res);
  }

// check string is a plaindrome or not
function check() {
  var x = document.getElementById("palindrome").value;
  var res = "";
  for (i = x.length-1; i>=0; i--) {
res+= x[i];
  }
  if (x===res) {
    alert("such string is a palindrome");
  } else {
      alert("such string is not a palindrome");
  }
}

// generating combination of strings
function combination(str) {
  var listOfString = [];
  for (var i = 0; i < str.length; i++) {
       for (var j = i+1; j < str.length+1;j++) {
          listOfString.push(str.slice(i,j));
       }
  } return listOfString;
} console.log(combination("dog"));

// Sort Letters in Alphabetical Order
function alphaSort (alpha) {
  var x = alpha.split("");
  return x.sort().join("");
} console.log(alphaSort("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function capLetter2(cap) {
  var string = cap;
  var first = string.charAt(0);
  var remaining = string.slice(1);
  var final = first.toUpperCase() + remaining;
  console.log(final); 
}
capLetter2("how are you");

// count the number of vowels in a string 
function vowelCount (str) {
  var count = 0;
  var vowels = "aeiou";
  for (var i = 0; i < str.length; i++) {
     if (vowels.indexOf(str[i].toLowerCase()) > -1) {
        count++
     }
  }
  return "This string has " + count + " vowels in it."
}   console.log(vowelCount("The quick brown fox"));

//  checking number is a prime number or not 
function prime() {
  var user = +prompt("write a number");
  if (user=== 1 || user === -1 ) {
      console.log("this can not be a prime number");
  } else {
    for (var i = 2; i < user; i++) {
          if (user%i === 0) {
             var result = user + " is not a prime number";
             break;
          } else {
            var result = user + " is a prime number"
            break;
          }
    }
  } 
  console.log(result);
}

// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively
function array () {
  var myArr = [11,12,13,14,15,]
  console.log("second smallest number is " + myArr[1]);
  console.log("second largest number is " + myArr[3]);
}