const RunLengthEncoding = require("../RunLengthEncoding");
const runLengthEncoding = new RunLengthEncoding();
console.log(runLengthEncoding.from(
    (typeof process.argv[2] !== 'undefined') ? process.argv[2] : ""
));