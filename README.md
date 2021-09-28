# Project-1: Mastermind Game

## Background
Guess the color of hidden pegs. A deduction game where player 
makes a limited number of guesses, 
using logic to deduce what pegs were hidden.

## Link
https://qamarularifin.github.io/Project-1/

## Technologies
- HTML
- CSS
- Javascript
- DOM manipulation with JQuery

## Minimum requirement
1. Choose color from the selector pegs
2. Paint the guess pegs one row at a time
3. Other rows must not be able to be painted
4. A check button required to move on to the next row
5. A correct guess peg and correct position will be painted as red in the result peg box
6. A correct guess peg and wrong position will be painted as gray in the result peg box
7. A wrong guess peg and wrong position will not return any color
8. Answer pegs will be randomly generated and hidden
9. Answer pegs will be shown only after the game is over
10. An indication to show if the user has won or lost the game

## How to play
1. Player will click the colors from selector pegs (first row) and click on the guess pegs (row above)
2. Based on the selected colors placed on the guess pegs, player will receive feedback/results from the results pegs on the right
3. If the chosen color exists, and correct position, the results pegs will return red peg
4. If the chosen color exists but in the wrong position, the results pegs will return gray peg
5. If the chose color doesn't exist, it will return nothing
6. Player will be required to use his/her deductive reasoning to guess the correct pegs

## Game logic
### HTML
- The game started off with the designing of the layout of the mastermind board using HTML
- The layout of the game board was solely hardcoded in HTML as the board is considered as a static module
- Initially, border lines were used in order to determine the correct position of the selector row, guess rows, results rows and answer row
- Each row was wrapped by container divs in order to enable using of flex box to wrap around the circle pegs

### Javascript
- Game started off with having the player to be able to choose a color from the selector peg
- Each peg (guess, result, answer, selector) is assigned with ids and this was done with the use of for loops
- The next design of the game is to disable the other rows from being able to be selected. This was done dynamically by adding and removing class active for each row through a check button
- Since the peg colors are in rgb format, they are converted into integers with the use of if conditions that return number 1 to 6
- With integers, it will be easier to compare number to number instead of rgb to rgb in order to check for red pegs or gray pegs
- These numbers were then stored in a master guess array which is a nested array of array. This enables the comparison of guess array to the answer array
- For determining the red pegs (correct color, correct position), this is done by comparing the same numbers via a for loop. If they are the same, they are marked with a string to prevent duplication of same number
- For determining of the gray pegs, this is determined by a nested for loops which will look out for same numbers and mark them out with string to prevent duplication of same number again
- A for loop is then used to color the results pegs as red or gray depending on the answer results
- If the current row exceeds level 9, the game will be over
- Player wins if he/she attains all red pegs and the "check" button will be replaced by a "You win" text which is done by DOM manipulation JQuery. Otherwise, it will be replaced by a "You lose" text

### CSS
- The game started with basic styling of the pegs to have a circular shape by adjusting the border radius
- Background colors and shadows were added for the game board
- A bootstrap button "btn-primary" was used to style the "check" button
- A modal was used with a "Mastermind" button which obscured the game board
- A modal was also used for in game user instructions which pops out when the button is clicked and closes if the close button is clicked
