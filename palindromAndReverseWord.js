function cekPalindrom(string) {
  const reversed = string.split("").reverse().join("");
  if (reversed == string) {
    return "Palindrom Text";
  }
  return "not Palindrom Text";
}

console.log(cekPalindrom("malam"));
console.log(cekPalindrom("makan"));

function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("Saya Belajar Javascript"));
