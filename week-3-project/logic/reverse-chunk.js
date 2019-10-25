/* reverse a string

  reverse the order of words in a string.
  a word is anything with spaces on either side of it

  the spaces, tabs and newlines stay put
*/


const reverseChunkTests = [
  { name: 'first', args: [' plug (play!)'], expected: ' (play!) plug' },
  { name: 'second', args: [' --   - '], expected: ' -   -- ' },
  { name: 'third', args: ['12 34 '], expected: '34 12 ' },
  { name: 'fourth', args: ['const x = null; '], expected: 'null; = x const ' },
  { name: 'fifth', args: ['   e e '], expected: '   e e ' },
];
function reverseChunk(str) {
  let strSplit= str.split(' ');
  let i,n,k;
  let strArr1 =[]; //create an empty array
  let strArr2 =[]; //create an empty array
  let m = 0
  for(i=0;i<strSplit.length;i++){
    if(strSplit[i]==''){ // store the spaces in array1
      strArr1[i] = ''
    }
    else if(strSplit[i]!==''){ // else copy original array into array2
      strArr2[m] = strSplit[i]
      strArr1[i] = 'a' // to check the index of " " assign a letter to array1
      m = m + 1
  }
}
strArr2.reverse() // reverse the array2 which does not include spaces (" ")
  n = 0
  for(k=0;k<strArr1.length;k++){ // copy the elements of array2 into array one by one (array1 includes the spaces that we want to keep)
    if(strArr1[k]=='a'){
      strArr1[k] = strArr2[n]
      n = n+1
    }
  }
let newStr = strArr1.join(' ');// join array1
return newStr;
}
// console.log(reverseChunk(' plug (play!)'));
evaluate(reverseChunk, reverseChunkTests);

