# RPS Lab Breakdown - A DOM Scripting Lab

## Story 1 - Startup and HTML

1. Create 3 Files (1 HTML, 1 JavaScript, & 1 CSS)
2. Set up HTML file first. `!` + `TAB`.
3. Create an H1 tag with RPS as the Header and a container to hold everything
    - Make sure that IDs are add to the divs with the notion we will go back and add css AND needing to target things for DOM Scripting
4. Build out status bar with 3 buttons for Rock, Paper, and Scissors
5. Build a Start Button

## Story 2 - JavaScript File and targeting elements.

1. Making sure we have connectable IDs on the HTML, Start by connecting the DOM elements in the JS with `.getElementById` and creating an array for storing player moves with a `getElementByClassName()`
2. Then set up an event listener for the start button
3. Start creating game variables for scores and timers while also create reference variables for the game to look at a create further logic around.

## Story 3 - Game Functionality

1. Start fleshing out the start game function that starts the game once the start button is clicked.
2. Target the status Bar to alert the player that the game will start in 3 seconds
3. Leave space to add timer functionality upon startup

## Story 4 - Game Timer

1. Create a function to count up to 3, on 4 it says go and clears the interval and enables the RPS buttons for gam

## Story 5 - Player Turn

1. This should start by randomly generating a move from the moves array
2. Then when button is clicked for the turn, it disables the buttons entirely
3. THis will also display both the player move and comp move.
4. More this on a minute so leave space to come back and add functionality

## Story 6 - Determining the Winner

1. Create a function where you pass the player and comp through as arguments where you will compare these variables and determine whose the winner based on an alg that looks like this `((moveMap[comp] - moveMap[player] + 3) % 3 === 1)`
2. This formula checks to determine and declare winner, turning into to string to run through IF statement in playerTurn Function

## Story 7 - Finishing the Functionality

1. With the winner assigned to a variable, we can now run it through an IF ELSE statement to display the appropiate winner
2. This should then enable the previously disable start button and awards a point to the winner that will be display for as many games that are played.

## Story 6 - Make it Pretty

1. You do you