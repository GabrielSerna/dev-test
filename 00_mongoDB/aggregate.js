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
// OPERATOR STAGE: $sort, $group
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
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: $push
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.books.aggregate( [
  { $group: {
    _id: { author: '$author' },                                 // group by author
    books: { $push: { titleId: '$_id', copies: '$copies' } },   // create array with fields 'title' and 'copies' for each author
    totCopiesSold: { $sum: '$copies' }                          // sum al num of 'copies' for each author
  } } ] );

//==============================================================================
// 13.
// OPERATOR STAGE: $lookup, $replaceroot, $mergeObjects, $project
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: merge 2 collections, if an obj exists in both collections, merge all informations, otherwise, get only the initial information

db.items.aggregate( [
  { $lookup: {                                    // call another collection
    from: 'orders',                               // specify the external collection
    localField: 'item',                           // choose local field to match
    foreignField: 'item',                         // choose external field to match
    as: 'ordersDetail' }                          // assing name for docs that satisfy the match
  },
  { $replaceRoot: {
    newRoot: {                                                                  // create new field in ROOT
      $mergeObjects: [ { $arrayElemAt: [ '$ordersDetail', 0 ] }, '$$ROOT' ]     // merge all docs from both collections
    } } },
    {
      $project: {
        itemsDetail: 0 } }                        // delete useless fierlds
] );


//==============================================================================
// 14.
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: $mergeObjects
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.sales2.aggregate( [
  { $group: {
    _id: '$item',                                 // group by 'item'
    mergedSales: { $mergeObjects: '$quantity' } } // use $mergeObjects like accumulator. In this case $mergeObject WANTS A OBJECT
  } ] );

//==============================================================================
// 15.
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: $count
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.people.aggregate( [
  { $group: {
    _id: '$age',                                  // group all collection by 'age' (from 20 to 40 => tot 21 ages)
  } },
  { $count: 'docsPassed' }                        // count the number of docs input in this stage
] );

  // return { 'docsPassed': 21 }


//==============================================================================
// 16.
// OPERATOR STAGE: $group, $count
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.people.aggregate( [
  { $match: {                                     // match only age = 40
    age: 40
  } },
  { $count: 'just40' }                            // count number of documents input in this stage 
] );

// return { 'just40': 38 }

//==============================================================================
// 17.
// OPERATOR STAGE: $group
// ACCULUMATOR OPERATOR: $sum
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.people.aggregate( [
  { $group: {
    _id: '$age',
    count: { $sum: 1 }                            // sum total of documents merged
  } } ] );

//==============================================================================
// 18.
// OPERATOR STAGE: $addFields, $project
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: replace value of { '_id': 1 } with the value from { student: 'student name' }

db.scores.aggregate( [
  { $addFields: {
    _id: '$student' } },
    { $project: { student: 0 } }
] )

// return { _id: 'student name' }

//==============================================================================
// 19.
// OPERATOR STAGE: $addFields
// ACCULUMATOR OPERATOR: $concatArrays
// OTHERS OPERATORS: 
// DESCRIPTION: add new field for all documents

db.scores.aggregate( [
  { $addFields: {
    newField: { $concatArrays: ['$homework', [666] ] }
  } } ] );

//==============================================================================
// 20.
// OPERATOR STAGE: $match, %$roup
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 

db.articles.aggregate( [
  { $match: {
    $or: [
      { score: { $gt: 70, $lt: 90 } },            // first condition
      { views: { $gte: 1000 } } ]                 // second condition
    } },
    { $group: {                                   // without this Operator Stage the aggregate return all docs that satisfy conditions
      _id: null, count: { $sum: 1 } } }           // return the number of doc that satisfy conditions
] );

// return { _id: null, count: 5 }

//==============================================================================
// 21.
// OPERATOR STAGE: 
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 



//==============================================================================
// 22.
// OPERATOR STAGE: 
// ACCULUMATOR OPERATOR: 
// OTHERS OPERATORS: 
// DESCRIPTION: 


