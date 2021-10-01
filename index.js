const inputBox = document.querySelector('#inputText')
const outputBox = document.querySelector('#translatedText');
const button = document.querySelector('#submit');


const emojiUrl = "https://api.funtranslations.com/translate/emoji.json?text=";

function fetchData(){
    const text = inputBox.value;
    if (text !== ''){
        fetch(emojiUrl+text)
        .then(response => response.json())
        .then(data => {
            const translatedText = data.contents.translated;
            outputBox.innerHTML = `<p>${translatedText}</p>`
        })
        .catch(err =>{
            console.log(err);
            alert("Ther's an error, please retry, if the error persists, retry after some time")
        });

    }
    
}

document.addEventListener('keypress',(e)=>{
    if (e.key==='Enter'){
        e.preventDefault();
        fetchData();
    }
})
