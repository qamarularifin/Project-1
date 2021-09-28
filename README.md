# Project-1: Mastermind Game

## Background
Guess the color of hidden pegs. A deduction game where each player 
takes turn making a limited number of guesses, 
using logic to deduce what pegs the opponent has hidden.

## Link
https://qamarularifin.github.io/Project-1/

## Technologies
- HTML
- CSS
- Javascript

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

## Logics of the game
### HTML
- The game started off with the designing of the layout of the mastermind board using HTML
- Initially, border lines were used in order to determine the correct position of the selector row, guess rows, results rows and answer row
- Each row was wrapped by container divs in order to enable using of flex box to wrap around the circle pegs

### Javascript
- In order for the game to be 
