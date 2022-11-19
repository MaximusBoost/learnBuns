// import getValue from "./modules/get_value.js";// пример импорта, при чем в app.js название функции 
// // мы определяем сами
// import mapArray from './modules/map.js' первые два импорта примеры импорта отдельных файлов,
// где содержалось по одной функции, импорт был по дефолту.
// Ниже рассмотри, где функции содержатся в одном файле.js и экспоритруется из него каждая индивидуально

// import { getValue, mapArray } from "./modules/helpes_array.js"; // Таким образом в фигурных скобках мы
// выбираем то, что хотим импортировать с файла, указанного в кавычках вышего после слова from. 
// Имена теперь мы не обозначаем сами, а указываем именно те, которые были у нас в файле, с которого 
// мы экспоритровали.
// Теперь отключаем третий импорт, чтобы поработать с файлом helpes_array2.js

import { mapArray } from "./modules/helpes_array2.js";

const superHero = [
    {id: 12345, hero: 'batman', power: 'money'},
    {id: 54321, hero: 'aquaman', power: 'fishpower'},
];

// console.log(getValue(superHero, 'hero'));
console.log(mapArray(superHero, 'power'));