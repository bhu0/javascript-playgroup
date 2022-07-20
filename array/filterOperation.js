'use strict'

const array = [1,2,3,4,5]

console.log(array)

const greaterThan3 = array.filter(n => n > 3);

console.log(`number > 3 is ${greaterThan3}`)

const firstNumberGreaterThan3 = array.find(n => n > 3);

console.log(`first number greater than 3 is ${firstNumberGreaterThan3}`)

const airports = [{
    code: 'yyc',
    city: 'calgary',
    province: 'ab',
},
{
    code: 'yyz',
    city: 'toronto',
    province: 'on',
},
{
    code: 'yvr',
    city: 'vancouver',
    province: 'bc',
},
{
    code: 'yeg',
    city: 'edmonton',
    province: 'ab',
},
{
    code: 'lax',
    city: 'los angeles',
    province: 'ca',
}
]

const albertaAirports = airports.filter(airport => airport.province === 'ab');
albertaAirports.forEach(airport => console.log(airport));

const manitobaAirports = airports.filter(airport => airport.province === 'mb');
console.log('manitoba airports')
manitobaAirports.forEach(airport => console.log(airport));
console.log(manitobaAirports.length)
console.log(`There are ${manitobaAirports.length} manitoba airports`)


const albertaAirport = airports.find(airport => airport.province === 'ab');
console.log(`The first alberta airport is ${albertaAirport.code}`)
console.log(`The first alberta airport is ${JSON.stringify(albertaAirport)}`)

const yyx = {
    code: 'yyx',
    city: 'victoria',
    province: 'bc',
}

airports.push(yyx);
console.log(airports)

console.log('anotherAirports')

const anotherAirports = [...airports,yyx]
console.log(anotherAirports)

console.log('sliced')

const ab = anotherAirports.slice(1)
console.log(ab)

// console.log('animals')

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(anotherAirports.slice(2));

