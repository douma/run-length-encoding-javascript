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
        let previousChar = "";
        let number = "";
        let output = "";
        const numbers = '0123456789';
        for (let char of input) {
            let currentCharIsInt = numbers.includes(char);
            let previousCharIsInt = numbers.includes(previousChar);
            if(currentCharIsInt && previousCharIsInt) {
                number += char;
            } else if(currentCharIsInt) {
                number = char;
            } else {
                output += ''.padStart(number, char);
            }
            previousChar = char;
        }
        return output;
    }
}

module.exports = RunLengthEncoding;