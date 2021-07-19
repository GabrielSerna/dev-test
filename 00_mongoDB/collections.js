db.monthlyBudget.insertMany( [
  { "_id" : 1, "category" : "food", "budget": 400, "spent": 450 },
  { "_id" : 2, "category" : "drinks", "budget": 100, "spent": 150 },
  { "_id" : 3, "category" : "clothes", "budget": 100, "spent": 50 },
  { "_id" : 4, "category" : "misc", "budget": 500, "spent": 300 },
  { "_id" : 5, "category" : "travel", "budget": 200, "spent": 650 }
] );

db.inventory2.insertMany( [
  { _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] },
  { _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] },
  { _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: [ "A", "B" ] },
  { _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: [ "B", "A" ] },
  { _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [ [ "A", "B" ], "C" ] }
] );

db.collection.insertMany( [
  { "_id": 1, "name" : { "first" : "John", "last" : "Backus" } },
  { "_id": 2, "name" : { "first" : "John", "last" : "McCarthy" } },
  { "_id": 3, "name": { "first" : "Grace", "last" : "Hopper" } },
  { "_id": 4, "firstname": "Ole-Johan", "lastname" : "Dahl" },
] );

db.collection.insertMany( [
  { "_id": 1, "name" : { "first" : "John", "last" : "Backus" } },
  { "_id": 2, "name" : { "first" : "John", "last" : "McCarthy" } },
  { "_id": 3, "name": { "first" : "Grace", "last" : "Hopper" } },
  { "_id": 4, "firstname": "Ole-Johan", "lastname" : "Dahl" },
] );

db.players.insert( {
  name: "player1",
  games: [ { game: "abc", score: 8 }, { game: "xyz", score: 5 } ],
  joined: new Date("2020-01-01"),
  lastLogin: new Date("2020-05-01")
} );