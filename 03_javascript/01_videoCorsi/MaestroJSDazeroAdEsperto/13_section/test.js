/*==============================================================================
@video       
@argument    
@comands     
@notes       
*/

let ex = () => {



}
ex();

/*==============================================================================
@video       144
@argument    Error handling (intro)
@comands     try {} catch () {}
@notes       
*/

let ex144 = () => {

  // funzione che genera un loop infinito, quindi un errore
  function fn() {
    fn();
  }

  // creo un TRY, dove inserisco il codice che può generare un errore in modo da
  // poterlo gestire laddove si presenti, inoltre il codice va avanti
  try {
    fn();
  } catch (err) {
    console.error(`error found - ${err}`);
  }

  console.log('fatto!');
}
// ex144();

/*==============================================================================
@video       145
@argument    Error handling - throw new - blocco finally
@comands     try { throw } catch () {}
@notes       
*/

let ex145 = async () => {

  // funzione che genera un loop infinito, quindi un errore
  function fn() {
    fn();
  }

  // creo un TRY, dove inserisco il codice che può generare un errore in modo da
  // poterlo gestire laddove si presenti, inoltre il codice va avanti
  try {
    const animals = [1, 2, 3, 4, 5];
    if ( !animals || animals.length === 0 ) throw (`errore catturato con 'throw`);
  } catch (err) {
    console.error(`error found - ${err}`);
  } finally {
    console.log('viene sempre eseguito');
  }

  console.log('fatto!');

}
ex145();

