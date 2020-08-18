const fs = require("fs");

setTimeout(() => console.log("timer 1 finished"), 0);

setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/0 finished");

  setTimeout(() => console.log("timer 2 finished"), 0);
  setTimeout(() => console.log("timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));
});

console.log("Hello from the top level code");
