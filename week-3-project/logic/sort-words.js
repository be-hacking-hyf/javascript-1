/* sort characters

  sort the characters in a word, words are substrings separated by spaces

*/

const sortTests = [
  { name: 'first', args: ['4321 cde'], expected: '1234 cde' },
  { name: 'second', args: ['abcd 153'], expected: 'abcd 135' },
  { name: 'third', args: ['howdy doody time'], expected: 'dhowy ddooy eimt' },
];

// let str='howdy doody time';

let newArr=str.split(' ');

function sort(str){
 
 let arrstr=str.split(''); 
 let sortedstr=arrstr.sort();
 return sortedstr.join('');
 if (typeof sortedstr[0]===integer){
   sortedstr.sort(function(a, b){return a - b})
   }
}

const mynewArr= newArr.map(sort);
// console.log(mynewArr);

evaluate(sort, sortTests);

