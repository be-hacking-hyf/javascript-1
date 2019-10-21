/* sort characters

  sort the words in a string, words are substrings separated by spaces

*/

const sortTests = [
  { name: 'first', args: ['4321 cde'], expected: " 1234cde" },
  { name: 'second', args: ['abcd 153'], expected: " 135abcd" },
  { name: 'third', args: ['howdy doody time'], expected: "  dddehimoootwyy" },
];
function sort(str) {
  // write me!
  var arr = str.split('');
  var tmp;
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      /* if ASCII code greater then swap the elements position*/
      if(arr[i] > arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr.join('');
  
}
evaluate(sort, sortTests);
