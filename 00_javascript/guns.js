// claudio: this is for you. My best "this" explanation.

// declare object weapon1
const weapon1 = {
  kind: 'gun',
  // next 'shoot' is another key of obj weapon1, but I assign a function to that key
  shoot: function() { 
    // beware of 'this': you may think console will print "gun is shooting", isn't it?
    console.log(`1: ${this.kind} is shooting!`);
    console.log(this);
  }
};

// declare object weapon2, same as weapon1 but usign arrow function
const weapon2 = {
  kind: 'shotgun',
  shoot: () => {
    console.log(`2: ${this.kind} is shooting!`);
    console.log(this);
  }
};

// now, let's try both function
console.log('calling weapon1.shoot()...');
weapon1.shoot(); // will print "gun is shooting"
console.log('calling weapon2.shoot()...');
weapon2.shoot(); // will print "undefined" is shooting

// row 24 print "GUN..." because "this" refers to weapon1.
// row 25 print "UNDEFINED..." because "this" refers to undefined

console.log('=================================');
const hero = {
  name: 'Robocop',
  kind: 'Metal super policeman',
  attack1: weapon1.shoot,
  attack2: weapon2.shoot,
};

console.log('calling hero.attack1()...');
hero.attack1();
console.log('calling hero.attack2()...');
hero.attack2();

//
const PowerHero = {
  name: 'Batman',
  saySomething: (text) => {
  console.log(`Hey I'm Batman and I want to say: ${text}`);
  console.log(this)
  },
  // say33: () => saySomething(33)
}

PowerHero.saySomething(33);
// PowerHero.say33();

var service = {

  constructorFn : function(){

      console.log(this); //  refers to service as service object used to call method.

      var nestedFn = function(){
          console.log(this); // refers window or global object because no instance object was used to call this method.
      }
      nestedFn();
  },
  
  arrowFn : function(){
    console.log('ciao')
      console.log(this); // refers to service as service object was used to call method.
      let fn = () => console.log(this); // refers to service object as arrow function defined in function which is called using instance object.
      fn();
  } 
}

service.constructorFn();
service.arrowFn();

// Understand THIS inside normal functions:
console.log('==========================================================================');
console.log('HOW "THIS" WORKS INSIDE NORMAL FUNCTIONS');
console.log('==========================================================================');
const test = 'Variable TEST from outside';
function person(name) {
  const test = 'Variable inside function person';
  console.log('==========================================================================');
  console.log(`Hi, my name is ${name}. Now I print the "this" object for me:`);
  console.log(this);
  console.log('So now I print the value of the variable named "test" for me:')
  console.log(this.test);
};
person('Luca');

const family = {
  familyName: 'Mazzilli',
  newPerson: person,
  test: 'Variable inside object family'
};
family.newPerson('Lele');

const people = {
  location: 'worldwide',
  newFamily: family.newPerson,
  test: 'Variable inside object family'
};
people.newFamily('Samuel');

// Understand THIS inside arrow functions:
console.log('==========================================================================');
console.log('HOW "THIS" WORKS INSIDE ARROW FUNCTIONS');
console.log('==========================================================================');
// const test = 'Variable TEST from outside, using CONST';
// but if I declare the variabile using var... (var make the variable in the global context)
var test = 'Variable TEST from outside, using VAR';

const person = (name) => {
  const test = 'Variable inside function person';
  console.log('==========================================================================');
  console.log(`Hi, my name is ${name}. Now I print the "this" object for me:`);
  console.log(this);
  console.log('So now I print the value of the variable named "test" for me:')
  console.log(this.test);
};
person('Luca');



const family = {
  familyName: 'Mazzilli',
  newPerson: person,
  test: 'Variable inside object family'
};
family.newPerson('Lele');

const people = {
  location: 'worldwide',
  newFamily: family.newPerson,
  test: 'Variable inside object family'
};
people.newFamily('Samuel');