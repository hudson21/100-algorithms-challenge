let user = {
    age: 24,
    name: 'Carlos Hudson',
    magic: true,
    scream: function() {
        console.log('HELLOOOOOOOOOOOOOOOOOOOOOOO!');
    }
};

console.log(user.age); // O(1)
user.spell = 'abra kadabra';// O(1)
user.scream();// O(1)

// When you have a collision it slows down reading and writing  ---> O(n/k) k: size of your hash table

// ES6
const a = new Map();
const b = new Set();