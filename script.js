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
}
// Attach the translation function to the button click event
const translateButton = document.getElementById('translate-btn');
translateButton.addEventListener('click', translateToHindi);
const downloadButton = document.getElementById('download-btn')
downloadButton.addEventListener('click',() =>{
    const outputText = document.getElementById('output-text').value;
    const texarea =  document.querySelector("output-text")
    if(outputText === ""){
        alert("sory your text file is empty")
    }
    else{
        const blob = new Blob([outputText],{type: "text/plain"})
        const fileUrl = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.download = "output"
        link.href = fileUrl
        link.click()
    }
    
})
