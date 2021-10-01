
const selectPinColor =[
    ["red", "pink"],
    ["blue", "purple"],
    ["green", "cyan"],
    ["yellow", "gray"],
    ["orange", "lime"],
    ["black", "navy"],
]

let newSelectColor = []
let overallGuessArr = [[],[],[],[],[],[],[],[],[],[],]

let guessReversedArray = [];
let guessReversedResultArray = [];
let currentRow = 0;
let $chosenColor = "";
let guessPinArr;
let guessPinResultArr;
let $guessPinId;
let $sliceGuessPinId;
let arr4 = [0,1,2,3]
let arr9 = [0,1,2,3,4,5,6,7,8,9]

let storedCurrentRowColor = [];
let answerPinArr = [];
const checkSound = new Audio("./sounds/swish.mp3");
const winSound = new Audio("./sounds/cash.mp3");
const lostSound = new Audio("./sounds/aww.mp3");

//converted colors to int array
let convAnswerPinArr;
let convGuessPinArr;

// To store the answers as int and for comparison of answers
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

        if (color === "rgb(255, 0, 0)" || color === "rgb(255, 192, 203)"){     //red and pink
            return 1
        }
        if (color === "rgb(0, 0, 255)" || color === "rgb(128, 0, 128)"){    //blue and purple
            return 2
        }
        if (color === "rgb(0, 128, 0)" || color === "rgb(0, 255, 255)"){   //green and cyan
            return 3
        }
        if (color === "rgb(255, 255, 0)" || color === "rgb(128, 128, 128)"){   //yellow and gray
            return 4
        }
        if (color === "rgb(255, 165, 0)" || color === "rgb(0, 255, 0)"){    //orange and lime
            return 5
        }
        if (color === "rgb(0, 0, 0)" || color === "rgb(0, 0, 128)"){      //black and navy
            return 6
        }

}

// pass in answerPinArr into array
const colorsAnsToInt = (color) =>{

    let newArr = []
    
        for (let i = 0; i < color.length; i++){
            if (color[i] === "rgb(255, 0, 0)" || color[i] === "rgb(255, 192, 203)"){
                newArr.push(1)
            }
            if (color[i] === "rgb(0, 0, 255)" || color[i] === "rgb(128, 0, 128)"){
                newArr.push(2)
            }
            if (color[i] === "rgb(0, 128, 0)" || color[i] === "rgb(0, 255, 255)"){
                newArr.push(3)
            }
            if (color[i] === "rgb(255, 255, 0)" || color[i] === "rgb(128, 128, 128)"){
                newArr.push(4)
            }
            if (color[i] === "rgb(255, 165, 0)" || color[i] === "rgb(0, 255, 0)"){
                newArr.push(5)
            }
            if (color[i] === "rgb(0, 0, 0)" || color[i] === "rgb(0, 0, 128)"){
                newArr.push(6)
            }
        }
        return newArr

}
// Randomly assign colors to answer-pin
const answerPin = () =>{
    
    // change colors to selector colors
    $("#answer-1").css("background-color", newSelectColor[Math.floor(Math.random() * newSelectColor.length)])
    $("#answer-2").css("background-color", newSelectColor[Math.floor(Math.random() * newSelectColor.length)])
    $("#answer-3").css("background-color", newSelectColor[Math.floor(Math.random() * newSelectColor.length)])
    $("#answer-4").css("background-color", newSelectColor[Math.floor(Math.random() * newSelectColor.length)])
}
// Hide the answer row
const answerHide = () => {
    $(".answer-inner-row").hide()
    $(".submit").css("margin", "5px 0px 0px 130px")   // org position "5px 0px 0px 302px"

}
// Show the answer row
const answerShow = () => {
    $(".answer-inner-row").show()
    $(".submit").css("margin", "5px 0px 0px 10px")   // org position "5px 0px 0px 302px"

}

// reverse the guess-row-pin from 9 to 0
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

// Select color and assign selected peg with the color
const selectPin = () =>{
    
    //console.log("current row: ", currentRow)
    
        $(".select-pin").on("click", (event) =>{
            $chosenColor = $(event.target).css("background-color")
            console.log($chosenColor)
            // only active pins can be clicked
            $(".guess-pin.active").on("click", (event)=>{

                if ($(event.target).hasClass("active")){
                    $(event.target).css("background-color", $chosenColor)
                    // generate an id based on button pressed
                    let $guessPinId = $(event.target).attr("id")    
                    displayOverallGuess($guessPinId, $chosenColor)    
                } 
              
            })

        })
}

// highlight current row with white border
const highlightRow = () =>{

    if ($(".guess-row-pin").hasClass("active")){
        $(".guess-row-pin.active").css("border", "1.5px solid white")

    } 
    
}
// hightlight all rows if won
const winningHighlightRow = () =>{
    $(".guess-row-pin").css("border", "1.5px solid white")
}


// guesses is an array from overallGuessArr ===> checkOverallAns(overallGuessArr[currentRow-1])
// Compare answers in form of int
const checkOverallAns = (guesses) =>{
        let results = []
        let dupAnsCheck = []  
        
        convAnswerPinArr.forEach(ans => dupAnsCheck.push(ans))
        console.log("org dupAns", dupAnsCheck)

        guesses.forEach((guess, index) =>{
            // color the results pin as red
            if(guess === dupAnsCheck[index]){  // guess is each element within an array
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

            // color the results pin as gray
            for (let i = 0; i < 4; i++){
                for (let j = 0; j < 4; j++){
                    if(guesses[i] === dupAnsCheck[j]){
                        results.push("semi")
                        dupAnsCheck[j] = "x"
                        guesses[i] = "y"
                        
                        // color the results pin as gray
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
        
        }

// check if all reds, then highlight all rows, show answer and play sound
const checkWin = () =>{
              
            if ($(`#gpin_ans_${currentRow-1}_${0}`).css("background-color") === "rgb(255, 0, 0)"
            && $(`#gpin_ans_${currentRow-1}_${1}`).css("background-color") === "rgb(255, 0, 0)"
            && $(`#gpin_ans_${currentRow-1}_${2}`).css("background-color") === "rgb(255, 0, 0)"
            && $(`#gpin_ans_${currentRow-1}_${3}`).css("background-color") === "rgb(255, 0, 0)"){
                $(".submit").text("You Won!!!").css("background-color", "green")
                winningHighlightRow()
                answerShow()
                winSound.play()
            }

            // lost game if exceed currentRow 9
            if (currentRow > 9 ){
                $(".submit").text("You Lost!!!").css("background-color", "red")
                answerShow()
                lostSound.play()
            }

        }

const submitButton = () =>{

   $(".submit").on("click", ()=>{

    $(".guess-row-pin").css("border", "1px solid black") 
    
    // Remove all .active class
    $(".active").removeClass("active")
    
    //console.log("Guess pin: ", overallGuessArr[currentRow])
    //console.log("current row: ", currentRow)
    // increase currentRow once button clicked
    currentRow++
    
    // Add above row with active class and move .active class one row upwards 
    // and store guess pin colors in array.
    // Add guess-result with class active

    arr4.forEach((item,i) =>{
        // add guess-pin with class active
        $(`#gpin_${currentRow}_${i}`).addClass("active")
        // add guess-result with class active
        $(`#gpin_ans_${currentRow-1}_${i}`).addClass("active")
        // add guess-pin-row with class active
        $(`#guess_row_pin_${currentRow}`).addClass("active")

        // get guess current row colors pushed to array "storedCurrentRowColor"
        storedCurrentRowColor.push($(`#gpin_${currentRow-1}_${i}`).eq(0).css("background-color"))  // prints "rgb(255, 0, 0)"
   
    })

    checkSound.play()
    checkOverallAns(overallGuessArr[currentRow-1])
    checkWin()     
    highlightRow()


})
}
