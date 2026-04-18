const btn = document.getElementById("btn");
let inp = document.getElementById("inp");

const words = [
    "cpp",
    "java",
    "javascript",
    "python",
    "pascal",
    "ruby",
    "perl",
    "swift",
    "kotlin",
];

let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
console.log(selectedWord);

let displayWord = "";
for(let i=0;i<selectedWord.length;i++){
    displayWord+="_ ";
}

document.getElementById("p2").textContent = displayWord;

let guessedList = [];

function guessLetter(){
    let btn = document.getElementById("btn");
    let inp = document.getElementById("inp");
    if(!inp.value){
        alert("Please enter a letter.");
        return;
    }
    let val = inp.value.toUpperCase();
    inp.value = "";
    if(guessedList.includes(val)){
        alert("You already guessed this letter. Please enter another letter.");
        return;
    }
    guessedList.push(val);
    let updatedDisplay = "";
    let allLettersGuessed = true;
    for(let i=0;i<selectedWord.length;i++){
        if(guessedList.includes(selectedWord[i].toUpperCase())){
            updatedDisplay+=selectedWord[i].toUpperCase()+"  ";
        }
        else{
            updatedDisplay+="_  ";
            allLettersGuessed = false;
        }
    }
    document.getElementById("p2").textContent = updatedDisplay;
    if(allLettersGuessed){
        alert(`Congratulations !!! You guessed the word.`)
        btn.textContent = "Play Again";
        btn.onclick = ()=>{
            location.reload();
        }
    }
}

btn.onclick = ()=>{
    guessLetter();
}
