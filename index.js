const textBox = document.querySelector('#inputText')
const translatedBox = document.querySelector('#translatedText');
const button = document.querySelector('#submit');


// button.addEventListener('click',translated);

const emojiUrl = "https://api.funtranslations.com/translate/emoji.json?text="

async function translated(){
    const text = textBox.value;
    if (text !== ''){
        const res = await fetch(emojiUrl+text);
        const data= await res.json();
        const translatedText = data.contents.translated;
        var counter=0;
        var finalText;
        const typing = setInterval(()=>{
            if(counter<translatedText.length){
                finalText = translatedText.slice(0,counter+1);
                translatedBox.innerHTML = finalText;
                counter++;
            } else{
                clearInterval(typing);
            }
        },100);
        translatedBox.innerHTML = `<p>${data.contents.translated}</p>`;
    
    }
    
}

document.addEventListener('keypress',(e)=>{
    if (e.key==='Enter'){
        e.preventDefault();
        translated();
    }
})
