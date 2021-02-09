// COSTRUTTI - ESEGUIRE IL CODICE n VOLTE
// ( definito o indefinito )
//FOR ( n definito )
//FOR LOOP    INIZIARE| ARRIVO| STEP
var car = ['Mercedes','Bmw','Fiat','Citroen'];
var carObj = [
  {marca : 'Mercedes',  colore : 'Rosso'},
  {marca : 'Bmw',       colore : 'Giallo'},
  {marca : 'Citroen',   colore : 'Blu'}];
  
for(let x = 0;x < car.length;x++){
  console.log(car[x]);
}
//FOR-OF LOOP - VALORI
for(const el of car){
  console.log(el);
}
//FOR-IN LOOP - KEY
for(const c in carObj[0]){
  console.log(c);
}

for(const objElement of carObj){
  for(const c in objElement){
    console.log(c + ":" + objElement[c]);
  }
}