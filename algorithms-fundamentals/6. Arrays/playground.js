const strings = ['a', 'b', 'c', 'd'];

//push 
strings.push('e'); // O(1)

//pop
strings.pop(); // O(1)
strings.pop(); 

//shift
strings.unshift('x'); // O(n) We are looping to reassign the indexes inside of the array

//splice
strings.splice(2, 0, 'alien'); // O(n) 

function insertElement(word, position) {
  strings.splice(position, 0, word);
  return strings;
}

function lookElement(position) {
    return strings[position];
}
//console.log(strings);

console.log(insertElement('Carlos Hudson', 3));
console.log(lookElement(1));