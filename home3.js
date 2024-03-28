// 1
firstString = 'Абра '
secondString = 'Кадабра'

function funcJoin(arg1, arg2) {
    return (arg1+arg2)
}
console.log(funcJoin(firstString, secondString))


// 2
arrayPushkin = ['У','Лукоморья' ,'дуб' ,'зеленый,' ,'златая' ,'цепь','на','дубе','том']
function funcJoinArray(arrayStrings){
    return (arrayStrings.join(' '))
}
console.log(funcJoinArray(arrayPushkin))


// 3
someString = 'обычная строка'
function funcReverse(str) {
    return (str.split('').reverse().join(''))
}
console.log(funcReverse(someString))


// 4
function funcUpper(str) {
    return (str[0].toUpperCase() + str.slice(1))
}
console.log(funcUpper(someString))


// 5
function funRandom(min, max) {

    return (Math.floor(Math.random() * (max - min + 1)) + min)
}
console.log(funRandom(1, 100))


// 6
arrNumbers = [1,2,5,3,12,65,3,1,0,8]

function sumNumbers(arr) {

    return(arr.reduce(function(sum, elem) {return sum + elem;}, 0))
}
console.log(sumNumbers(arrNumbers))

    // sum=0
    // for (number of arr){
    //     sum+=number
    // }s
    // return (sum)

// 7
function midleNumbers(arr) {
    return(sumNumbers(arr) / arr.length)
}
console.log(midleNumbers(arrNumbers))
