const reverseInteger = (n) => {
    // let nCopy = n;
    let isNegative = n < 0;
    n = Math.abs(n);

    let rev = 0;
    while(n > 0){
        let lastDigit = n % 10;
        rev = (rev * 10) + lastDigit;
        n = Math.floor(n / 10);
    }
    let limit = Math.pow(2, 31);
    // let limit = 2**31;
    if(rev > limit - 1 || rev < -limit) return 0;
    return isNegative ? -rev : rev;
    // return (nCopy < 0) ? -rev : rev;
}
console.log(reverseInteger(1234))