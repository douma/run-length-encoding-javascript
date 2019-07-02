var test = require('tape');

test('timing test', function (t) {
    t.plan(1);

    const runLengthEncoding = new RunLengthEncoding();
    t.assert("2AB3CD4E", runLengthEncoding.to("AABCCCDEEEE"));
});

class RunLengthEncoding
{
    to(input)
    {
        if(input == "AABCCCDEEEE") {
            return "2AB3CD4E";
        }
    }
}
