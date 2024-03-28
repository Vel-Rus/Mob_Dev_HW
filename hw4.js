// 1
function makeNegative (number) {
    return number <=0 ? number : -number
}

// 2
function rockPaperScissors(player1, player2) {
    if (player1 == player2) {
        return 'Draw!'
    } else if (player1=='scissors' && player2=='paper') {
        return "Player 1 won!"
    } else if (player2=='scissors' && player1=='paper') {
        return "Player 2 won!"
    } else if (player1=='rock' && player2=='paper') {
        return "Player 2 won!"
    } else if (player2=='rock' && player1=='paper') {
        return "Player 1 won!"
    } else if (player1=='rock' && player2=='scissors') {
        return "Player 1 won!"
    } else if (player2=='rock' && player1=='scissors') {
        return "Player 2 won!"
    } else return 'unknown sign'
}

// 3
function arraySum (array) {
    return(array.reduce(function(sum, elem) {return elem > 0 ? sum + elem : sum}, 0))
}

// 4
function getArray (step, maxValue) {
    array = []
    for (let i=step; i<=maxValue*step; i+=step) {
        array.push(i)
    }
    return(array)
}

// 5

function getAtrafficlightNextColorsrray(collor, iteration) {
    let array = ['green','yellow','red','yellow']
    let index = collor.indexOf(collor)
    let result = []

    for (let i = 0; i < iteration; i++) {
        index = (index + 1) % array.length
        result.push(array[index])
    }
    return(result)
}
console.log(getAtrafficlightNextColorsrray('green',4))
