

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


const answerPin = () =>{
    
    $("#answer-1").css("background-color", colors[Math.floor(Math.random() * colors.length)])
    $("#answer-2").css("background-color", colors[Math.floor(Math.random() * colors.length)])
    $("#answer-3").css("background-color", colors[Math.floor(Math.random() * colors.length)])
    $("#answer-4").css("background-color", colors[Math.floor(Math.random() * colors.length)])
}



const reverseGuessRow = () =>{
    // reverse the guess-pin
    for (let i = 9; i >=0; i--){
        guessReversedArray.push($(".guess-row")[i])
    }
    //console.log(guessReversedArray)
}


// const currentRow = () =>{

//     if ($(guessReversedArray)[0].children().hasClass(".active")){
//     }

// }

let storedCurrentRowColor = []

const selectPin = () =>{
    // Select color and assign selected peg with the color


    console.log("current row: ", currentRow)

    if (currentRow === 0){

        $(".select-pin").on("click", (event) =>{
            $chosenColor = $(event.target).css("background-color")
            console.log($chosenColor)
        
            $(".guess-pin.active").on("click", (event)=>{
                $(event.target).css("background-color", $chosenColor)
                
            
                ///////////////////////////////
                  // Click again to remove the color
                     $(".guess-pin.active").on("click", (event)=>{
        
                        $(event.target).css("background", "none")
            })
                ///////////////////////////////////
            
            
            })
        
        })

    } else{
        console.log("not working")
    }







}


// const blankPin = () =>{
//      // Select color and assign selected peg with the color
//     $(".guess-pin").on("click", (event)=>{

//         $(event.target).css("background", "none")
//     })
    
// }




const submitButton = () =>{
    // Submit button

   $(".submit").on("click", ()=>{
    $(".active").removeClass("active")




    
    
    
    

    // for (let i = 0; i < guessReversedArray[currentRow].length; i++ ){
    //     console.log(guessReversedArray[currentRow].length)

    // }
    // //storedCurrentRowColor.push(guessReversedArray[currentRow])

    let aa = $(guessReversedArray[currentRow])
    
    console.log("aa", aa)
    console.log("test", $($(aa)[0]).parent()[0])

   
    currentRow++
    console.log("current row: ", currentRow)
    
    
})
}




$(()=>{

    reverseGuessRow()
    selectPin()
    submitButton()
    answerPin()


    
    


});