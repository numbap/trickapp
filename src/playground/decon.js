// I want to turn this:

const testObj = {
    a1: {name: 'pat', age: '30'},
    a2: {name: 'mike', age: '33'},
    a3: {name: 'fred', age: '44'},
    a4: {name: 'goh', age: '55'},
    a5: {name: 'gee', age: '666'}
};

// into this:

// const testObj = [
//     {id: 'a1', name: 'pat', age: '30'},
//     {id: 'a2', name: 'mike', age: '33'},
//     {id: 'a3', name: 'fred', age: '44'},
//     {id: 'a4', name: 'goh', age: '55'},
//     {id: 'a5', name: 'gee', age: '666'}
// ];


// From firebase to JS
Object.keys(testObj).forEach((key, val) => {
    console.log(testObj[key]);
//    console.log(val);
});


// from JS to