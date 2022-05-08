
function isMatch(text, pattern) {
  
    //if text matches pattern, return true
    if (text === pattern) {
      return true
    } else if (`/.${text}/` == pattern){
        //if any character in the string can be replaced with . and the rest of the characters match,           return true
      return true;
    }
  
    else if (`/${text}*/` === pattern) {
        //if any 0 or more consecutive characters in the string can be replaced with *, return true
      return true;
  
      
    }
    else {
   
      return false;
    }
    //else return false
    
  
  }
  
  const string = "hay";
  const regEx = /\w.\w/g;
  console.log(string.match(regEx));
  
  
  
  