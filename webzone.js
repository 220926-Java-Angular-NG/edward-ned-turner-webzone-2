//access our div with the id 'main'
//we're going to add a header to the div

'use strict';

let mainDiv = document.getElementById("main");

//creating our header/new element
let header = document.createElement('h1');
header.classList.add("main");

let count = 0;

// header.innerHTML = `We currently have ${count} submissions`;

//add this new header element to my div with the id 'main'
 mainDiv.appendChild(header);

 //get access to the div that is holding the input text
    //and submit button

let boardDiv = document.getElementById("board");

//get submit button so we can add an event listener


let submitButton = document.getElementById("submitButton");
submitButton.addEventListener('click', (event)=>{
    event.preventDefault(); //the default action when pressing a button is refresh

    count++;
    //retrieving the value from our text input
    let textInput = document.getElementById("subTitle");
    let message = textInput.value;
    let textInput2 = document.getElementById("subBody");
    let message2 = textInput.value;


    //create the new element to be added to the div (and the DOM in general)
    
    
    // let newItem = document.createElement('h3');
    // newItem.innerHTML = message;
    // let newItem2 = document.createElement('p');
    // newItem2.innerHTML = message2;

    // boardDiv.appendChild(newItem);
    // boardDiv.appendChild(newItem2);
    
    let newItem;

    if(count < 8){
    newItem = document.createElement('h3');
    } else if (count >= 8 && count < 9){
        newItem = document.createElement('h4');
    } else if (count >= 9 && count < 11){
        newItem = document.createElement('h5');
    } else{
        newItem = document.createElement('h2');
    } 




    newItem.innerHTML = message;

    // let newItem2 = document.createElement('p');
    // newItem2.innerHTML = message2;

    boardDiv.appendChild(newItem);
    // boardDiv.appendChild(newItem2);


    textInput.value = '';
    // textInput2.value = '';

if(count < 6){
    console.log("Submission " + count + " made.");
} else if (count <= 6){
    console.log("Dang baby! " + count + " submissions? Someone's opinionated!");
} else if (count <= 7){
    console.log("Geeze! " + count + "?? You're really going at it!");
} else if (count <= 8){
    console.log("Good Gravy. " + count + " submissions? Calm down, babe. I'm getting tired");
} else if (count <= 9){
    console.log(count + ". Cheese Louise. My arms hurt!");
} else if (count <= 10){
    console.log("Fine. " + count + ". I'm going on break. The robit can handle this. You want anything?");
} else{
    console.log("ROBOT SAYS: " + count + " SUBMISSIONS. YOU MUST HAVE A PERSISTENT STYLE.");
} 
    
if(count <= 1){
    header.innerHTML = `Totabulous Wonkspire has received ${count} compliment`;

}else{
    header.innerHTML = `Totabulous Wonkspire has received ${count} compliments`;

}

})

