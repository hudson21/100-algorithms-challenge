const basket = ['apples', 'grapes', 'pears']; // A simple array

/*
Pseudo Code
linked List: apples --> grapes --> pears

apples
8947 --> grapes
         8742 --> pears
                  372 --> null
                  
*/

// -------------------- Pointer(A reference to an object

// The reference of obj1 as soon as it is not pointed by obj2 it is garbage collected

let obj1 = { a: true };
let  obj2 = obj1;
obj1.a = 'booya';
delete obj1;
console.log('1', obj1);
console.log('2', obj2);