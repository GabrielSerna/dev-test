// COSTRUTTI - ESEGUIRE IL CODICE n VOLTE
// ( definito o indefinito )

//WHILE ( n indefinito )
//WHILE LOOP
var cicloAttivo = true;
var c = 0;
while(cicloAttivo){
     console.log(Math.random() + ''); 
     c++;
     if(Math.random() >= 0.5){
         cicloAttivo = false;
     }
}
//DO WHILE
var x = 0;
do {
  x++;
  console.log(x);
}while(x < 5)