

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "black",

]

const overallGuessArr = [ [],[],[],[],[],[],[],[],[],[],]

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




    
    // guesses is an array from overallGuessArr ===>   checkOverallAns(overallGuessArr[currentRow-1])
    const checkOverallAns = (guesses) =>{
        let results = []  
        let dupAnsCheck = []  
        
        convAnswerPinArr.forEach(ans => dupAnsCheck.push(ans))
        console.log("org dupAns", dupAnsCheck)

        ///////////////////////////
        guesses.forEach((guess, index) =>{
            
            if(guess === dupAnsCheck[index]){  // if matches push 1
                results.push("exact")
                dupAnsCheck[index] = "x"   // change the value to -1 to that position in dupAnsCheck
                guesses[index] = "y"                 // change the value to -2 to that position in guess
                
                // color the results pin as red
                for (let i = 0; i < 4; i++){
                    if (results[i] === "exact"){
                        $(`#gpin_ans_${currentRow-1}_${i}`).css("background-color", "red")
                    } 
                    
                }
                
            }  
            

        })
        ///////////////////////////////

            // color the results pin as gray
            for (let i = 0; i < 4; i++){
                for (let j = 0; j < 4; j++){
                    // console.log("dupAns", dupAnsCheck[j])
                    // console.log("guesses", guesses[i])
                    if(guesses[i] === dupAnsCheck[j]){
                        results.push("semi")
                        dupAnsCheck[j] = "x"
                        guesses[i] = "y"
                        
                        for (let i = 0; i < 4; i++){
                            if (results[i] === "semi"){
                                $(`#gpin_ans_${currentRow-1}_${i}`).css("background-color", "gray")
                            } 
                    }
                }
            }}

            //===================================//       
            // guesses.forEach((guess,index) =>{

            //     if(dupAnsCheck.includes(guess)){
                    
            //             results.push(-1)
            //             // dupAnsCheck[index] = -1
            //             // guesses[index] = -2
                        
                    

            //         for (let i = 0; i < 4; i++){
            //             if (results[i] === -1){
            //                 $(`#gpin_ans_${currentRow-1}_${i}`).css("background-color", "gray")
            //             } 
                        
            //         }
                    
            //     }
            // })
            //===================================//  
        
        console.log("dupAnsCheck", dupAnsCheck)
        console.log("overallGuessArr", guesses)
        console.log("results", results)
        
        return results
        }

            
           
      


 //==========latest working checkOverallAns code================//
  
    // guesses is an array from overallGuessArr ===>   checkOverallAns(overallGuessArr[currentRow-1])
    // const checkOverallAns = (guesses) =>{
    //     let results = []  //gradRay
    //     let dupAnsCheck = []  //aRay
    //     let extraAnsArr = []  // pop into here from dupAnsCheck

    //     convAnswerPinArr.forEach(ans => dupAnsCheck.push(ans))


    //     guesses.forEach((guess, index) =>{
            
    //         if(dupAnsCheck[index] === guess){  // if matches push 1
                
    //             dupAnsCheck[index] = -1   // change the value to -1 to that position in dupAnsCheck
    //             guesses[index] = -2                 // change the value to -2 to that position in guess
    //             results.push(1)
                
    //             for (let i = 0; i < 4; i++){
    //                 if (results[i] === 1){
    //                     $(`#gpin_ans_${currentRow-1}_${i}`).css("background-color", "red")
    //                 } 
                    
    //             }
                
    //         }


    //     })
    //     guesses.forEach((guess, index) =>{
    //         // only if guess is not -1 or -2, execute below code block
    //         // if (guess > 0 && dupAnsCheck[index] > 0){}

    //             if(dupAnsCheck.includes(guess)){
    //                 results.push(-1)
    //                 //dupAnsCheck[index]
                    
    
    //                 for (let i = 0; i < 4; i++){
    //                     if (results[i] === -1){
    //                         $(`#gpin_ans_${currentRow-1}_${i}`).css("background-color", "gray")
    //                     } 
                        
    //                 }
                    
    //             }

    //         }
           
    //     )
        
    //     console.log("dupAnsCheck", dupAnsCheck)
    //     console.log("overallGuessArr", guesses)
    //     console.log("results", results)
    //     console.log("extraAnsArr", extraAnsArr)
    //     return results
    // }

//============================================================//










  
//=============checkOverallAns codes (org)===================//

    // guesses is an array from overallGuessArray
    // const checkOverallAns = (guesses) =>{
    //     const results = []
    //     const dupCheck = []

    //     guesses.forEach((guess, index) =>{
            
    //         if(convAnswerPinArr[index] === guess){
    //             results.push("exact")
    //             dupCheck.push(guess)
                

    //             for (let i = 0; i < 4; i++){
    //                 if (results[i] === "exact"){
    //                     $(`#gpin_ans_${currentRow-1}_${i}`).css("background-color", "red")
    //                 } 
                    
    //             }
                
    //         }

    //     })
    //     guesses.forEach((guess) =>{
    //         if(!dupCheck.includes(guess) && convAnswerPinArr.includes(guess)){
    //             results.push("semi")

    //             for (let i = 0; i < 4; i++){
    //                 if (results[i] === "semi"){
    //                     $(`#gpin_ans_${currentRow-1}_${i}`).css("background-color", "gray")
    //                 } 
                    
    //             }
                
    //         }
    //     })
    //     console.log("dupCheck :", dupCheck)
    //     return results
    // }

//========================================//




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
    checkOverallAns(overallGuessArr[currentRow-1])
    
 

      // show my color array in rgb format
     //console.log("my color array: ", storedCurrentRowColor)
      // converted colors of guess-pin into integers
    
    // might not needed
    //  convGuessPinArr = colorsToInt(storedCurrentRowColor)
    //  console.log("Guess pin: ", convGuessPinArr)
     



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

