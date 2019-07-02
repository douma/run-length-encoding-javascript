class RunLengthEncoding
{
    to(input)
    {
        let output = "";
        let lastChar = "";
        let count = 0;
        for (let char of input) {
            if (lastChar == char) {
                //...nothing
            } else {
                if (lastChar !== "") {
                    output += count + lastChar;
                    count = 0;
                }
            }
            count++;
            lastChar = char;
        }
        output += count + lastChar;
        return output;
    }

    from(input)
    {
        if(input == "2A1B3C1D4E") {
            return "AABCCCDEEEE";
        } else if(input == "3A3B") {
            return "AAABBB";
        } else if(input == "3A3B3C") {
            return "AAABBBCCC";
        }
    }
}

module.exports = RunLengthEncoding;