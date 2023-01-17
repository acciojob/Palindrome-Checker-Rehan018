// complete the given function

function palindrome(str){
	let reversed = str.toLowerCase().split('').reverse().join('');
  return reversed === str.toLowerCase();

}
module.exports = palindrome
