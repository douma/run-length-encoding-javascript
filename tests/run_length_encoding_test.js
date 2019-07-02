var test = require('tape');
var RunLengthEncoding = require('../src/RunLengthEncoding');

test('timing test', function (t) {
    t.plan(1);

    const runLengthEncoding = new RunLengthEncoding();
    t.assert("2AB3CD4E", runLengthEncoding.to("AABCCCDEEEE"));
});
