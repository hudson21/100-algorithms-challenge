// reference type
var object1 = { value: 10 };
var object2 = object1; // obect1 === object2 true
var object3 = { value: 10 };

// context vs scope
const object4 = {
    a: function() {
        console.log(this);
    }
};

// object4.a();
// console.log(this);

// instantiation
class Player {
    constructor(name, type) {
        console.log('Player', this);
        this.name = name; 
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I am ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        console.log('Wizard', this); 
        super(name, type);
    }

    play() {
        console.log(`WEEEEEEEEEEE I am ${this.type}`);
    }
}

const wizard1 = new Wizard('Carlos Hudson', 'Healer');
const wizard2 = new Wizard('Tom Holland', 'Dark Magic');
// wizard1.introduce();