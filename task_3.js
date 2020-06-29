const findLongestWord = function (string) {
    let arrString = string.split(' ');
    // console.log(arrString);
    let longestWord = arrString[0];
    // console.log(longestWord);

    for (let i = 0; i < arrString.length; i += 1) {
        // console.log(arrString)
        if (longestWord.length < arrString[i].length) {
            longestWord = arrString[i];
        } 
        
    }
    return longestWord;
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'