/* scramble!

Write a function that does these things to a string:
- sort each word (anything with only numbers or letters, separated by spaces)
- reverse chunks (anything between two punctuation marks, a new line or the beginning/end of the string)
- preserve formatting (leave tabs and newlines in place);

*/

const thirdScrambleArg = `a list of drinks:
  - milk
  - sugar free coke
  - soy sauce`;
const thirdScrambleExpected = `diknrs fo ilst a:
  - iklm
  - ceko eefr agrsu
  - acesu osy`;

const scrambleTests = [
  { name: 'first', args: ['the road works.'], expected: 'korsw ador eht.' },
  { name: 'second', args: ["name: 'second'"], expected: "aemn: 'cednos'" },
  { name: 'third', args: [thirdScrambleArg], expected: thirdScrambleExpected },
  { name: 'fourth', args: ["name: 'second cow'"], expected: "aemn: 'cow cednos'" },
  { name: 'fifth', args: ["name e eman: 'second cow, cba'"], expected: "aemn e aemn: 'cow cednos, cba'" },
];
  
  function sort(str){ //this function sorts the given string taking into account the strings

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
  
  function scramble(str) {
    
    let strSplit= str.split('');
    let i,n,k;
    let strArr1 =[]; //create an empty array
    let strArr2 =[]; //create an empty array
    let m = 0
    for(i=0;i<strSplit.length;i++){
      if((strSplit[i]=='')){ // store the special characters in array1
        strArr1[i] = ''
      }else if(strSplit[i]=='-'){
        strArr1[i] = '-'
      }else if(strSplit[i]==';'){
        strArr1[i] = ';'
      }else if(strSplit[i]=="'"){
        strArr1[i] = "'"
      }else if(strSplit[i]==':'){
        strArr1[i] = ':'
      }else if(strSplit[i]=='.'){
        strArr1[i] = '.'
      }else { // else copy original array into array2
        strArr2[m] = strSplit[i]
        strArr1[i] = 'a' // to check the index of special character assign a letter to array1
        m = m + 1
    }
  }
  strArr2.reverse() // reverse the array2 which does not include special characters (' ', ':', ';', '-', '.')
  // console.log(strArr2);
  let strArr3=strArr2.join(''); // in order to use sort function we should join the array into string
  // console.log(strArr3);
  
  let newstr2=sort(strArr3); // //sort the each element of the array before merging the special characters  
  let newArr3 = newstr2.split('');
 // console.log(newstr2);
 
    n = 0
    for(k=0;k<strArr1.length;k++){ // copy the elements of newArr3 into strArr1 one by one (array1 includes the spaces that we want to keep)
      if(strArr1[k]=='a'){
        strArr1[k] = newArr3[n]
        n = n+1
      }
    }
  let newStr = strArr1.join('');// join array1
  return newStr;
  }
  // console.log(scramble('the road works.'));
  
  /*
    write this function using "chunk", "sortWords" and "reverseChunk"
    each of these functions is one step along the way to a scrambled string
    this is a an exercise to practice using breaking large problems into smaller ones
    and then solving the smaller problems and combining the small solutions into a full solution
  */

evaluate(scramble, scrambleTests);
