//js1
function sum(a, b) {
  if (a === b) {
    return 3 * (a + b);
  }
  return a + b;
}
console.log(sum(1, 2))
//js2
function ex2(a) {
  if (a > 19) {
    return 3 * (a - 19);
  }
  return 19 - a;
}
console.log(22);
//js3
function divisionThree(str) {
  var arr = [];
  for (var i = 0; i <= 9; i++) {
    var rep = str.replace("*", i);
    if (parseInt(rep) % 3 === 0) {
      rep = parseInt(rep);
      arr.push(rep);
    }
  }
  return arr;
}
console.log(divisionThree('19*'));
//js4
function divisionSix(str) {
  var arr = [];
  for (var i = 0; i <= 9; i++) {
    var rep = str.replace("*", i);
    if (parseInt(rep) % 6 === 0) {
      rep = parseInt(rep);
      arr.push(rep);
    }
  }
  return arr;
}
console.log(divisionSix('19*'));
