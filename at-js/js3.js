//Bai 3
function division(str){
  var arr = [];
  for ( var i = 0; i <= 9; i++){
    var rep = str.replace("*",i);
    if (parseInt(rep) % 3 === 0){
    rep = parseInt(rep);
    arr.push(rep);
    }
  }
  return arr;
}



