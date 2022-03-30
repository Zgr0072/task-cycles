/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let count = 0;
    if (start % 2) start++; // неявное преобразование результата (1 или 0) в true или false
    if (end % 2) end--;
    for (let i = start; i <= end; i += 2) {
        count += i;
    }
    return count;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let count = 0;
    while (a > 0.1) {
        a /= 2;
        count++;
    }
    return count;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    var i = 0;
    var end = message.length;
    var tempString = '',
        resString = '';
    do {
        (i + 1) % 3 == 0 && i > 0
            ? (tempString = '_')
            : (tempString = message[i]);
        resString += tempString;
        i++;
        if (i >= end) break;
    } while (true);
    return resString;
}
