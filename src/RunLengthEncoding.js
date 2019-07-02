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
}

module.exports = RunLengthEncoding;