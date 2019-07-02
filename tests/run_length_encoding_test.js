var test = require('tape');
var RunLengthEncoding = require('../src/RunLengthEncoding');

test('timing test', function (t) {
    t.plan(4);

    const runLengthEncoding = new RunLengthEncoding();
    t.assert("2AB3CD4E", runLengthEncoding.to("AABCCCDEEEE"));
    t.assert("3A3B", runLengthEncoding.to("AAABBB"));
    t.assert("3A3B3C", runLengthEncoding.to("AAABBBCCC"));
    t.assert("3A3B3C1D", runLengthEncoding.to("AAABBBCCCD"));
});
