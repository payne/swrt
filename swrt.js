// Helpful documenation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#active_learning_working_through_a_json_example

console.log("About to start!!!");
const request = new Request('ring.json');
const response = await fetch(request);
console.log(response);

