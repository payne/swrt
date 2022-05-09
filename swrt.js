// Helpful documenation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#active_learning_working_through_a_json_example

const request = new Request('ring.json');
const response = await fetch(request);
console.log(response);

