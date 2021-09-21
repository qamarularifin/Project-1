


// const test = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
// ]

// for (let i = 0; i < 3; i++){
//     //console.log(test[i])
// }



// const overallGuessArr = [    

//     [-4,-1,-1,-2],
//     [-1,-1,-1,-3],
//     [-1,-1,-1,-1],
//     [-1,-1,-1,-1],
//     [-1,-1,-1,-1],
//     [-1,-1,-1,-1],
//     [-1,-1,-1,-1],
//     [-1,-1,-1,-1],
//     [-1,-1,-1,-1],
//     [-1,-1,-1,-1],
// ]

// overallGuessArr[0][0] = "y"
// console.log(overallGuessArr)


const answer = [3,6,1,1]
const guess = [6,1,1,3]
let newAns = []
let newGuess = []

let ans = newAns.push(answer.shift())
let gue = newGuess.push(guess.shift())
console.log(newAns)
console.log(newGuess)
console.log(gue)

for (let i of [ans]){
    for (let j of [gue]){
        if (j === i){
            console.log("exact")
        }else{
            console.log("semi")
        }
    }
    
}


// for (let i = 0; i < guess.length; i++){
//     console.log("i", guess[i])
    

//     for (let j = 0; j < answer.length; j++){
//         console.log("jj", answer[j])
//         // if (i === jj){

//         // }
//     }
// }