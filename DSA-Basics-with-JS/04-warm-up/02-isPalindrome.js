const isPalindrome = (n) => {
  if (n < 0) {
    return false;
  }

  let numCopy = n;
  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  // if(rev == numCopy){
  //     return true;
  // }
  // else{
  //     return false
  // }
  return rev == numCopy;
};

console.log(isPalindrome(1221));
