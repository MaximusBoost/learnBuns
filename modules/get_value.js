function getValue (array, key) { // пишем функцию, которую будем экспортировать
    let res = [];

    for(let i = 0; i < array.length; i++) {
        res.push(array[i][key]);
    };

    return res;
};

export default getValue; // экспортируем функцию getValue по дефолту. Теперь для ее импорта будет
// достаточно указать относительный путь. Так как мы ее экспортируем по дефолту, то и импорте
// можем ее обозвать как угодно. (смотри app.js)