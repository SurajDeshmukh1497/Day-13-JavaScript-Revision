

// const Object = {
//     name: "suraj",
//     age: 45
// }

// var obejct = new Object()
// var object = obejct()
// var object = Object.create(null);

// const orgObject = { company: 'XYZ Corp'};
// const carObject = { name: 'Toyota'};
// const staff = Object.assign({}, orgObject, carObject);

// // invoke function

// function

// invite.call()
// inviteapply(employee1, ["Hello", "How are you?"]) 
// Invokes the function with a given this value and allows you to pass in arguments as an array

// Bind: returns a new function, allowing you to pass any number of arguments
// invite.bind


// JSON
// JSON.stringify(object);
// JSON.parse(text);

// array
let array = [1,2,3,4,5,6];
let array1 = array.slice(0,2);
let array2 = array.slice(2, 3);
console.log(array2)


// 0 == false   // true
// 0 === false  // false
// 1 == "1"     // true
// 1 === "1"    // false
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false
// NaN == NaN or NaN === NaN // false
// []==[] or []===[] //false, refer different objects in memory
// {}=={} or {}==={} //false, refer different objects in memory


// const arrowFunc1 = (a, b) => a + b; // Multiple parameters
// console.log (arrowFunc1)

function somemethod() {
    console.log(counter1); // undefined
    console.log(counter2); // ReferenceError
    var counter1 = 1;
    let counter2 = 2;
  }

somemethod();

(function () {
    // logic here
  })();

let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);


Memoization 
// is a functional programming technique 
// which attempts to increase a function’s performance 
// by caching its previously computed results. 



// Save data to sessionStorage
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();

// How do you receive server-sent event notifications
if (typeof EventSource !== "undefined") {
    var source = new EventSource("sse_generator.js");
    source.onmessage = function (event) {
      document.getElementById("output").innerHTML += event.data + "<br>";
    };
  }

  //nestedt call back
  loadScript("/script1.js", function (script) {
    console.log("first script is loaded");
  
    loadScript("/script2.js", function (script) {
      console.log("second script is loaded");
  
      loadScript("/script3.js", function (script) {
        console.log("third script is loaded");
        // after all scripts are loaded
      });
    });
  });

  function submit() {
    document.forms[0].submit();
  }
  