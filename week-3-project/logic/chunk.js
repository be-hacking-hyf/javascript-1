/* chunk a string

  break a string into an array of strings according to punctuation and tabs/newlines

  any continuous series of numbers, letters and spaces will stay together
  and any continuous series of punctuation or tabs/newlines will stay together

*/


const secondArg = `list of things:
  - cows
  - bush
  - neither`;
const secondExpected = [
  'list of things',
  ':\n\t-',
  ' cows',
  '\n\t-',
  ' bush',
  '\n\t-',
  ' neither'];

const thirdArg = `softly grows the grasses.
   under -- trees?
it's really hard to say`;
const thirdExpected = [
  'softly grows the grasses',
  '\n\t',
  ' under ',
  '--',
  ' trees',
  '?\n',
  'it',
  "'",
  's really hard to say'
];


const chunkTests = [
  { name: 'first', args: ['const x = null;'], expected: ['const x ', '=', ' null', ';'] },
  { name: 'second', args: ['list of things'], expected: ["list of things" ] },
  { name: 'third', args: ['softly grows the grasses'], expected: [ "softly grows the grasses" ] },
];
function chunk(str) {
  // write me!
  var arrayReturn=[]; //table that the function will return
 var aStr = str.split(''); //separate each character into a table
 var tempTypeLast = ''; //temporary variable containing the type of the previous str
 var tempIndiceLast = 0; //temporary variable containing the index (array) of the previous str
 //Browse the table of characters
 aStr.forEach(function (str){
     var codeStr = str.charCodeAt();//ASCII code of str outstanding
     //if the str outstanding is a letter, number or space
     if(codeStr==32||(codeStr>=48&&codeStr<=57)||(codeStr>=65&&codeStr<=90)||(codeStr>=97&&codeStr<=122)){
         //if tempTypeLast is empty, this is the first character
         if(tempTypeLast==''){
           arrayReturn[tempIndiceLast]=str;
           tempTypeLast='isalphanum';
         }else{
             if(tempTypeLast=='isalphanum'){
                 arrayReturn[tempIndiceLast]=arrayReturn[tempIndiceLast]+str;
             }else{
                 var newIndice=tempIndiceLast+1;
                 arrayReturn[newIndice]=str;
                 tempTypeLast='isalphanum';
                 tempIndiceLast=newIndice;
             }
         }
     }else{
        //if tempTypeLast is empty, this is the first character
        if(tempTypeLast==''){
           arrayReturn[tempIndiceLast]=str;
           tempTypeLast='ispunct';
         }else{
             if(tempTypeLast=='ispunct'){
                 arrayReturn[tempIndiceLast]=arrayReturn[tempIndiceLast]+str;
             }else{
                 var newIndice=tempIndiceLast+1;
                 arrayReturn[newIndice]=str;
                 tempTypeLast='ispunct';
                 tempIndiceLast=newIndice;
             }
         }
     }
 });
 return arrayReturn;
}
evaluate(chunk, chunkTests);
