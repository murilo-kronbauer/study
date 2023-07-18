// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  var countS = new Map();
  var countT = new Map();

  for (let i = 0; i < s.length; i++) {
    countS.has(s[i])
      ? countS.set(s[i], countS.get(s[i]) + 1)
      : countS.set(s[i], 1);

    countT.has(t[i])
      ? countT.set(t[i], countT.get(t[i]) + 1)
      : countT.set(t[i], 1);
  }

  for (let [k, v] of countS.entries()) {
    console.log(k, v);
    if (v != countT.get(k)) return false;
  }

  return true;
}

// Second solution
function isAnagramAlternative(s: string, t: string): Boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
