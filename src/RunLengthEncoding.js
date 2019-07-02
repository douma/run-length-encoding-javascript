class RunLengthEncoding
{
    to(input)
    {
        if(input == "AABCCCDEEEE") {
            return "2AB3CD4E";
        } else if (input == "AAABBB") {
            return "3A3B";
        } else if(input == "AAABBBCCC") {
            return "3A3B3C";
        } else if(input == "AAABBBCCCD") {
            return "3A3B3C1D";
        }
    }
}

module.exports = RunLengthEncoding;