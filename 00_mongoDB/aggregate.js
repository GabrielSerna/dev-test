//==============================================================================
// 01. group per age e creo la prop con tutti i nomi divisi per age
db.people.aggregate(
  [
    { $group: { 
      _id: { age: '$age' },
      names: { $push: "$name" }
    } } ] )

//==============================================================================
// 02. group per age e conto quanti documenti hanno quel esatto valore
db.people.aggregate(
  [
    { $group: {
      _id: { age: '$age' },
      count: { $sum: 1 } }
    } ] )