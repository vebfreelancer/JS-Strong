let num  = 266219;

// Преобразовуем число в строку
let numString = String(num);

// Обьявляем переменную в которую выведем сумму
// и присваиваем ей значение 1
let sum = 1;

// Создаем цикл в котором переменной i присваиваем
// значение 0, в каждой итерации цикла переменная i
// увеличивается на 1, цикл повторяется пока величина
// переменной i меньше длины строки переменной numString

for (let i = 0; i < numString.length; i++) {

    // В теле цикла вызываем переменную sum и
    // присваиваем ей значение умножения ее на
    // переменную numString тип которой преобразуется
    // в число оператором + . Используя метод charAt
    // обращаемся к индексу переменной numString используя i,
    // переменная i изначально равна 0 соответственно
    // первым значением переменной numString будет
    // первый ее индекс, с каждой итерацией цикла i
    // увеличивается на 1 и индекс numString последовательно
    // меняется по всей ее длине. Также с каждой итерацией
    // происходит умножение sum, изначально sum равна 1
    // соответсвенно при первом умножении она станет равна
    // первому значению индекса numString, с каждой итерацией
    // sum умножается на следующий индекс numString пока работает
    // цикл и таким образом мы получаем умножение всех цифр num.
    
    sum *= +numString[i];
}

// Возводим в степень по новому стандарту ES6
// ( Это нагуглил;) )
sum **= 3;

// Обьявляем переменную theFirstTwoDigits присваиваем
// ей значение переменной sum преобразованной в строку
let theFirstTwoDigits = String(sum);

// Используя метод substr выводим в консоль первые цифры :)
console.log('sum: '+ theFirstTwoDigits.substr(0, 2));