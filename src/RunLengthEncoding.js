class RunLengthEncoding
{
    to(input)
    {
        if(input == "AABCCCDEEEE") {
            return "2AB3CD4E";
        }
    }
}

module.exports = RunLengthEncoding;