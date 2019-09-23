# Three Layer Handlers

This project is designed to illustrate one of, if not __the most__, fundamental principle of software design:

> SEPARATION OF CONCERNS

"Separation of concerns" means that each piece of code has one simple and well defined purpose, and that only one piece of code is used for each role.  In this project you will be exploring the separation of UI framework, input handling, and application logic.  You will build the functions for a basic calculator then connect those functions to a basic UI using structured _handler_ functions.  The concerns are:
* UI - HTML & the DOM
* Handler - reads from the UI, calls the logic, writes to the UI
* Logic - the cleancalc object

Understanding this principle will help with testing, development scheduling, collaboration, maintenance, ... __everything__. In our experience, understanding separation of concerns is the most important thing a new programmer can learn (after mastering JS of course).  Far more important than learning new libraries, powerful devtools, or even being good at solving programming challenges.  

So if this project feels too easy and you find yourself wanting to make it more complicated, remember that the code isn't the point of this project.  The design is the point.  Pay attention to how we use specs to define and develop the calculator, and how we integrate your functions with the HTML.


### Index
* [Learning Objectives](#learning-objectives)
* [Specifications](#specifications)
* [Resources](#resources)

---

## Learning Objectives

* Separation of concerns
* 3 layer app architecture
* Developing from specs
* application logic vs. 'infrastructure'

### 3 Layered Architecture

![](./three-layered-architecture.png)


[TOP](#index)

---

## Specifications

In this repository you will find an HTML file, and 3 files called "handler".  Your task is to fill in the missing lines in the "handler" files to make the UI work.


[TOP](#index)

---

## Resources

__Examples to Study__:
* [arithmetic coercion table](https://github.com/janke-learning/arithmetic-coercion/blob/master/tabling/handler.js)
* [equalities coercion table](https://github.com/janke-learning/equalities-coercion/blob/master/tabling/handler.js)
* [_display\_results_](https://github.com/janke-learning/stateless-demo-project/blob/master/9-guess-it.js)  
* [_guess\_it_](https://github.com/janke-learning/statefull-project-demo/blob/master/13-guess-it.js)  

__Separation of Concerns__:  
* [Stackexchange Question](https://softwareengineering.stackexchange.com/questions/32581/how-do-you-explain-separation-of-concerns-to-others) - upvote: dleufer
* [Outstanding video](https://www.youtube.com/watch?v=WDNvqxZBI_U)
* [DevIQ article](http://deviq.com/separation-of-concerns/)

__DOM__:
* [FreeCodeCamp](https://www.freecodecamp.org/).  Complete the jQuery exercises if you haven't yet.
* [w3 Event Listeners](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
* [Building an Addition UI](https://www.youtube.com/watch?v=e57ReoUn6kM)



__Programming Concepts__:
* [Abstractions](https://github.com/elewa-academy/General-Resources/blob/master/programming-resources/abstractions.md)
* [Procedural Programming](https://github.com/elewa-academy/General-Resources/blob/master/programming-resources/programming-and-paradigms/01-procedural-programming.md)
* [Event-Driven Programming](https://github.com/elewa-academy/General-Resources/blob/master/programming-resources/programming-and-paradigms/04-event-driven-programming.md)

__Process.argv__:
* [Stackabuse Article](http://stackabuse.com/command-line-arguments-in-node-js/)
* [CC Videos](https://www.youtube.com/watch?v=PG0_eGxrCAk)





[TOP](#index)

---

Closing Thoughts:  
    ![](http://deviq.com/wp-content/uploads/2014/11/Separation-of-Concerns-Feb-2013.png)




___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
