const reverseInteger = (n) => {
    let rev = 0;
    while(n > 0){
        let lastDigit = n % 10;
        rev = (rev * 10) + lastDigit;
        n = Math.floor(n / 10);
    }
    return rev;
}
console.log(reverseInteger(1234))