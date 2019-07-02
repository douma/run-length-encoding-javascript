var test = require('tape');
var RunLengthEncoding = require('../src/RunLengthEncoding');

test('timing test', function (t) {
    t.plan(4);

    const runLengthEncoding = new RunLengthEncoding();
    t.equal(runLengthEncoding.to("AABCCCDEEEE"),"2A1B3C1D4E");
    t.equal(runLengthEncoding.to("AAABBB"),"3A3B");
    t.equal(runLengthEncoding.to("AAABBBCCC"),"3A3B3C");
    t.equal(runLengthEncoding.to("AAABBBCCCD"),"3A3B3C1D");
});
