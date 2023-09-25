function translateToHindi() {
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');

    if(inputText === "")
    {
        alert("please inter your text")
    }
    else{
        outputText.textContent = inputText + "( in hindi )";
    }

// Attach the translation function to the button click event
const translateButton = document.getElementById('translate-btn');
translateButton.addEventListener('click', translateToHindi);
