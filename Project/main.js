function allCap(){
    var text = document.getElementById("text"); // textarea
    
    var inputValue = text.value; // textarea.value

    var upper = inputValue.toUpperCase(); // UPPER CASE

    text.value = upper // UPPER CASE
}

function allLow(){
    var text = document.getElementById("text"); // textarea
    
    var inputValue = text.value; // textarea.value

    var lower = inputValue.toLowerCase(); // Lower CASE

    text.value = lower // Lower CASE
}


function copy(){
    var text = document.getElementById("text").value; // textarea
    navigator.clipboard.writeText(text)
}