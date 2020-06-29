let input;

const numbers = [];


let total = 0;

while( input !== null ) {
    input = prompt('Enter your numb');
    
    if(isNaN(input)) {
        alert('This is not a number');
        continue;
    }
    
    if(input === null) {
        if(numbers.length > 0) {
            for(let number of numbers) {
                    total += number;
                }
            console.log(`Загальна сума чисел дорівнює ${total}`);
            // continue;        
        } else {
            console.log(`Користувач не ввів жодного числа`)
        }
    }

        numbers.push(Number(input));
    };    
    

