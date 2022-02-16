document.getElementById('new-quote').onclick= newQuote;
let body =document.getElementById('body');
let btn = document.getElementById('new-quote');
let linktweet = document.getElementById('tweet-quote');
let linktumbler = document.getElementById('tumbler-quote');
let text = document.getElementById('quote-text');
let author = document.getElementById('quote-author');
let textQ = document.getElementById('text');
let authorQ = document.getElementById('author');



const qoutArray=[
    {'text': 'We write to taste life twice, in the moment and in retrospect.', 'author': 'Anaïs Nin'},
    {'text': 'If there\'s a book that you want to read, but it hasn\'t been written yet, then you must write it.', 'author': 'Toni Morrison'},
    {'text': 'One day I will find the right words, and they will be simple.', 'author': 'Jack Kerouac, The Dharma Bums'},
    {'text': 'Either write something worth reading or do something worth writing.', 'author': 'Benjamin Franklin'},
    {'text': 'You can make anything by writing.', 'author': 'C.S. Lewis'},
    {'text': 'A word after a word after a word is power.', 'author': 'Margaret Atwood'},
];


function randomColor(num){
    return Math.floor(Math.random() * (num +1));
}

function newQuote(){
    const color = 'rgb(' + randomColor(255) + ',' + randomColor(255) + ',' + randomColor(255) + ')';
    body.style.backgroundColor=color;
    btn.style.backgroundColor= color;
    linktweet.style.backgroundColor=color;
    linktumbler.style.backgroundColor=color;
    text.style.color=color;
    author.style.color=color;

    let index = qoutArray[Math.floor(Math.random()*qoutArray.length)];

    textQ.innerText=index.text;
    authorQ.innerText=index.author;

    return false;
}
