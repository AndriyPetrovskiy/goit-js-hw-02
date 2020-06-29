// let arr = 'Curabitur ligula sapien, tincidunt non.';
// let spliteArr = arr.split('');
// console.log(spliteArr)

// let sliceArr = spliteArr.splice(0, 20);
// console.log(sliceArr);

const formatString = function (string) {
  // console.log(string);
    // let arrString = string.split('');
    // console.log (arrString)
    // let rezult;
    if (string.length < 40) {
      //  rezult = string;
      return string;
        // console.log(arrString);
    } else {
        string = string.slice(0, 40);
        // rezult = string + '...';
        return `${string}...`
        // console.log(arrString);
    }
    
    return rezult;
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // повернеться оригінальний рядок
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // повернеться форматований рядок
  
  console.log(formatString('Curabitur ligula sapien.'));
  // повернеться оригінальний рядок
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // повернеться форматований рядок