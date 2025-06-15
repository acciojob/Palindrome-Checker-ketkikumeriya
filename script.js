// complete the given function

function palindrome(str){
  const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Check if the cleaned string is equal to its reverse
  const reversed = cleaned.split('').reverse().join('');
  
  return cleaned === reversed;

}
module.exports = palindrome
