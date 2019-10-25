/* repeat charecters

write a function that repeats the charecters in a string according to these rules:
- letters are doubled
- numbers are tripled
- anything else is quadrupled

*/

const repeatCharsTests = [
  { name: "first", args: ["abc"], expected: "aabbcc" },
  { name: "second", args: ["123"], expected: "111222333" },
  { name: "third", args: ["%-*>"], expected: "%%%%----****>>>>" },
  {
    name: "fourth",
    args: ["h3LL0 W@r!|)"],
    expected: "hh333LLLL000 WW@@@@rr!!!!||||))))"
  },
  {
    name: "fifth",
    args: ["{:-<*>-:}"],
    expected: "{{{{::::----<<<<****>>>>----::::}}}}"
  },
  { name: "sixth", args: [""], expected: "" },
  { name: "seventh", args: [" "], expected: "    " }
];
function repeatChars(str) {

const myLettersArray = ['a','b','c']
const strArray = str.split('');

const resultArray = strArray.map((element)=>{
  if (myLettersArray.indexOf(element) >0){ return element + element;

  }
})


  // write this!
  
  
  /*

  I could not write the funtcion.
I tried to understand the logic and the way a function builts
by looking at stackowerflof and what did my friends wrote in slack and homework sheet for repeat.
I compared the codes, try to understand everything that is written and what are the differences,why and how.

//stackoverflow repeat

var repeat = function(str, count) {
    var array = [];
    for(var i = 0; i < count;)
        array[i++] = str;
    return array.join('');
}


//stackoverflow repeat 2

var repeatString = function(string, n) {
    var result = '', i;

    for (i = 1; i <= n; i *= 2) {
        if ((n & i) === i) {
            result += string;
        }
        string = string + string;
    }

    return result;
};


  //evan to masha repeat

// more descriptive variable names
function repeatChars(stringInput){
    let result = '';
    let numOfRepeat;
      //let numOfRepeat = 0;
    for ( let i=0; i<stringInput.length; i++){
      const chCode = stringInput[i].charCodeAt();
      // a more readable way to write ternaries
      numOfRepeat = (chCode===32 && stringInput.length >1) 
        // always use ===, not ==. this will avoid tricky bugs
          ? 1
          : ((65 <= chCode && chCode<= 90)||(97 <= chCode && chCode<= 122)) 
              ? 2
              : (48 <= chCode && chCode<= 57) 
                  ? 3
                  : 4;
      
      result += stringInput[i].repeat(numOfRepeat);
    }
    
    return result;
    
  }

  //repeat masha
  function repeatChars(stringInput){
    let c = ``;
    let b;
    let numOfRepeat;
      //let numOfRepeat = 0;
    for ( let i=0; i<stringInput.length; i++){
      b = stringInput[i].charCodeAt();
      numOfRepeat = (b==32 && stringInput.length >1) ? 1:
      ((65 <= b && b<= 90)||(97 <= b && b<= 122)) ? 2:
      (48 <= b && b<= 57) ? 3:
      4;
      
      c += stringInput[i].repeat(numOfRepeat);
    }
    
    return c;
    
  }
//repeat evan to mert

function repeatChars(str) {
	var strArray = str.split('');
	strArray.forEach(function(str) {
	  var code=str.charCodeAt();
​
		if (code<=90 && code>=65)||(code<=122 && code>=97); {
			 str= str + str;
		}
		else if (code<=57 && code>=48 ) {
				 str=str+str+str;
		} 
		else {
			str=str+str+str+str;
		}
	});
	return '?';
};
  //repeat mustafa in the hw sheet

  function repeatChars(str) {
    let newString = "";
  
    const splittedStr = str.split("");
  
    splittedStr.forEach(element => {
      if (/[0-9]/.test(element)) {
        //
        newString = newString + element + element + element;
      } else {
        if (/[a-zA-Z]/.test(element)) {
          newString = newString + element + element;
        } else {
          newString = newString + element + element + element + element;
        }
      }
    });
    return newString;
  }

//repeat mustafa slack
repeatChars.js .......  function repeatChars(str) {
    let count = str.split('').reduce(function(countMap, word) {
      countMap[word] = ++countMap[word] || 1;
      return countMap;
    }, {});
    //Get the letters that were found, and filter out any that only appear once.
    let repeat = Object.keys(count)
      //.filter(function (key) { return (count[key] > 1); })
      // Then map it and create a string with the correct length, filled with that letter.
     .map(function (key) {
        return new Array(count[key] + 1).join(key);
      });
    return repeat;
   }
   evaluate(repeatChars, repeatCharsTests);

//ibrahim hw repeat

function repeatChars(str) {
    // write this!
    var strArray = str.split("");
    var strReturn = "";
    strArray.forEach(function(str) {
      var code = str.charCodeAt();
      if ((code <= 90 && code >= 65) || (code <= 122 && code >= 97)) {
        str = str + str;
      } else if (code <= 57 && code >= 48) {
        str = str + str + str;
      } else {
        str = str + str + str + str;
      }
  
      strReturn = strReturn + str;
    });
  
    return strReturn;
  }
   
//repeat mert

function repeatChars(str) {
    var code=str.charCodeAt();
    
      if (code<=90 && code>=65)||(code<=122 && code>=97); {
           str= str + str;
      }
      else if (code<=57 && code>=48 ) {
               str=str+str+str;
      } 
      else {
          str=str+str+str+str;
      }
  };
  strArray.forEach(repeatChars);
  
*/
}
evaluate(repeatChars, repeatCharsTests);

function repeatCharsHandler() {
  // read and process user input (this works, no need to change it!)
  const stringInput = document.getElementById("repeatChars-input").value;

  // pass user input through core logic (this works!  no need to change it)
  const repeatCharsed = repeatChars(stringInput);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById("repeatChars-output");
  outputField.innerHTML = repeatCharsed;

  console.log("\n--- repeatCharsHandler ---");
  console.log("stringInput:", typeof stringInput, ",", stringInput);
  console.log("repeatCharsed:", typeof repeatCharsed, ",", repeatCharsed);
}
const repeatCharsButton = document.getElementById("repeatChars-button");
repeatCharsButton.addEventListener("click", repeatCharsHandler);
