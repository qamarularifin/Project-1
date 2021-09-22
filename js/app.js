

const colors = ["red","blue","green","yellow","orange","black",]
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
let arr4 = [0,1,2,3]
let arr9 = [0,1,2,3,4,5,6,7,8,9]

let storedCurrentRowColor = [];
let answerPinArr = [];

//converted colors to int array

let convAnswerPinArr;
let convGuessPinArr;

const displayOverallGuess = (pos, color) =>{
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

const answerHide = () => {
    $(".answer-inner-row").hide()
    $(".submit").css("margin", "5px 0px 0px 130px")   // org position "5px 0px 0px 302px"

}


// reverse the guess-row-pin
const reverseGuessRowPin = () =>{
    
    arr9.forEach((item, i) =>{ 

        guessReversedArray.push($(".guess-row-pin")[i])
    } )
    return guessReversedArray.reverse()
}

// reverse the guess-row-result
const reverseGuessRowResultPin = () =>{

    arr9.forEach((item, i) =>{
        guessReversedResultArray.push($(".guess-row-result")[i])
    })
    return guessReversedResultArray.reverse()
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




    
    // guesses is an array from overallGuessArr ===> checkOverallAns(overallGuessArr[currentRow-1])
    const checkOverallAns = (guesses) =>{
        let results = []  
        let dupAnsCheck = []  
        
        convAnswerPinArr.forEach(ans => dupAnsCheck.push(ans))
        console.log("org dupAns", dupAnsCheck)

        ///////////////////////////
        guesses.forEach((guess, index) =>{
            // color the results pin as red
            if(guess === dupAnsCheck[index]){  
                results.push("exact")
                dupAnsCheck[index] = "x"   // change the value to x to that position in dupAnsCheck
                guesses[index] = "y"       // change the value to y to that position in guess
                
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

        console.log("dupAnsCheck", dupAnsCheck)
        console.log("overallGuessArr", guesses)
        console.log("results", results)
        
        return results //not needed
        }


        const checkWin = (guesses) =>{

          guesses.every((guess, i) =>{
              if (guess === "y"){
                  console.log("You win")
              }

          })
            // if (checkOverallAns(guesses) === ["exact", "exact", "exact", "exact"]){
            //     prompt("You win")
            // }
            


        }

const submitButton = () =>{

   $(".submit").on("click", ()=>{

    
    // Remove all .active class
    $(".active").removeClass("active")
    
    console.log("Guess pin :", overallGuessArr[currentRow])
    console.log("current row: ", currentRow)
    
    currentRow++
    
    // Add above row with active class and move .active class one row upwards 
    // and store guess pin colors in array.
    // Add guess-result with class active

    
    arr4.forEach((item,i) =>{
        $(`#gpin_${currentRow}_${i}`).addClass("active")
        // add guess-result with class active
        $(`#gpin_ans_${currentRow-1}_${i}`).addClass("active")

        // get guess current row colors pushed to array "storedCurrentRowColor"
        storedCurrentRowColor.push($(`#gpin_${currentRow-1}_${i}`).eq(0).css("background-color"))  // prints "rgb(255, 0, 0)"
    })

    // check all answers here
    //checkAllCorrect(currentRow - 1)
    checkOverallAns(overallGuessArr[currentRow-1])
    checkWin(overallGuessArr[currentRow-1])
    
    
      // show my color array in rgb format
     //console.log("my color array: ", storedCurrentRowColor)
      // converted colors of guess-pin into integers
    
    // might not needed
    //  convGuessPinArr = colorsToInt(storedCurrentRowColor)
    //  console.log("Guess pin: ", convGuessPinArr)
     


})
}


$(()=>{

    answerHide()
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
            $(guessPinArr[j]).attr("id",`gpin_${i}_${j}`)  //$(guessPinArr[j]), j refers to 0
            $(guessPinResultArr[j]).attr("id", `gpin_ans_${i}_${j}`)
        }
    }

    submitButton()

});

