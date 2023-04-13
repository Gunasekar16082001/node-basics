//localModule export methods

// func = function Guna() {
//   console.log("gunasekar");
// };

// num = x = 1234;

// module.exports = {
//   func: func,
//   num: num,
//   dummy: () => {
//     console.log("dummy function");
//   },
// };
// -----------------------------importd in index.js-----------------

// class calling

// class myClass
// {
//     constructor(name){
// this.name = name;
//     }
//     myFunc(){
//         console.log("my name is" + this.name)
//     }
// }
// module.exports.myClass = myClass;

//------------------------------------------

// Core module

// const readline = require("readline");

// const events = require("events");
// const crypto = require("crypto");

// const hash = crypto
//   .createHash("sha256", "bvibfiv")
//   .update("i love node")
//   .digest("hex");
// console.log(hash);

// const myEMitter = new events.EventEmitter();
// var x = ["jon", "harry", "guna"];
// myEMitter.on("my", () => {
//   for (let i = 0; i < x.length; i++) {
//     console.log(i + " " + x[i]);
//   }
//   console.log("oooops");
// });
// setTimeout(() => {
//   myEMitter.emit("my");
// }, 3000);
// ------------------------------------------
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Ask the user to enter their name
// rl.question("What is your name? ", (name) => {
//   if (name === "guna") {
//     // If the user enters "guna", close the readline interface
//     rl.close();
//   } else {
//     // If the user enters a name other than "guna", display a new prompt and listen for more input
//     rl.setPrompt("Wrong name. Please try again.\n");
//     rl.prompt();

//     // Listen for the user to enter a new name
//     rl.on("line", (input) => {
//       if (input === "guna") {
//         // If the user enters "guna", close the readline interface
//         rl.close();
//       } else {
//         // If the user enters a name other than "guna", display a new prompt with the incorrect name and listen for more input
//         rl.setPrompt(`Wrong name: ${input}. Please try again.\n`);
//         rl.prompt();
//       }
//     });
//   }
// });

// const path = require("path");

// const fs = require("fs");   --file creating import

// directry create folder create

// fs.mkdir('test',(err)=>{
// if(err){throw err}
// console.log('dir')
// })

// directry create file create

// fs.writeFile(path.join(`${__dirname}/test/test.js`), "i love nose", (err) => {
//   if(err){throw err}
//   console.log("file cre");
// });

//   read  the file

// fs.readFile(path.join(`${__dirname}/test/test.js`),'utf8',(err, data) => {
//   if(err){throw err}
//   console.log(data);
// });

// server create in node js

const http = require("http");
const fs = require("fs");
const path = require("path");

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(`${__dirname}/Home.html`), "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  }
  if (req.url === "/file") {
    fs.readFile(path.join(`${__dirname}/File.html`), "utf8", (err, data) => {
      res.writeHead(200,{"Content-type": "text/html"});
      if (err) {
        throw err;
      }
      res.end(data);
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server starton ${PORT}`);
});
