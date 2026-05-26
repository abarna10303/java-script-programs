//1 . Reverse String

const reverseString = (name) => {
    const array = [];
    let reverseString = ""
    for (i = name.length - 1; i >= 0; i--) {
        array.push(name[i]);
        reverseString = `${reverseString}${name[i]}`
    }
    const reverseArray = array.join("");
    return reverseArray
}

console.log("Reverse String", reverseString("Abarna"));

// 2 . Check Palindrome

const checkPalindrome = (number) => {
    const reverseNumber = reverseString(`${number}`);
    return String(number) === reverseNumber;
}

console.log("Check Palindrome", checkPalindrome(1221));


// 3 .Swap two numbers


const swapTwoNumbers = (firstNum, secondNum) => {
    const temp = firstNum;
    const first = secondNum;
    const second = temp;
    return `${first} ${second}`
}

console.log("Swap two Number", swapTwoNumbers(20, 30))