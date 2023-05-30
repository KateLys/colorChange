
let index = 0; //initializes a variable named index with a value of 0. used to keep track of the current index position in the colors array.
                //the index variable is used to determine which color from the colors array should be applied as the background color.

function changeColor (){            //This function will be called when the button is clicked.
                                    //Each time the changeColor() function is called, the index value is incremented (index++) to move to the next color in the array.
    let colors = ["red", "pink", "blue", "orange", "yellow", "purple", "green"]; //his line creates an array called colors that contains several color values.

    document.getElementsByTagName("body")[0].style.background = colors[index++]; //index = index + 1
    
    if(index > colors.length -1)    //or without -1. but generally recommended to subtract 1 when dealing with array indices to follow standard conventions and avoid confusion
                                    //This if statement checks if the index has reached the last position in the colors array. 
                                    //If it has, the index is reset to 0, effectively looping back to the first color in the array. 
                                    //This allows the background color to cycle through the colors continuously.
                                    // Once the index value exceeds the length of the colors array minus 1 (indicating that it has reached the last color), the index is reset back to 0.
    index = 0;
}