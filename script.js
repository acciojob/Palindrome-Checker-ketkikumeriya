// complete the given function

function palindrome(str){
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Check if the cleaned string is equal to its reverse
  const reversed = cleaned.split('').reverse().join('');
  
  return cleaned === reversed;

}
console.log(palindrome("race a car")); // should return false
console.log(palindrome("RaceCar")); // should return true

module.exports = palindrome
