const input = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const result = document.getElementById('result');

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

btn.addEventListener('click', () => {
  const value = input.value;
  if (!value) {
    alert("Please input a value");
    return;
  }

  const palindrome = isPalindrome(value);
  if (palindrome) {
    result.textContent = `${value} is a palindrome.`;
  } else {
    result.textContent = `${value} is not a palindrome.`;
  }
});
