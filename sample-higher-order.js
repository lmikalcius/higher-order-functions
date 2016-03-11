/* function noisy(func) {
  return function(arg) {
    console.log("calling function with", arg.toString());
    var valueReturned = func(arg);
    console.log("called function and got", valueReturned.toString());
  }
}

var square = function(num) { 
  return num *= num; 
};

noisy(square)(4); */


function noisyMultipleArgs(func) {
  return function(args) {
    console.log("calling function with", args.toString());
    var valueReturned = func.apply(null, args);
    console.log("called function and got", valueReturned.toString());
  }
}

function add(num1, num2) {
  return num1 + num2;
}

noisyMultipleArgs(add)([1, 2]);



/* function unless(test, then) {
  if (!test) then();
}

for (var i = 0; i < 5; i++) {
  unless(i % 2 === 0, function() {
    console.log(i.toString(), "is not even");
  });
} 

function repeat(times, body) {
  for (var i = 1; i <= times; i++) {
    body(i);
  }
}



repeat(4, function(num) {
  console.log(num * 10);
})

repeat(6, function(i) {
  unless(i % 2, function() {
    console.log(i.toString(), "is even")
  })
}); */
