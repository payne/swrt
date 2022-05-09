// Helpful documenation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#active_learning_working_through_a_json_example

console.log("About to start!!!");
// alert("Hello!");
/* */

async function getData() {
  const request = new Request('ring.json');
  const response = await fetch(request);
  console.log(response);
}

console.log("calling getData()");
getData();

