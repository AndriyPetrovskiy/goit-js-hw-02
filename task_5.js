const checkForSpam = function (message) {
  console.log(message)
    //  let newMessage = message.toLowerCase();
    // let arrMessage = newMessage.split(' ');
    
    // console.log(arrMessage);
    
    let rezult;
    if (message.toLowerCase().includes('[spam]') || message.includes('sale')) {
      rezult = 'find';
    } else {
      rezult = 'not found';
    }
    return rezult;
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
  