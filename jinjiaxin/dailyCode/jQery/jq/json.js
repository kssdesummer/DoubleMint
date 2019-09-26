"use strict"

var xiaoming = {
    name:"xiaoming",
    age: 14,
    gender: true,
    height: 1.65,
    grad: null,
    "middle-school" : "\"w3c\" middle school",
    skills : ['js','java','python']
};
var s = JSON.stringify(xiaoming, null,' ');
// console.log(s);
function convert(key,value) {
    if (typeof value === 'string'){
        return value.toUpperCase();
    }
    return value;
                                            convert
}
var a = JSON.stringify(xiaoming,convert,' ');
console.log(a);
                     JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45