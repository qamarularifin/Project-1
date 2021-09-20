

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "black",

]



// not needed
// const colorsToInt = {
//     "1": "rgb(255,0,0)",  //red  
//      "2": "rgb(0,0,255)" , //blue
//      "3": "rgb(0,128,0)" , //green
//       "4": "rgb(255,255,0)", //yellow
//       "5": "rgb(255, 165, 0)", //orange
//      "6": "rgb(0,0,0)", // black

// }

// not needed
// const colorsToIntObj = {
//     "rgb(255,0,0)" : 1,  //red  
//     "rgb(0,0,255)" :  2, //blue
//     "rgb(0,128,0)" :  3, //green
//     "rgb(255,255,0)" : 4, //yellow
//     "rgb(255, 165, 0)" : 5 , //orange
//     "rgb(0,0,0)" : 6, // black

// }

// not needed
// const overallGuessArr = [    

//     [-2,-2,-2,-2],
//     [-2,-2,-2,-2],
//     [-2,-2,-2,-2],
//     [-2,-2,-2,-2],
//     [-2,-2,-2,-2],
//     [-2,-2,-2,-2],
//     [-2,-2,-2,-2],
//     [-2,-2,-2,-2],
//     [-2,-2,-2,-2],
//     [-2,-2,-2,-2],
// ]

const overallGuessArr = [ [],[],[],[],[],[],[],[],[],[],]


const displayOverallGuess = (pos, color) =>{
    //console.log(pos, color)
    let splitPos = pos.split("_")   
    //console.log(splitPos)  // ["gpin", "0", "0"]
    let a = splitPos[1]  // 0
    let b = splitPos[2]  // 0

    overallGuessArr[a][b] = colorsToInt(color)
    //console.log(overallGuessArr)
    
}




// pass in $chosenColor into array
const colorsToInt = (color) =>{

        if (color === "rgb(255, 0, 0)"){
            return 1
        }
        if (color === "rgb(0, 0, 255)"){
            return 2
        }
        if (color === "rgb(0, 128, 0)"){
            return 3
        }
        if (color === "rgb(255, 255, 0)"){
            return 4
        }
        if (color === "rgb(255, 165, 0)"){
            return 5
        }
        if (color === "rgb(0, 0, 0)"){
            return 6
        }

}




// pass in answerPinArr into array
const colorsAnsToInt = (color) =>{

    let newArr = []
    
        for (let i = 0; i < color.length; i++){
            if (color[i] === "rgb(255, 0, 0)"){
                newArr.push(1)
            }
            if (color[i] === "rgb(0, 0, 255)"){
                newArr.push(2)
            }
            if (color[i] === "rgb(0, 128, 0)"){
                newArr.push(3)
            }
            if (color[i] === "rgb(255, 255, 0)"){
                newArr.push(4)
            }
            if (color[i] === "rgb(255, 165, 0)"){
                newArr.push(5)
            }
            if (color[i] === "rgb(0, 0, 0)"){
                newArr.push(6)
            }
        }
        return newArr

}




let guessReversedArray = [];
let guessReversedResultArray = [];
let currentRow = 0;
let $chosenColor = "";
let isPicked = true;
let guessPinArr;
let guessPinResultArr;
let $guessPinId;
let $sliceGuessPinId;

let storedCurrentRowColor = [];
let answerPinArr = [];

//converted colors to int array

let convAnswerPinArr;
let convGuessPinArr;



const answerPin = () =>{
    
    $("#answer-1").css("background-color", colors[Math.floor(Math.random() * colors.length)])
    $("#answer-2").css("background-color", colors[Math.floor(Math.random() * colors.length)])
    $("#answer-3").css("background-color", colors[Math.floor(Math.random() * colors.length)])
    $("#answer-4").css("background-color", colors[Math.floor(Math.random() * colors.length)])
}





// reverse the guess-pin
const reverseGuessRowPin = () =>{
    
    for (let i = 9; i >=0; i--){
        guessReversedArray.push($(".guess-row-pin")[i])
    }
    //console.log(guessReversedArray)
}

// reverse the guess-row-result
const reverseGuessRowResultPin = () =>{
    
    for (let i = 9; i >=0; i--){
        guessReversedResultArray.push($(".guess-row-result")[i])
    }
    //console.log(guessReversedResultArray)
}


const selectPin = () =>{
    // Select color and assign selected peg with the color


    console.log("current row: ", currentRow)
    
        $(".select-pin").on("click", (event) =>{
            $chosenColor = $(event.target).css("background-color")
            console.log($chosenColor)

            $(".guess-pin.active").on("click", (event)=>{

                

                if ($(event.target).hasClass("active")){
                    $(event.target).css("background-color", $chosenColor)
                    // generate an id based on button pressed
                    let $guessPinId = $(event.target).attr("id")    //here issue is duplicatess
                    // slice to get gpin_0 only
                    $sliceGuessPinId = $guessPinId.slice(0, 6) // this is for old method of checking without integers
                    //console.log($sliceGuessPinId) // will print gpin_0
                    //console.log($guessPinId)
                    
                    displayOverallGuess($guessPinId, $chosenColor)
                    
                    
                } 
                // might not needed
            //     else{

            //       /////////////////////////////////////////////////
            //           //Click again to remove the color
            //         $(".guess-pin.active").on("click", (event)=>{
            //             $(event.target).css("background-color", "white")
                        
            // })
            //     ////////////////////////////////////////////////
                    
            //     }
                
            })

        })
}


const checkCorrectAnswer = (guessPin) =>{   
    //there is 6 colors. 
    
    //WORK ON THIS ONEEEEE!!!!!!!!!!!!
    // check if all guess pins exists from the answer pins
    // use .includes with an array. Make answer pins as an array

    //check all positions are correct 
    if ($(`#${guessPin}_${0}`).css("background-color") === $("#answer-1").css("background-color")
        && $(`#${guessPin}_${1}`).css("background-color") === $("#answer-2").css("background-color")
        && $(`#${guessPin}_${2}`).css("background-color") === $("#answer-3").css("background-color")
        && $(`#${guessPin}_${3}`).css("background-color") === $("#answer-4").css("background-color")
    
    ){
        console.log("All correct position")
        $(".guess-result.active").css("background-color", "red")
    
    } 
    
    // WORK ON THIS!!!!!
    //check 1st col color correct, wrong position or non existent
    if (answerPinArr.includes($(`#${guessPin}_${0}`).css("background-color"))){
        
        
    }
        
        {
        console.log("yahoo")
    }


    // to add back if not working
    // //check right color, wrong position
    // if (answerPinArr.includes($(`#${guessPin}_${0}`).css("background-color"))
    //     || answerPinArr.includes($(`#${guessPin}_${1}`).css("background-color"))
    //     || answerPinArr.includes($(`#${guessPin}_${2}`).css("background-color"))
    //     || answerPinArr.includes($(`#${guessPin}_${3}`).css("background-color"))
    
    // )
        
    //     {
    //     console.log("yahoo")
    // }
    
}

// paste back below if doesnt work
// const checkCorrectAnswer = (guessPin) =>{   
//     //there is 6 colors. 
//     //check all positions are correct 
//     if ($(`#${guessPin}_${0}`).css("background-color") === $("#answer-1").css("background-color")
//         && $(`#${guessPin}_${1}`).css("background-color") === $("#answer-2").css("background-color")
//         && $(`#${guessPin}_${2}`).css("background-color") === $("#answer-3").css("background-color")
//         && $(`#${guessPin}_${3}`).css("background-color") === $("#answer-4").css("background-color")
    
//     ){
//         console.log("All correct position")
//         $(".guess-result.active").css("background-color", "red")
    
//     //check right color, wrong position
//     } else if ($(`#${guessPin}_${0}`).css("background-color") === $("#answer-1").css("background-color")
//         && $(`#${guessPin}_${1}`).css("background-color") === $("#answer-2").css("background-color")
//         && $(`#${guessPin}_${2}`).css("background-color") === $("#answer-3").css("background-color")
//         && $(`#${guessPin}_${3}`).css("background-color") === $("#answer-4").css("background-color"))
        
//         {
//         console.log("wrong")
//     } 
    
// }




// not needed
const showGuessResults = () =>{

    // if color is correct and position correct
    // return red

    // if color is correct and position incorrect
    // return black

    //if color is non-existent
    //return empty

    //$(".guess-result.active").css("background-color", "black")
    $(".guess-result.active").css("background-color", "red")
}

    //     // check one row at a time
    // const checkAllCorrect = (currentRow) =>{
    //     for (let i = 0; i < 4; i++){
    //         if (overallGuessArr[currentRow][i] === convAnswerPinArr[i]){
    //             console.log("ok")
    //             $(`#gpin_ans_${currentRow}_0`).css("background-color", "red")
    //         } else{
    //             console.log("nope")
    //         }

    //     }
        
    // }
    
    // guesses is an array from overallGuessArray
    const checkOverallAns = (guesses) =>{
        const results = []
        const dupCheck = []

        guesses.forEach((guess, index) =>{
            if(convAnswerPinArr[index] === guess){
                results.push("full")
                dupCheck.push(guess)
                $(".guess-result.active").css("background-color", "red")
            }

        })
        guesses.forEach((guess) =>{
            if(!dupCheck.includes(guess) && convAnswerPinArr.includes(guess)){
                results.push("half")
                $(".guess-result.active").css("background-color", "gray")
            }
        })
        return results
    }



   


const submitButton = () =>{

   $(".submit").on("click", ()=>{

    // old method of checking answer
    //showGuessResults()
    //checkCorrectAnswer($sliceGuessPinId)

    // Remove all .active class
    $(".active").removeClass("active")
    
    console.log("Guess pin :", overallGuessArr[currentRow])

    
    
    console.log("current row: ", currentRow)
    currentRow++
    
    
    
    // Add above row with active class and move .active class one row upwards 
    // and store guess pin colors in array.
    // Add guess-result with class active
    for (let i = 0; i < 4; i++){
        $(`#gpin_${currentRow}_${i}`).addClass("active")
        // add guess-result with class active
        $(`#gpin_ans_${currentRow-1}_${i}`).addClass("active")

        // get guess current row colors pushed to array "storedCurrentRowColor"
        storedCurrentRowColor.push($(`#gpin_${currentRow-1}_${i}`).eq(0).css("background-color"))  // prints "rgb(255, 0, 0)"
        
        
    }

    // check all answers here
    //checkAllCorrect(currentRow - 1)
    console.log(checkOverallAns(overallGuessArr[currentRow - 1]))
    
 


      // show my color array in rgb format
     //console.log("my color array: ", storedCurrentRowColor)
      // converted colors of guess-pin into integers
    
    // might not needed
    //  convGuessPinArr = colorsToInt(storedCurrentRowColor)
    //  console.log("Guess pin: ", convGuessPinArr)
     


    // // TO WORK ON!!!!!!!!!!!!!!AND REFACTORRRR
    //  // black pin check
    //  const getGrade = () =>{
    //     let gradRay = []
    //     let aRay = []
    //     for (let i = 0; i < 4; i++){
    //         aRay.push(convAnswerPinArr[i])
    //     }
    //     //console.log(aRay)

    //     for (let i = 0; i < 4; i++){
    //         if(convGuessPinArr[i] === aRay[i]){
    //             gradRay.push(1);
    //             aRay[i] = -1
    //             convGuessPinArr[i] = -2
    //         }
    //     }
    //     console.log(aRay)
    //     console.log(convGuessPinArr)
    //     console.log(gradRay)

    //     return gradRay
    // }

    // getGrade()


    


        
    

     


})
}


$(()=>{

    
    reverseGuessRowPin()
    reverseGuessRowResultPin()
    selectPin()
    
    answerPin()


    // for loop to push answer-pin to array
    for (let i = 1; i <=4; i++){
        answerPinArr.push($(`#answer-${i}`).eq(0).css("background-color"))
    }
    //console.log("ans color array: ", answerPinArr)

    // converted colors of answer-pin to integers
    convAnswerPinArr = colorsAnsToInt(answerPinArr)
    console.log("Answer pin: ", convAnswerPinArr)

    // For class selectors, jQuery uses JavaScript's native 
    // getElementsByClassName() function if the browser supports it.

    // To provide id to individual guess-pin and guess-result
    for(let i = 0; i < 10; i++) {
        
        guessPinArr = guessReversedArray[i].getElementsByClassName("guess-pin"); // get individual guess pin
        guessPinResultArr = guessReversedResultArray[i].getElementsByClassName("guess-result") // get individual guess pin result
        
        //console.log(guessPinArr)
        for(let j = 0; j < 4; j++) {
            $(guessPinArr[j]).attr("id",`gpin_${i}_${j}`)
            $(guessPinResultArr[j]).attr("id", `gpin_ans_${i}_${j}`)
        }
    }








    submitButton()


    


});

