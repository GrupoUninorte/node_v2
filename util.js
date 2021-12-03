const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

// readFile("input.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

(async () => {
  try {
    const xt = await readFile("input.txt", "utf-8");
    console.log(xt);
  } catch (error) {
    console.error(error);
  }
})();

console.log("hola");
