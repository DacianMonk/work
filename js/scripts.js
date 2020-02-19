document.getElementById('hello').addEventListener("dblclick", greeting);
function greeting(){
  document.getElementById('hello').innerHTML = "Hello world, this is my final message";
}
console.log("hello");
