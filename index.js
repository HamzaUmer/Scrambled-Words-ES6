const info = document.querySelector('.info');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let nw = "";
let rw = "";
let play= false;
const words = ["engineer","doctor","army","teacher","actor", "banker", "entrepreneur", "metaverse","nasa","react","node", "express","mongodb","flutter","nextjs","javascript","love", "friends", "python", "git", "wordpress","movies", "netflix","html", "css","tailwindcss"];

const newWords = () => {
    let rn = Math.floor(Math.random() * words.length); //Math.floor for neglect decimals and Math.random for generate random number
     let temWord = words[rn];
     return temWord;
}

const scramble = (arr) => {
    for (let i = arr.length-1; i>0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function() {
    if(!play) {
        play=true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        nw=newWords();
        rw= scramble(nw.split("")).join("");
        info.innerHTML = `Guess the word: ${rw}`;
    }
    else {
        let tempword = guess.value;
        if(tempword === nw) {
            play=false;
            info.innerHTML = `Yooo! It's Correct, This is ${nw}`;
            btn.innerHTML = "Play Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else {
            info.innerHTML = `Oh No! It's Incorrect, Please Try again ${rw}`;
            guess.value = "";
        }
    }
})