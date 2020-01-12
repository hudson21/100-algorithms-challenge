// Set will get rid of duplicated characters

function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split('');
  const charValues: number[] = [];

  chars.forEach((char: string) => {
    console.log(char.charCodeAt(0))
    charValues.push(char.charCodeAt(0))
  })
  console.log(new Set(charValues));
  console.log(new Set(charValues).size);
  console.log(charValues.length);
  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length -1; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }
  
  return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('zaba'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
