'use strict'

//map creates a new array with the results of the given function
const cost = [20,15,3,8]
console.log(cost)

const discount = cost.map(n => n * 0.8);
console.log(discount);

const abc = cost.map(n => n * 0.8)
                .filter(n => n > 12)

console.log(`abc is ${abc}`)

const names = ['ben', 'jerry', 'joe']
console.log(names)

const surnames = names.map(name => name +' '+ 'higgins')
console.log(surnames)

const movieList = [
    {
    Title : "Inception",
    Awards : "4 oscars",
    Language : "English",
    imdbRating : "8.8"
    },
 
    {
    Title : "Inception2",
    Awards : "44 oscars",
    Language : "English and Spanish",
    imdbRating : "9.8"
    },
 
    {
    Title : "Interstellar",
    Awards : "10 oscars",
    Language : "English",
    imdbRating : "9.5"
    }
 ]

 const addAttribute = movieList.map((movie) => {
    movie.country = 'CA';
    return movie;
});

console.log(addAttribute);


//reduce takes the initialValue -> sets it as accumulator as the beginning value -> adds the first value (currentValue) in the array to initialValue -> stores result in accumulator -> repeat
const array1 = [1, 2, 3, 4];
 const initialValue = 10;
 const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,initialValue);
console.log(`the number is ${sumWithInitial}`)
console.log(`the number is ${sumWithInitial}`)

const array3 = [1, 2, 3, 4, 5];
const totalValue = array3.reduce((accumulator, currentValue) => {return accumulator + currentValue})
const totalValue1 = array3.reduce((accumulator, currentValue) => accumulator + currentValue, 100 )

console.log(`total value 1 is ${totalValue1}`)


function reducer(previous, current, index, array){
    const returns = previous + current;
    console.log(`prevous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
    return returns;
}

array.reduce(reducer);

const cost5 = [50,20,30,60,10];
const firstValue = 0;
const sumOfPurchase = cost.reduce(
    (previousValue, currentValue)=> previousValue + currentValue);
console.log(`the cost all together is ${sumOfPurchase}`)
