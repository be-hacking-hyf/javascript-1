/* sort characters

  sort the characters in a word, words are substrings separated by spaces

*/

const sortTests = [
  { name: 'first', args: ['4321 cde'], expected: '1234 cde' },
  { name: 'second', args: ['abcd 153'], expected: 'abcd 135' },
  { name: 'third', args: ['howdy doody time'], expected: 'dhowy ddooy eimt' },
];

// let newArr=str.split(' ');

function sort(str){

  // let str='howdy doody time';
  let newArr=str.split(' ');

  function sortelement(element){
    let arrstr=element.split(''); 
    let sortedstr=arrstr.sort();
    return sortedstr.join('');
    }

const mynewArr= newArr.map(sortelement);
return mynewArr.join(' ');
}

evaluate(sort, sortTests);

