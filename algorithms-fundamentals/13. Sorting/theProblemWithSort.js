const letter = ['a', 'd', 'z', 'e', 'r', 'b'];
const basket = [2, 5, 12, 4, 6, 2, 32, 25, 12];

const spanish = ['cosas', 'hola', 'armadillo', 'fútbol', 'jungla'];

// a -b --> ascendent
// b -a --> descendent
basket.sort(function(a, b) {
  return b - a;
})

spanish.sort(function(a, b) {
  return a.localeCompare(b);
});

console.log(basket);