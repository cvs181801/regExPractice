
function isMatch(text, pattern) {
    const newREG = new RegExp(`${pattern}`);
    const isMatchPattern = text.match(newREG);
    return isMatchPattern;
  }
  
console.log(isMatch("acd", "ab*c."));

//Examples:
// input:  text = "aa", pattern = "a"
// output: false
//this one is matching just the one a and is outputting true ***

// input:  text = "aa", pattern = "aa"
// output: true

// input:  text = "abc", pattern = "a.c"
// output: true

// input:  text = "abbb", pattern = "ab*"
// output: true

// input:  text = "acd", pattern = "ab*c."
// output: true