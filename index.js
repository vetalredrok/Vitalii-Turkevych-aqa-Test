function runTests() {
    checkNumber();
    checkName();
    checkArray();
}
function checkNumber(){
    while (true){
        const input = +prompt('Enter a valid number for the 1st task');
        if (input <= 7 || input.toString().length === 0 || !isFinite(input)) {
            console.log('Incorrect input!');
            continue;
        }
        console.log('Привет');
        break;
    }
}

function checkName(){
    const input = prompt('Enter a valid name for the 2st task');
    if (input !== 'Вячеслав'){
        console.log('Нет такого имени');
    } else {
        console.log('Привет, Вячеслав');
    }
}

function checkArray(){
        const input = prompt("Enter a numeric array separated by commas (ex. 1,2,3,4)");

        const arr = input.split(",").map(el => {
            const num = Number(el.trim());
            if (Number.isNaN(num)) {
                throw new Error(`Element "${el}" is not a number`);
            }
            return num;
        });

        const result = arr.filter(el => el % 3 === 0);

        if (result.length > 0) {
            console.log(`Elements are multiples of 3: ${result.join(", ")}`);
        } else {
            console.log('There are no elements that are multiples of 3');
        }
}

// Задание 4

// Дана скобочная последовательность: [((())()(())]]
// - Можно ли считать эту последовательность правильной?
// - Если ответ на предыдущий вопрос “нет” - то что необходимо в ней изменить, чтоб она стала правильной?

// Ответ :
// Правильная последовательность будет выглядеть так: " [((())()(()))]".
// В этой последовательности каждой открывающей скобке соответствует правильно расположенная закрывающая скобка, и наоборот.



