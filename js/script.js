let drink = 'Кава';

switch (drink) {
    case 'Кава':
        console.log('Кава');
        break;
    case 'Чай':
        console.log('Чай');
        break;
    case 'Сік':
        console.log('Сік');
        break;
}



let day = 'понеділок';

switch (day) {
    case 'понеділок':
    case 'вівторок':
    case 'середа':
    case 'четвер':
    case 'п’ятниця':
        console.log('Це робочий день');
        break;
    case 'субота':
    case 'неділя':
        console.log('Це вихідний');
        break;
    default:
        console.log('Невідомий день');
}



let month = 5;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Літо');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осінь');
        break;
    default:
        console.log('Неправильний номер місяця');
}



let color = 'червоний';

switch (color) {
    case 'червоний':
        console.log('стоп');
        break;
    case 'зелений':
        console.log('йти');
        break;
    case 'жовтий':
        console.log('чекати');
        break;
}



let a = 17;
let b = 3;
let operator = '+';

switch (operator) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        if (b === 0) {
            console.log('Не можна ділити на нуль');
        } else {
            console.log(a / b);
        }
        break;
    default:
        console.log('Невідомий оператор');
}