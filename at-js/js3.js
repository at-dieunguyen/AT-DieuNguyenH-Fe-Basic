//Bai 3
function division(str){
  for ( var i = 0; i <= 9; i++){
    var rep = str.replace("*",i);
    if (parseInt(rep) % 3 === 0){
    console.log(rep);
    }
  }
}
division('19*');