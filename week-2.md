# Week 2

### Index
* [agenda for the day](#agenda)
* [learning objectives](#learning-objectives)
* [homework](#homework)
* [resources](#resources)

---

## Agenda

### review
* look over these again: 
    * [JS fundamentals](https://github.com/HackYourFuture-CPH/JavaScript/tree/master/fundamentals)
    * [group quiz in class](https://github.com/HackYourFuture-CPH/JavaScript/blob/master/fundamentals/exercises.md)
* [slido](https://www.sli.do) for choosing what to review - code: ```#7492```

### Git & GitHub
* practice a little [pull requesting](https://github.com/janke-learning/pull-requesting)
* introduce [LearnGitBranching](http://learngitbranching.js.org/)

### project
* (pull to your fork for week 2 updates)
* complete week 1 together in a code-along
* global scope vs. parameters
    * [on pytut](http://www.pythontutor.com/live.html#code=//%20see%20this%20on%20glitch%3A%20https%3A//glitch.com/edit/%23!/global-scope-vs-parameters%0A%0Avar%20project%20%3D%20%7Bname%3A%20%22jee%22,%20link%3A%20%22http.com%22%7D%3B%0A%0Afunction%20uses_global%28_property%29%20%7B%0A%20%20if%20%28_property%20%3D%3D%3D%20%22name%22%29%20%7B%0A%20%20%20%20console.log%28project.name%29%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20console.log%28project.link%29%3B%0A%20%20%7D%0A%7D%0Auses_global%28%22name%22%29%3B%0Auses_global%28%22link%22%29%3B%0A%0Afunction%20ignores_parameter%28_object,%20_property%29%20%7B%0A%20%20if%20%28_property%20%3D%3D%3D%20%22name%22%29%20%7B%0A%20%20%20%20console.log%28project.name%29%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20console.log%28project.link%29%3B%0A%20%20%7D%0A%7D%0Aignores_parameter%28%22never%20used%22,%20%22name%22%29%3B%0Aignores_parameter%28%22never%20used%22,%20%22link%22%29%3B%0A%0A%0Afunction%20uses_parameter%28_object,%20_property%29%20%7B%0A%20%20if%20%28_property%20%3D%3D%3D%20%22name%22%29%20%7B%0A%20%20%20%20console.log%28_object.name%29%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20console.log%28_object.link%29%3B%0A%20%20%7D%0A%7D%0Auses_parameter%28project,%20%22name%22%29%3B%0Auses_parameter%28project,%20%22link%22%29%3B&cumulative=false&curInstr=25&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
    * [on glitch](https://glitch.com/edit/#!/global-scope-vs-parameters) - (click on :loop: __Show__ to run the example)

### JS
* (pull fresh changes to your homework fork)
* programming is strategically planning data over time: 
    * [sentences](https://github.com/janke-learning/variable-exercises/blob/master/sentences-without-temps.md) - homework launch (:dash:)
* truthiness & conditions
    * [truthiness](https://github.com/janke-learning/truthiness)
    * (you'll study this in depth next week)
* [conditional statements](https://javascript.info/ifelse)
    * [tracing paths](https://github.com/colevanderswands/conditional-exercises) - homework launch (:dash:)
* [incrementing and decrementing (++, --)](https://github.com/janke-learning/expanding/blob/master/worked-in-place-operators.md)
* loops, light introduction
    * [while loops](https://javascript.info/while-for#the-while-loop)
    * [do while loops](https://javascript.info/while-for#the-do-while-loop) - they exist, don't worry so much about them
    * [for loops](https://javascript.info/while-for#the-for-loop)
    * [js.info loop tasks](https://javascript.info/while-for#tasks) - homework launch (:seedling:)
* [refactoring loops](https://github.com/colevandersWands/loop-refactors) - homework launch (:dash:)
    * code as text, not a program
    * separating form from meaning
    * comfort "getting down" with it
    * behavior vs. implementation
* arrays & objects: _reference types_
    * [Free Code Camp challenges](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures) - homework launch (:seedling:)
    * arrays: [a simple first exercise](https://www.learn-js.org/en/Arrays)
    * objects: [a simple first exercise](https://www.learn-js.org/en/Objects)
* [reverence vs. value](https://github.com/janke-learning/reference-vs-value)
    * objects: [dots vs. brackets](https://github.com/janke-learning/dots-vs-brackets)
    * [reference-type exercises](https://github.com/colevandersWands/reference-type-exercises/blob/master/README.md) - homework launch (:dash:)
    * [passing reference-types to functions](https://github.com/janke-learning/function-exercises/blob/master/reference-type-arguments.md) - homework challenge (:fire:)
* ES6 looping syntax: 
    * [for of arrays](https://javascript.info/array#loops)
    * [for in objects](https://javascript.info/object#the-for-in-loop) 
    * it's simpler to read and write, but doesn't fundamentally change how loops work
    * you can always [refactor ```for in``` and ```for of``` loops to while loops](https://github.com/janke-learning/expanding/blob/master/worked-loops.md)

    

### final questions & sendoff


[TOP](#week-2)

---

## Learning objectives

### JS
* planning program data over time
* tracing & refactoring conditionals
* tracing & refactoring loops
* variables by reference vs. value 
* array & object basics
* objects: dots vs. brackets
* master functions:
    * declaring vs. calling
    * arguments & parameters
    * return values


### Git & GitHub
* at ease with Fork / Pull Request workflow on GitHub
* begin to understand branching and merging


### projecting
* incremental development
* making and hacking
* program structure
* javascript & html relationship



[TOP](#week-2)

---

## Homework

> SLACK!  Many of you have been asking us very good questions over slack, and many of you are asking the same questions!  This week ask all of your questions in your class's channel and tag us.  If you don't we won't know to answer

### Study Time!
* :seedling: share __at least 1__ helpful resource in the "Shared Notes" section of the class wiki.


### JavaScript

Do not only write quick solutions to the exercises to pass them. **We want you to understand more than we want you to pass a lot of exercises**.
If you don't finish everything but have understood what you finished, that's just ok.  Just be sure to let us know in your homework PR!

Really understanding the code means you could do the same work that pythontutor does but drawing yourself on a paper. To help you get there, there are all the great tools listed in the main README for this module. 

* [JS 1, week 2 homework](https://github.com/be-hacking-hyf/javascript-1-homework/tree/master/week-2) - follow the link to see assignment priorities


### Project

The main goal with the project is to make it work!  The homework is for you to understand, this project is for you to hack.

* :dash: [cross-module project, week 1](https://github.com/be-hacking-hyf/javascript-1-cross-module/tree/master/week-1)
* :dash: [cross-module project, week 2](https://github.com/be-hacking-hyf/javascript-1-cross-module/tree/master/week-2)
  

### Git/Hub
* :seedling: send a pull-request to [class-5 repo](https://github.com/HackYourFutureBEHomework/class-5/tree/master/bios) containing a short bio.
* :dash: [learn git branching: intro sequence](https://learngitbranching.js.org/) 
* :dash: [learn git branching: remotes (push/pull)](https://learngitbranching.js.org/) 


[TOP](#week-2)

---

## Resources

__Guo videos__
* [variables & primitive types](https://www.youtube.com/watch?v=pHt_tKYUgbo&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=2&frags=pl%2Cwn)
* [variable scoping](https://www.youtube.com/watch?v=9O-PCTfT6Rs&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=3)
* [arrays](https://www.youtube.com/watch?v=W1NTK09o-vM&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=4)
* [objects](https://www.youtube.com/watch?v=Z_ozyN5MyWY&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=5)


__[variables (var, let, const)](https://github.com/janke-learning/variables-and-hoisting/blob/master/README.md)__
* [declaring](http://www.pythontutor.com/javascript.html#code=var%20a%3B%0Alet%20b%3B%0A%0A//%20const%20cannot%20be%20declared%20without%20an%20assignment%0Aconst%20c%3B%20//%20a%20semantic%20error&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D)
* [assigning](http://www.pythontutor.com/live.html#code=/*%20notice%3A%0A%20%20the%20default%20value%20for%20%0A%20%20a%20DECLARED%20but%20UN-ASSIGNED%20variable%0A%20%20is%20undefined%0A*/%0A%0A//%20var%20declaration%20without%20assignment%0Avar%20a%3B%0A//%20assignment%20without%20declaration%0Aa%20%3D%20%22a%22%3B%0A//%20var%20declaration%20and%20assignment%20in%20one%20statement%0Avar%20b%20%3D%20%22b%22%3B%0A//%20reassigning%20b%20after%20declaration%20%26%20assignment%0Ab%20%3D%20%22B%22%3B%0A%0A%0A//%20let%20declaration%20without%20assignment%0Alet%20c%3B%0A//%20assignment%20without%20declaration%0Ac%20%3D%20%22c%22%3B%0A//%20let%20declaration%20and%20assignment%20in%20one%20statement%0Alet%20d%20%3D%20%22d%22%3B%0A//%20reassigning%20d%20after%20declaration%20%26%20assignment%0Ad%20%3D%20%22D%22%3B%0A%0A//%20and%20const's%20cannot%20be%20reassigned%20after%20declaration%0Aconst%20e%20%3D%20%22e%22%3B%0Ae%20%3D%20%22E%22%3B%20//%20a%20runtime%20error&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
* [block scope, let & var](https://github.com/janke-learning/block-scope-let-vs-var/blob/master/README.md)
* [hoisting (```var``` is not like ```let```)](http://www.pythontutor.com/live.html#code=console.log%28%22first%20step%20of%20execution%20phase%22%29%3B%0A%0A//%20%22var%22%20variables%20are%20hoisted%0A%0Aconsole.log%28a%29%3B%20//%20accessing%20before%20declaration%0Avar%20a%20%3D%20%22a%22%3B%0Aconsole.log%28a%29%3B%20//%20accessing%20after%20declaration%2Bassignment%0A%0A%0Aconsole.log%28b%29%3B%20//%20accessing%20before%20declaration%0Avar%20b%3B%0Aconsole.log%28b%29%3B%20//%20accessing%20after%20declaration,%20before%20assignemnt%0Ab%20%3D%20%22b%22%3B%0Aconsole.log%28b%29%3B%20//%20accessing%20after%20declaration%2Bassignment%0A%0A%0A//%20%22let%22s%20and%20%22const%22s%20are%20not%20declared%20until%20the%20statement%20is%20reached%0A%0Aconsole.log%28x%29%3B%20//%20accessing%20before%20declaration.%20a%20runtime%20error%0Alet%20x%3B%0Aconsole.log%28x%29%3B%20//%20accessing%20after%20declaration,%20before%20assignemnt%0Ax%20%3D%20%22x%22%3B%0Aconsole.log%28x%29%3B%20//%20accessing%20after%20declaration%2Bassignment%0A%0Aconsole.log%28y%29%3B%20//%20accessing%20before%20declaration.%20a%20runtime%20error%0Aconst%20y%20%3D%20%22y%22%3B%0Aconsole.log%28x%29%3B%20//%20accessing%20after%20declaration%2Bassignment&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)

__conditionals__
* [hyf: conditionals](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/conditional_execution.md)
* javascript.info
    * [type conversions](https://javascript.info/type-conversions)
    * [comparisons](https://javascript.info/comparison)
    * [conditionals](https://javascript.info/ifelse)
    * [logical operators](https://javascript.info/logical-operators)
* Truthy & Falsey:
  * [A video](https://www.youtube.com/watch?v=J4N6ETFpdkA)
  * [truthiness](https://github.com/janke-learning/truthiness)
  * [Deep dive](https://www.sitepoint.com/javascript-truthy-falsy/)
  * [All things truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
  * [All things falsey](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
  * [Some Gotchas](https://codeburst.io/javascript-truthy-values-dont-always-equal-true-8afaf071a4a6)

__so many loops!__
* [So many of them!](https://www.hackreactor.com/blog/javascript-loops-difference-between-types-while-for-in)
* [javascript.info](https://javascript.info/while-for)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
* [interactive examples](http://www.dofactory.com/tutorial/javascript-loops)
* For's vs While's: 
    * [StackOverflow](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript)
    * [TeamTreeHouse](https://teamtreehouse.com/community/why-use-while-loop-instead-of-for)
* While vs Do While: 
    * [Digital Ocean](https://www.digitalocean.com/community/tutorials/using-while-and-do-while-loops-in-javascript)
    * [Tutorial GateWay](https://www.tutorialgateway.org/difference-between-javascript-while-and-do-while-loop/)
* [performance -> standard for loop](https://www.sixhat.net/comparing-javascript-loops-performance-for-do-while-for-in.html)
* [worked expansions](https://github.com/janke-learning/expanding/blob/master/worked-loops.md#for-loops) 

__arrays and objects__
* arrays: [getting started](https://javascript.info/array)
* arrays: [pop/push, shift/unshift](https://javascript.info/array#methods-pop-push-shift-unshift)  
* arrays: [native methods](https://javascript.info/array-methods)
* objects: [getting started](https://javascript.info/object)
* objects: [literals & properties](https://javascript.info/object#literals-and-properties)
* objects: [dots vs. brackets](https://github.com/janke-learning/dots-vs-brackets)
* [reference vs. values](https://github.com/janke-learning/reference-vs-value)
* advanceder (from js.info)
    * [Iterables](https://javascript.info/iterable)
    * [Object.keys, values, entries](https://javascript.info/keys-values-entries)
    * [Destructuring](https://javascript.info/destructuring-assignment)


   

[logging script execution](https://github.com/janke-learning/trace-and-log)




    
    


[TOP](#week-2)

___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100"></img></a>

