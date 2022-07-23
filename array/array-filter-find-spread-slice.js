'use strict'

//filter & find

const array = [1,2,3,4,5]
console.log(array)

//filter: loops through the whole array and only returns results that are greater than 3. 
const greaterThan3 = array.filter(n => n > 3);
console.log(`number > 3 is ${greaterThan3}`)

//find: loops through the array and only returns the first number it encounters that's greater than 3. 
const firstNumberGreaterThan3 = array.find(n => n > 3);
console.log(`first number greater than 3 is ${firstNumberGreaterThan3}`)

//more examples

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

//filter returns all of the ab airports
const albertaAirports = airports.filter(airport => airport.province === 'ab');
albertaAirports.forEach(airport => console.log(airport));

const manitobaAirports = airports.filter(airport => airport.province === 'mb');
console.log('manitoba airports')
manitobaAirports.forEach(airport => console.log(airport));
console.log(manitobaAirports.length)
console.log(`There are ${manitobaAirports.length} manitoba airports`)

//find returns the first ab airport it encounters
const albertaAirport = airports.find(airport => airport.province === 'ab');
console.log(`The first alberta airport is ${albertaAirport.code}`)
console.log(`The first alberta airport is ${JSON.stringify(albertaAirport)}`)

//pushing a new object into the array
const yyx = {
    code: 'yyx',
    city: 'victoria',
    province: 'bc',
}

airports.push(yyx);
console.log(airports)

console.log('anotherAirports')

//can use the spread function to include all of the objects in the array
const anotherAirports = [...airports,yyx]
console.log(anotherAirports)

//use slice to cut the array at desired location (remember: javascript starts at 0)
console.log('sliced')

const ab = anotherAirports.slice(1)
console.log(ab)



// const airportCodes = airports.reduce((accumulator, currentValue) => accumulator.push(currentValue.code), [] )

// console.log(`the airport codes are ${airportCodes}`)


const addCountry = airports.map(airport => airport + 'Canada');
addCountry.forEach(airport => console.log(airport));



 