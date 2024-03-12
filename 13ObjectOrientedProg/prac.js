//Constructor function And The New Operator

const herson = function (name, birthname) {
  this.name = name;
  this.birthname = birthname;
};

const p1 = new herson("Real", 1920);
console.log(p1); //new keyword
//herson { name: 'Real', birthname: 1920 }

console.log(p1 instanceof herson); //true



