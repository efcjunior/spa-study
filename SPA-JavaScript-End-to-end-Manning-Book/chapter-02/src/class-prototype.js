var proto = {
    sentence: 4,
    probation:2
};

/*var Prisoner = function(name, id){
    this.name = name;
    this.id = id;
}

Prisoner.prototype = proto;

var prisoner1 = new Prisoner('Everson','12A');
console.log(prisoner1.sentence);*/

var makePrisoner = function(name, id){
    var prisoner = Object.create(proto);
    prisoner.name = 'Everson';
    prisoner.id = '12A';
    return prisoner;
}

var prisoner1 = makePrisoner('everson', '12a');
console.log(prisoner1.sentence);
console.log(prisoner1.__proto__.sentence);


console.log(prisoner1.sentence);
console.log(prisoner1);
console.log(prisoner1.__proto__.sentence);

prisoner1.__proto__.sentence= 15;
console.log(prisoner1.sentence);
console.log(prisoner1);
console.log(prisoner1.__proto__.sentence);
