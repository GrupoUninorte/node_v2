const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("hola", (start, end) => {
  console.log(`esto se inicia desde ${start} a ${end}`);
});

if (6 < 10) {
  eventEmitter.emit("hola", 1, 100);
}

// const x = () => {
//   console.log("hola ");
// };

// x();
