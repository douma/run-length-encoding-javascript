var test = require('tape');
var RunLengthEncoding = require('../src/RunLengthEncoding');

test('test to happy path', function (t) {
    t.plan(5);

    const runLengthEncoding = new RunLengthEncoding();
    t.equal(runLengthEncoding.to("AABCCCDEEEE"),"2A1B3C1D4E");
    t.equal(runLengthEncoding.to("AAABBB"),"3A3B");
    t.equal(runLengthEncoding.to("AAABBBCCC"),"3A3B3C");
    t.equal(runLengthEncoding.to("AAABBBCCCD"),"3A3B3C1D");
    t.equal('12W1B12W3B24W1B14W',
        runLengthEncoding.to("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"));
});

test('test from happy path', function (t) {
    t.plan(3);

    const runLengthEncoding = new RunLengthEncoding();
    t.equal(runLengthEncoding.from("2A1B3C1D4E"), "AABCCCDEEEE");
    t.equal(runLengthEncoding.from("3A3B"), "AAABBB");
    t.equal(runLengthEncoding.from("3A3B3C"), "AAABBBCCC");
});
