export function mapArray (array, key) { // теперь экспортируем не по "дефолту", а конкретные функции, классы 
    // и т.д. ....

    let result = {};

    for(let i = 0; i <array.length; i++) {
        result[array[i][key]] = array[i];
    };

    return result;
};

export function getValue (array, key) { // пишем функцию, которую будем экспортировать
    let res = [];

    for(let i = 0; i < array.length; i++) {
        res.push(array[i][key]);
    };

    return res;
};