

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

        // need this to randomly change select pin colors
        randomSelectPinColor()

        // need this to change answerpin colors
        ansFollowSelectPinColor()

        // need answerpin to change answers
        answerPin()

        for (let i = 1; i <=4; i++){
            answerPinArr.push($(`#answer-${i}`).eq(0).css("background-color"))
        }

        convAnswerPinArr = colorsAnsToInt(answerPinArr)
        console.log("Answer pin: ", convAnswerPinArr)
   
    })
    
    //======random select-pin color=========//

    const placeSelectPin = (selectPin) =>{

        return selectPin[Math.floor(Math.random() * selectPin.length)]
    }

    // for (let i = 1; i < 7; i++){
    //     $(`#select-pin-${i}`).css("background-color", placeSelectPin(`${selectPin}`) + `${i}`)

    // }

    //===================to randomly assign different colors to select-pin=============//
    const randomSelectPinColor = () =>{

        $("#select-pin-1").css("background-color", placeSelectPin(selectPin1))
        $("#select-pin-2").css("background-color", placeSelectPin(selectPin2))
        $("#select-pin-3").css("background-color", placeSelectPin(selectPin3))
        $("#select-pin-4").css("background-color", placeSelectPin(selectPin4))
        $("#select-pin-5").css("background-color", placeSelectPin(selectPin5))
        $("#select-pin-6").css("background-color", placeSelectPin(selectPin6))
    
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
        
        guessPinArr = guessReversedArray[i].getElementsByClassName("guess-pin"); // get individual guess pin
        guessPinResultArr = guessReversedResultArray[i].getElementsByClassName("guess-result") // get individual guess pin result
        $(guessReversedArray[i]).attr("id", `guess_row_pin_${i}`) //set individual id for each guess-pin-row
    
             
    for(let j = 0; j < 4; j++) {
        $(guessPinArr[j]).attr("id",`gpin_${i}_${j}`)  //$(guessPinArr[j]), j refers to 0
        $(guessPinResultArr[j]).attr("id", `gpin_ans_${i}_${j}`)  
        }
    }

    submitButton()
    
});

