/*
step 1:
1. O(1)
2.O(n)
3. O(1)
4.O(n^3)
5.O(n)
6.O(n)
7.O(nlog(n))
8. O(2^n)
9.O(1)
10. O(n^2)
*/
function logUpTo(n) { // => O(n)
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
function logAtLeast10(n) { // => O(n)
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }
  function onlyElementsAtEvenIndex(array) { // O(n)
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  function subtotals(array) { // O(n^2)
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }
  function vowelCount(str) { // O(n)
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }
/*
True or false: n^2 + n is O(n^2). T
True or false: n^2 * n is O(n^3). T
True or false: n^2 + n is O(n). F
What’s the time complexity of the .indexOf array method?     O(n)
What’s the time complexity of the .includes array method?    O(n)
What’s the time complexity of the .forEach array method?    O(n)
What’s the time complexity of the .sort array method?    O(nlogn)
What’s the time complexity of the .unshift array method?    O(n)
What’s the time complexity of the .push array method?    O(n)
What’s the time complexity of the .splice array method?    O(n)
What’s the time complexity of the .pop array method?     O(1)
What’s the time complexity of the Object.keys() function?     O(n)
*/