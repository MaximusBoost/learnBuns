import getValue from "./modules/get_value.js";// пример импорта, при чем в app.js название функции 
// мы определяем сами
import mapArray from './modules/map.js'


const superHero = [
    {id: 12345, hero: 'batman', power: 'money'},
    {id: 54321, hero: 'aquaman', power: 'fishpower'},
];

console.log(getValue(superHero, 'hero'));
console.log(mapArray(superHero, 'power'));