//==============================================================================
// 01.
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: group per age e creo la prop con tutti i nomi divisi per age
db.people.aggregate( [
    { $group: { 
      _id: { age: '$age' },         // group by 'age'
      names: { $push: "$name" }     // push all people by the same age
    } } ] );

//==============================================================================
// 02.
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: $sum
// OTHERS OPERATORS: 
// DESCRIPTION: group per age e conto quanti documenti hanno quel esatto valore
db.people.aggregate( [
    { $group: {
      _id: { age: '$age' },
      count: { $sum: 1 } }            // count all docs by the same age
    } ] );

db.people.aggregate(
  [
    { $group: {
      _id: { age: '$age' },
      totalAges: { $sum: '$age' } }   // sum all people's ages
    } ] );
    
//==============================================================================
// 03.
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: $addToSet
// OTHERS OPERATORS: 
// DESCRIPTION: gruppo i documenti in base al giorno e anno, e con $addToSet aggiungo il 
// valore di 'item'degli oggetti che hanno quegli specifici _id
db.sales.aggregate( [
    { $group: {
      _id: { day: { $dayOfYear: '$date' },
      year: { $year: '$date' } },
      itemsSold: { $addToSet: '$item' }
    } } ] );

//==============================================================================
// 04.
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: $avg and $sum
// OTHERS OPERATORS: 
// DESCRIPTION: 
db.people.aggregate( [
    { $group: { _id: '$gender',                   // group by gender
    avgAges: { $avg: '$age' },                    // computing average age of all males/females
    totPeole: { $sum: 1 }                         // computing all doc by the same gender
  } } ] );

//==============================================================================
// 05.
// OPERATOR STAGE: $project
// ACCULUMATOR OPERATOR: $avg
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.students.aggregate( [
  { $project: {                                   // add new fields and return just them
    vgQuiz: { $avg: '$quizzes' },                 // computing average 'quizzes'
    avgLabs: { $avg: '$labs' },                   // computing average 'labs'
    avgexam: { $avg: ['$final', '$midterm'] }     // computing average both 'final' and 'midterm'
  } } ] );

//==============================================================================
// 06.
// OPERATOR STAGE: $sort and $group
// ACCULUMATOR OPERATOR: $first and $last
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.people.aggregate( [
  { $sort: { index: 1 } },                        // sort all docs by 'index'
  { $group: {
    _id: '$age',                                  // group by 'age'
    firstName: { $first: '$name' }                // return the first doc by 'name'
  } } ] );

  db.people.aggregate( [
    { $sort: { index: 1 } },                        // sort all docs by 'index'
    { $group: {
      _id: '$age',                                  // group by 'age'
      firstName: { $last: '$name' }                 // return the last doc by 'name'
    } } ] );

//==============================================================================
// 07.
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: $max
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.sales.aggregate( [ {
  $group: {
    _id: '$item',                                 // group by 'item'
    date: { $max: '$date' }                       // return the doc with the biggest value of 'date'
  } } ] );

//==============================================================================
// 08.
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: $min
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.people.aggregate( [
  { $group: {                                     // group by 'age' and 'name'
    _id: {
      age: '$age',
      name: '$name',
      firstRegistered: { $min: '$registered' }    // return the doc with the lowest value of 'registered'
    } } } ] );

//==============================================================================
// 09.
// OPERATOR STAGE: $project
// ACCULUMATOR OPERATOR: $min
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.students.aggregate( [
  { $project: {                                   // create and return new fields
    minQuiz: { $min: '$quizzes' },                // get the min value from 'quizzes' array
    minLabs: { $min: '$labs' },                   // get the min value from 'labs' array
    minExam: { $min: ['$final', '$midterm'] }     // get the min value both 'final' and 'midterm' arrays
  } } ] );

//==============================================================================
// 10.
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: $push
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.sales.aggregate( [
  { $group: {                                     // group byu 'item'
    _id: { item: '$item', },
    prices: { $push: { price: '$price' } }        // add field 'prices' with all 'price' values for each item
  } } ] );

//==============================================================================
// 11.
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: $push
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.books.aggregate( [
  { $group: {                                     // group by 'author'
    _id: { author: '$author' },
    info: { $push: '$$ROOT' }                     // add field 'info' and push into all doc by the 'author' groupped
  } } ] )

//==============================================================================
// 12.
// OPERATOR STAGE: 
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 



//==============================================================================
// 13.
// OPERATOR STAGE: 
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 




//==============================================================================
// 14.
// OPERATOR STAGE: 
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 



//==============================================================================
// 15.
// OPERATOR STAGE: 
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 




//==============================================================================
// 16.
// OPERATOR STAGE: 
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 



//==============================================================================
// 17.
// OPERATOR STAGE: 
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 




//==============================================================================
// 18.
// OPERATOR STAGE: 
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 



//==============================================================================
// 19.
// OPERATOR STAGE: 
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 


