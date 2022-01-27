# Etch-a-Sketch

**PROJECT SUMMARY:**

The aim for this project was to produce a web version of the childhood game Etch-a-Sketch. This involved creating a 16x16 grid (with absolute sizing, not responsive...yet) that had individual squares that could have their colour changed by hovering your mouse over. This project was a good demonstration of how much I have learned about adding elements to the DOM, adding event listeners to elements and editing properties of an element based on events.

I took the project one step further and implemented a "rainbow mode" feature that changes the colour from black to a random rgb colour. This was quite a lot of fun to add in and it certainly did take a while to figure out how I could accomplish this seamlessly without having to reset the grid.

_**Some of the things I have learned from completing this project:**_

- I was able to add elements to the DOM using iteration, this allowed me to add an unknown amount of boxes to the grid. For example, if the user wanted to create a 50x50 grid, I didn't have to hard code it. I was able to update values in the for loop to be able to accommodate the unknown amount of boxes the user was to enter.

- I learned about the box-sizing property and that using "border-box" puts the border inside the element and does not create extra width/height for the element.

- I further solidified my understanding of flexbox and how it can be used to structure a page.

- Being able to add/remove DOM elements based on events happening on the page.

- RGB values and how they can be used in CSS.

_**Some of the challenges I faced during this project:**_

- To begin with, when the reset button was pressed... I was adding a new grid to the page but did not remove the previous grid. It seemed like an easy fix to remove an element but with the way I had structured my 'divs' it would have been very complicated to remove. I chose to create a container for all of the rows/boxes in the grid and then I could remove this single container with one line of code. It was an easy fix, but took some thinking and redesigning to fix.

- Creating the rainbow mode was challenging to begin with. I was finding it challenging to understand how I could change from the black mouseover colour to the randomised RGB colour without having to reset the page and add new event listeners to the boxes. I then came up with the idea of a global variable called "rainbowToggled" that the events can check the status of. If the status was 'Off/False' then it would default to black, however if the status was 'On/True' then it would use the getRandomColour function to get a random colour and apply it to the box.

- The major challenge I faced in this project was changing the grid size so that it fits more boxes on the page, but without changing the size of the actual grid. To go about solving this problem, I allocated 640px in height and width for the grid and then created a variable that divides the available grid space between the amount of boxes along each axis. This worked, but revealed a further problem where the pixel gap I had created between elements needed reducing to 0. I wanted to add a border also, but then remembered that borders do add size to the elements. So after a quick Google search, I set my boxes sizing property to "border-box" which sorted the issue.

_**If I was to spend more time on this project I would:**_

- I would certainly spend some more time to make this project potentially responsive, however I have not looked into this too much yet as my main focus is to create pages that "just work" before I start to think about making them responsive to different screen sizes. This will certainly be something I come back to.

- With some further time on this project, I would add more "modes" to it that either change the event of moving your mouse over the page or alternatively add more colour options. However, I was happy with what I accomplished - particularly with the rainbow feature.
