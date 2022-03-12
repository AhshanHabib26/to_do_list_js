const textInput = document.getElementById('text_input')
const inputButton = document.getElementById('inputButton')
textInput.addEventListener("keypress", function(e) {
    if (e.key == 'Enter')
        inputButton.click();
});

const inputBtn = () =>{
const textInput = document.getElementById('text_input')
const textValue = textInput.value

    if(textValue == ''){
        return
    }
    else{
        const notesArea = document.getElementById('note_area')
        const p = document.createElement('p')
        const br = document.createElement('br')
        p.classList.add('prValid')
        p.innerText = textValue
        notesArea.appendChild(br)
        notesArea.appendChild(p)
    }
textInput.value = ''
}
document.getElementById('note_area').addEventListener('click', (e) =>{
    const elementSelect = e.target
    elementSelect.classList.toggle('prDone') 
    elementSelect.classList.toggle('prValid')
})


