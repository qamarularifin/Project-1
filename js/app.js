

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "white",
    "black",

]



let originalBackground = "rgb(255, 255, 255)"
let guessReversedArray = []

let currentRow = 0
let $chosenColor = ""
let isPicked = true;
let guessPinArr;

let storedCurrentRowColor = []



const answerPin = () =>{
    
    $("#answer-1").css("background-color", colors[Math.floor(Math.random() * colors.length)])
    $("#answer-2").css("background-color", colors[Math.floor(Math.random() * colors.length)])
    $("#answer-3").css("background-color", colors[Math.floor(Math.random() * colors.length)])
    $("#answer-4").css("background-color", colors[Math.floor(Math.random() * colors.length)])
}



const reverseGuessRowPin = () =>{
    // reverse the guess-pin
    for (let i = 9; i >=0; i--){
        guessReversedArray.push($(".guess-row-pin")[i])
    }
    //console.log(guessReversedArray)
}

// let revPinPos = []

// const reverseAddIdPin = () =>{

//     for (let i = 40; i >= 0; i--){
        
        
//         revPinPos.push($(".guess-pin")[i])
    
//         }    
//         //console.log(revPinPos[2])  
// }





const selectPin = () =>{
    // Select color and assign selected peg with the color


    console.log("current row: ", currentRow)
    

    

        $(".select-pin").on("click", (event) =>{
            $chosenColor = $(event.target).css("background-color")
            console.log($chosenColor)

         
        
            $(".guess-pin.active").on("click", (event)=>{
                
                $(event.target).css("background-color", $chosenColor)
                
                ///////////////////////////////////////////////////
                //   Click again to remove the color
                     $(".guess-pin.active").on("click", (event)=>{
        
                        $(event.target).css("background", "white")
                        
            })
                //////////////////////////////////////////////////
            
            })


        })

    
}




const submitButton = () =>{

    // store the colors in current row upon click of submit button
    
    for (let i = 0; i < 4; i++){
        storedCurrentRowColor.push(guessPinArr[i])
        
    }
    console.log($(storedCurrentRowColor)[0])
    

   $(".submit").on("click", ()=>{
    // Remove all .active class
    $(".active").removeClass("active")

    
    
    console.log("current row: ", currentRow)
    
    
    // Move .active class one row upwards
    for (let i = 0; i < 4; i++){
        $(`#gpin_${currentRow}_${i}`).addClass("active")
    }

    currentRow++
    

    
})
}




$(()=>{

    //reverseAddIdPin()
    reverseGuessRowPin()
    selectPin()
    
    answerPin()
    

        // For class selectors, jQuery uses JavaScript's native 
    // getElementsByClassName() function if the browser supports it.

    // To provide id to individual guess-pin
    for(let i = 0; i < 10; i++) {
        guessPinArr = guessReversedArray[i].getElementsByClassName("guess-pin");
        //console.log(guessPinArr)
        for(let j = 0; j < 4; j++) {
        $(guessPinArr[j]).attr('id',`gpin_${i}_${j}`);
        }
    }



    
    submitButton()



   
    
      
      

});

