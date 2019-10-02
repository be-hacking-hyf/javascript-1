## Homeworks

As in HTML, CSS & GitHub there will be two types of homework:
* Module Exercises
* Weekly Projects

---

### [Module Exercises](./module-exercises)

The exercises in this module are more challenging and more important than those in the last module.  Don't wait till the last week to start!  You'll know you've completed the exercises when all of the links are black or green.

Something to keep in mind while you are working on these exercises that it's ok to be confused by how to complete them. Learning how to work with the code in the exercises folder is just as important as passing the exercises themselves!  Completing the exercises and studying the results in your browser will help you acquire these important skills:
* understanding the difference between source code and a live web page
* using the devtools to inspect and study JS in the browser
* being comfortable managing multiple files and folders at once

So don't be discouraged if it's taking you a while to get comfortable completing this module's exercises, that's part of your learning!


__*The Different Types of Exercises:*__
All of your exercises will ask you to work with functions, but not all functions will be evaluated the same way. Some exercises will evaluate what's _inside_ the function, asking you to master JS one snippet at a time.  Some exercises will only evaluate your functions using test cases, meaning they only care about what happens _outside_ your function.  Some will do both. :
* __Implementation__: When talking about code, the term __implementation__ refers to the actual lines of code written and what happens in memory as they are executed. These exercises will be assessed using ```console.assert``` (do your variables have the right values at the right times?). It's possible to write a function that _behaves_ correctly without understanding how you implemented it!  Mastering implementation means mastering how JS interprets your code and executes your program step-by-step.  You'll know you've mastered a feature of the JS language when you can confidently predict what [JS Tutor](http://www.pythontutor.com/live.html#code=&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false) will show _before_ you click the "forward" button.
* __Behavior__: In a sense __behavior__ is the mirror image of implementation, the behavior of code is all about what has changed in your program _after_ some lines of code have been executed regardless of how they made that change happen. For example if you're programming an online dictionary it will be very important that you have a function to organize words into alphabetical order (_behavior_), but it won't be very important to you if it uses a for loop, a while loop or an array method (_implementation_).  Behavior exercises will be assessed using ```test cases``` (given some arguments, does your function return the correct value).  You'll know you understand a function's behavior when you can rewrite it in pseudocodeor reconstruct it in the [Parsonizer](https://janke-learning.org/parsonizer/), and when you can write test cases that will all pass your funciton.
* __Mixed__: Some exercises will assess both _behavior_ and _implementation_ by having ```test cases``` and ```console.assert's```.  But there won't be too many of these so don't worry about them until you get there.
* __Testing Native Code__: Some of the exercises won't even ask you to write any functions!  To better understand how JavaScript works, a few of the exercises will ask you to write test cases for functions built into the JavaScript language.


---

### Weekly Projects

__Incremental Development 2.0:__ _git instead of folders_

Last module the projects emphasized breaking your web pages into small steps and using incremental development to reach a final webpage.  This module we will expect you to continue practicing incremental development, but no longer ask you to have each step in a new folder.  For this module's projects you should begin using _git commits_ (and branches if you're feeling ambitious!) the way you used folders in the last module.  When we look through your repository's commit history we should see clearly labeled commits that store working but incomplete versions of the week's project.

For a more clear idea of what this will look like take some time to clone [Built With Branches](https://github.com/hackyourfuturebelgium/built-with-branches) and study it using GitKraken, VSC & running it in your browser.  What happens when you check out old commits/branches and open VSC or refresh your browser?


__How does JavaScript fit in?__

The projects in this module will also introduce how to connect javascript logic to your html/css web pages in a modular and organized way using the 3-layer handler design pattern.

For each week's project you will be given:
* HTML with input fields, output fields, buttons & script tags. but nothing else!
* An empty CSS file
* A JavaScript handler function with the top & bottom working, but the middle empty
* An event listener connecting the handler to the inputs & outputs

Your tasks will be:
1. Write the JavaScript logic your webpage needs
1. Fill out & style the HTML/CSS user interface for the JavaScript you wrote

In more words, what does this mean?  It means you'll be given the working outline of a basic interactive web page, and you will be responsible for making it glorious!
