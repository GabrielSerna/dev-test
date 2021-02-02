var c = "5";

function generiamoErrore(){
  throw { msg : "genera errore"};
}


try{
  var m = c + 5;
  generiamoErrore();
  m;
}catch(error){
  console.log(error.msg);
}