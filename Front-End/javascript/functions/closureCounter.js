// a closure is a function that retain access acess to variable from its outer scope even if outer function has finished execution

// create counter function using hof and closure

function counter() {
  let c = 0;

  return function () {
    c++;
    console.log(c);
  };
}

// counter()();
// counter()();  calling entier function  agin and again
// counter()();

let returncounter = counter();
returncounter();  
returncounter();  // calling returned function 
returncounter();
returncounter();
