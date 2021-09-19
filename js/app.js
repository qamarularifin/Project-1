

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "white",
    "black",

]


const colorsToInt = {
    "1": "rgb(255,0,0)",  //red  
     "2": "rgb(0,0,255)" , //blue
     "3": "rgb(0,128,0)" , //green
      "4": "rgb(255,255,0)", //yellow
      "5": "rgb(255,255,255)", //white
     "6": "rgb(0,0,0)", // black

}



console.log(colorsToInt["2"])


// const displayColors = (id, index) =>{

//     const masterArr = [    

//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//     ]
// }




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
                    $guessPinId = $(event.target).attr("id")
                    $sliceGuessPinId = $guessPinId.slice(0, 6)
                    console.log($sliceGuessPinId)
                

                } 
                // else{

                  ///////////////////////////////////////////////////
                    //   Click again to remove the color
            //         $(".guess-pin.active").on("click", (event)=>{
            //             $(event.target).css("background-color", "white")
                        
            // })
                //////////////////////////////////////////////////
                    
                //}
                

            
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






const submitButton = () =>{

   $(".submit").on("click", ()=>{

    
    //showGuessResults()
    checkCorrectAnswer($sliceGuessPinId)

    // Remove all .active class
    $(".active").removeClass("active")
    
    
    console.log("current row: ", currentRow)
    currentRow++
    
    
    
    // Add above row with active class and move .active class one row upwards 
    // and store guess pin colors in array.
    // Add guess-result with class active
    for (let i = 0; i < 4; i++){
        $(`#gpin_${currentRow}_${i}`).addClass("active")
        // add guess-result with class active
        $(`#gpin_ans_${currentRow}_${i}`).addClass("active")

        // get guess current row colors pushed to array "storedCurrentRowColor"
        storedCurrentRowColor.push($(`#gpin_${currentRow-1}_${i}`).eq(0).css("background-color"))
        
    }
  
     console.log("my array: ", storedCurrentRowColor)


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
    console.log("answer array: ", answerPinArr)






    // For class selectors, jQuery uses JavaScript's native 
    // getElementsByClassName() function if the browser supports it.

    // To provide id to individual guess-pin and guess-result
    for(let i = 0; i < 10; i++) {
        
        guessPinArr = guessReversedArray[i].getElementsByClassName("guess-pin");
        guessPinResultArr = guessReversedResultArray[i].getElementsByClassName("guess-result")
        
        //console.log(guessPinResultArr)
        for(let j = 0; j < 4; j++) {
            $(guessPinArr[j]).attr("id",`gpin_${i}_${j}`)
            $(guessPinResultArr[j]).attr("id", `gpin_ans_${i}_${j}`)
        }
    }

    submitButton()


});

