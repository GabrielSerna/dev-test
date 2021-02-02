var x = 0;
for(x = 0; x < 10; x++){
  if(x == 4){
    break;
  }
  console.log(x);
}
console.log("------------------");
for(x = 0; x < 10; x++){
  if(x == 4){
    continue;
  }
  console.log(x);
}