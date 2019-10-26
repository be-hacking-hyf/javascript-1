{
  const pageTitle = 'side effects';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {


  // side-effects are when a function changes a value in the global frame
  // side-effects from passing arrays or objects as arguments is a common bug
  // learning how this works and how to avoid it early on will help you greatly


  function example_arraySideEffects() {

    function arrayPusherSideEffects(arr, newValue) {
      arr.push(newValue);
      return arr;
    }
    const globalArray = [0, 1];

    const arrayReturned1 = arrayPusherSideEffects(globalArray, '2');
    console.assert(globalArray === arrayReturned1, 'should return a reference to the global array');
    console.assert(globalArray[2] === '2', 'global array has new a new value');

    const arrayReturned2 = arrayPusherSideEffects(globalArray, '3');
    console.assert(globalArray === arrayReturned2, 'should return a reference to the global array');
    console.assert(globalArray[3] === '3', 'global array has new a new value');

  }
  evaluate(example_arraySideEffects);


  function example_copyingArrays() {

    const array = [3, 4, 5];
    const arrCopy = [...array];

    console.assert(array !== arrCopy, 'both variables should reference different arrays');
    console.assert(array[0] === arrCopy[0], 'both arrays have the same first value');
    console.assert(array[1] === arrCopy[1], 'both arrays have the same second value');
    console.assert(array[2] === arrCopy[2], 'both arrays have the same third value');

  }
  evaluate(example_copyingArrays);


  function example_avoidArraySideEffects() {

    function pusherNoSideEffects(arr, newValue) {
      const newArray = [...arr];
      newArray.push(newValue);
      return newArray;
    }
    const globalArray = [0, 1];

    const arrayReturned1 = pusherNoSideEffects(globalArray, '2');
    console.assert(globalArray !== arrayReturned1, 'should return a new array');
    console.assert(arrayReturned1[2] === '2', 'new array has new value');
    console.assert(globalArray[2] === undefined, 'global array should unchanged');

    const arrayReturned2 = pusherNoSideEffects(globalArray, '3');
    console.assert(globalArray !== arrayReturned2, 'should return a new array');
    console.assert(arrayReturned2[2] === '3', 'new array has new value');
    console.assert(globalArray[2] === undefined, 'global array should unchanged');

  }
  evaluate(example_avoidArraySideEffects)



  function example_objectSideEffects() {

    function objectPropertySideEffects(obj, newKey, newValue) {
      obj[newKey] = newValue;
      return obj;
    }
    const globalObj = { w: 0, x: 1 };

    const objNewProp1 = objectPropertySideEffects(globalObj, 'y', '2');
    console.assert(globalObj === objNewProp1, 'should return a reference to the global object');
    console.assert(globalObj['y'] === '2', 'global object has new a new property');

    const objNewProp2 = objectPropertySideEffects(globalObj, 'z', '3');
    console.assert(globalObj === objNewProp2, 'should return a reference to the global object');
    console.assert(globalObj['z'] === '3', 'global object has new a new property');
  }
  evaluate(example_objectSideEffects);


  function example_copyingObjects() {

    const object = { x: 3, y: 4, z: 5 };
    const objCopy = Object.assign({}, object);

    // JS Tutor does not support spreading objects, but it works in the browser
    // welcome to JS cross-environment problems, welcome to web development!
    // const objCopy = { ...object };

    console.assert(object !== objCopy, 'both variables should reference different objects');
    console.assert(object.x === objCopy.x, 'both objects have the same x value');
    console.assert(object.y === objCopy.y, 'both objects have the same y value');
    console.assert(object.z === objCopy.z, 'both objects have the same z value');

  }
  evaluate(example_copyingObjects);



  function example_avoidObjectSideEffects() {

    function propAdderNoSideEffects(obj, newKey, newValue) {
      const newObj = Object.assign({}, obj);
      newObj[newKey] = newValue;
      return newObj;
    }
    const globalObj = { w: 0, x: 1 };

    const objReturned1 = propAdderNoSideEffects(globalObj, 'y', '2');
    console.assert(globalObj !== objReturned1, 'should return a new object');
    console.assert(objReturned1.y === '2', 'new object has new property');
    console.assert(globalObj.y === undefined, 'global object should be unchanged');

    const objReturned2 = propAdderNoSideEffects(globalObj, 'z', '3');
    console.assert(globalObj !== objReturned2, 'should return a new object');
    console.assert(objReturned2.y === undefined, 'new object has no y property');
    console.assert(objReturned2.z === '3', 'new object has new property');
    console.assert(globalObj.z === undefined, 'global object should be unchanged');

  }
  evaluate(example_avoidObjectSideEffects)






  const object1 = { a: 0, b: 1 };
  const object2 = { x: 0, y: 1 };

  const mergeObjsTests = [
    { name: 'same args ...', args: [object1, object2], expected: { a: 0, b: 1, x: 0, y: 1 } },
    { name: '... same return value', args: [object1, object2], expected: { a: 0, b: 1, x: 0, y: 1 } },
    { name: 'every time!', args: [object1, object2], expected: { a: 0, b: 1, x: 0, y: 1 } },
    { name: 'case 4', args: [object1, { tree: 'birch' }], expected: { a: 0, b: 1, tree: 'birch' } },
    { name: 'case 5', args: [{ tree: 'birch' }, object2], expected: { x: 0, y: 1, tree: 'birch' } },
    { name: 'case 6', args: [object2, {}], expected: { x: 0, y: 1 } },
  ];
  function mergeObjects(obj1, obj2) {
    // write me!
  }
  evaluate(mergeObjects, mergeObjsTests);


  const array1 = [0, 'e', true];
  const array2 = ['p', null, Infinity];

  const mergeArraysTests = [
    { name: 'same args ...', args: [array1, array2], expected: [0, 'e', true, 'p', null, Infinity] },
    { name: '... same return value', args: [array1, array2], expected: [0, 'e', true, 'p', null, Infinity] },
    { name: 'every time!', args: [array1, array2], expected: [0, 'e', true, 'p', null, Infinity] },
    { name: 'case 4', args: [array2, array1], expected: ['p', null, Infinity, 0, 'e', true] },
    { name: 'case 5', args: [array2, []], expected: ['p', null, Infinity] },
    { name: 'case 6', args: [array2, [undefined]], expected: ['p', null, Infinity, undefined] },
  ];
  function mergeArrays(arr1, arr2) {
    // write me!
  }
  evaluate(mergeArrays, mergeArraysTests);


  const repeatItemsTests = [
    { name: 'same args ...', args: [array1, 2], expected: [[0, 0], ['e', 'e'], [true, true]] },
    { name: '... same return value', args: [array1, 2], expected: [[0, 0], ['e', 'e'], [true, true]] },
    { name: 'every time !', args: [array1, 2], expected: [[0, 0], ['e', 'e'], [true, true]] },
    { name: 'case 4', args: [array1, 1], expected: [[0], ['e'], [true]] },
    { name: 'case 5', args: [array1, 0], expected: [[], [], []] },
    { name: 'case 6', args: [['p', null], 2], expected: [['p', 'p'], [null, null]] },
  ];
  function repeatItems(arr, numRepeats) {
    // write me!
  }
  evaluate(repeatItems, repeatItemsTests);


  {
    const learnMoreAbout = 'want to learn more about arrays and side-effects?';

    const wantToLearnMore = document.createElement('text');
    wantToLearnMore.innerHTML = learnMoreAbout;
    document.body.appendChild(wantToLearnMore);

    document.body.appendChild(document.createElement('br'));

    const arrayMethodsLink = document.createElement('a');
    arrayMethodsLink.innerHTML = 'array methods: mutating & non-mutating';
    arrayMethodsLink.href = "https://hackyourfuture.be/array-methods/";
    arrayMethodsLink.target = '_blank';
    document.body.appendChild(arrayMethodsLink);

    document.body.appendChild(document.createElement('br'));

    const methodsTrinityLink = document.createElement('a');
    methodsTrinityLink.innerHTML = 'immutable trinity: map, filter, reduce';
    methodsTrinityLink.href = "https://medium.com/the-non-traditional-developer/map-filter-reduce-the-holy-trinity-of-array-methods-16ce3bdb69e2";
    methodsTrinityLink.target = '_blank';
    document.body.appendChild(methodsTrinityLink);

    document.body.appendChild(document.createElement('hr'));
  }


} catch (err) {
  console.log(err);
  document.body.appendChild(
    evaluate.errorSearchComponent('.js file', err)
  );
}
{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
