
$(()=>{

    //-----modal---------///

    $("#open").on("click", () =>{
        $(".modal-container").addClass("show")
    })

    $("#how").on("click", () =>{
        $(".how-container").addClass("showp")
    })

    $("#close").on("click", () =>{
        $(".how-container").removeClass("showp")
    })

    $("#restart").on("click", () =>{
        answerHide()
        $(".guess-row-pin").css("border", "1px solid black")
        $(".active").removeClass("active")
        $(".guess-pin").css("background-color", "rgb(167, 154, 163)")
        $(".guess-result").css("background-color", "rgb(228, 125, 84)")
        $(".submit").css("background-color", newSelectColor[Math.floor(Math.random() * newSelectColor.length)]).text("Check!")
        overallGuessArr = [ [],[],[],[],[],[],[],[],[],[],]
        guessReversedArray = [];
        guessReversedResultArray = [];
        currentRow = 0;
        storedCurrentRowColor = [];
        answerPinArr = [];
        convAnswerPinArr = [];
        newSelectColor = []

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

        // randomly change select pin colors
        randomSelectPinColor()

        // answer-pin to pick from placeSelectPin
        ansFollowSelectPinColor()

        // answerpin to change answers (Randomly assign colors to answer-pin)
        answerPin()

        for (let i = 1; i <=4; i++){
            answerPinArr.push($(`#answer-${i}`).eq(0).css("background-color"))
        }
        // convert answerPinArr from colors to int
        convAnswerPinArr = colorsAnsToInt(answerPinArr)
        console.log("Answer pin: ", convAnswerPinArr)
   
    })
    
    // randomly select-pin color
    const placeSelectPin = (selectPin) =>{
        return selectPin[Math.floor(Math.random() * selectPin.length)]
    }

    //===================to randomly assign different colors to select-pin=============//
    const randomSelectPinColor = () =>{

        for (let i = 1; i <= 6; i++){
            $(`#select-pin-${i}`).css("background-color", placeSelectPin(selectPinColor[i - 1]))
        }
    }
    randomSelectPinColor()
    //==================================================================================//

    //=========answer-pin to pick from placeSelectPin===============================//

    const ansFollowSelectPinColor = () =>{

        for (let i = 1; i <7; i++){
            newSelectColor.push($(`#select-pin-${i}`).eq(0).css("background-color"))
        }
        //console.log("ans color array: ", newSelectColor)
    }
    ansFollowSelectPinColor()
    //===========================================================================//

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

    // To provide id to individual guess-pin and guess-result and each guess-pin-row
    for(let i = 0; i < 10; i++) {
        
        guessPinArr = guessReversedArray[i].getElementsByClassName("guess-pin"); // get individual guess pin, guessReversedArray is row
        guessPinResultArr = guessReversedResultArray[i].getElementsByClassName("guess-result") // get individual guess pin result
        $(guessReversedArray[i]).attr("id", `guess_row_pin_${i}`) //set individual id for each guess-pin-row
           
        for(let j = 0; j < 4; j++) {
            $(guessPinArr[j]).attr("id",`gpin_${i}_${j}`)  //$(guessPinArr[j]), j refers to 0, guessPinArr is individual guess pin
            $(guessPinResultArr[j]).attr("id", `gpin_ans_${i}_${j}`)  
            }
    }

    submitButton()
    
});

