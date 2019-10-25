function calculate(a,b,operation) {
    switch (operation){
case sum : return a+b
case subtraction : return a-b
default: return a*b
    }
}

function calculate(a,b,operation){

    if(operation==="+"){return a+b}
    else if (operation ==="-") { return a-b}
    else if (operation ==="*") {return a*b}
    else    (operation ==="/"); {if(b===0) {return undefined}
                                else if (a===0) {return 0}
                                return a/b}

}

for(let index = 0; index< Array.length; index++) //zero to length of array

