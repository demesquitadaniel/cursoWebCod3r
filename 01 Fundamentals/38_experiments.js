let a = 3; // tha 'a' variable is local to this module
// 'a' is not available in the global scope, but it is available in the module
global.b = 123; // 'b' is available in the global scope, but it is not available in the module
// 'this' refers to the current module, so 'this.c' is also available in the module
this.c = 456; // 'this' is the same as 'module.exports' in this context
// 'this' is the same as 'module.exports' in this context, so 'module.exports.c' is also available in the module
this.d = false; // 'module.exports' is the object that will be exported from this module
// 'module.exports' is the object that will be exported from this module
this.e = 'test';  // 'this.e' is also available in the global scope, but it is not available in the module
// 'this.e' is also available in the global scope, but it is not available in the module

console.log(a); // 'a' is not available in the global scope, so it will throw an error if you try to access it
console.log(global.a); // 'a' is not available in the global scope, so it will return undefined
console.log(global.b); // 'b' is available in the global scope, so it will return 123
console.log(this.c); // 'this.c' is available in the module, so it will return 456
console.log(module.exports.c); // 'module.exports.c' is available in the module, so it will return 456
console.log(module.exports.b); // 'module.exports.b' is not available in the module, so it will return undefined
console.log(module.exports === this); // 'module.exports' is the same as 'this' in this context, so it will return true
console.log(module.exports); // { c: 456, d: false, e: 'test' } // why? because 'module.exports' is the object that will be exported from this module
console.log(this.d); // 'this.d' is available in the module, so it will return false
console.log("|||");
//  creating a crazy variable: no var nor let
abc = 2; // avoid this type of creations!!
console.log(global.abc); // 'abc' is available in the global scope, so it will return 2
module.exports = {e:456, f: false, g: 'test'};