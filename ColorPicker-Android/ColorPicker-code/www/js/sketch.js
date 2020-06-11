let r = document.getElementById('myRangeR');
let g = document.getElementById('myRangeG');
let b = document.getElementById('myRangeB');
let rgbtext = document.getElementById('rgbtxt');
let hextext = document.getElementById('hextxt');

function setup() {
    createCanvas((window.innerWidth), (window.innerHeight));
    background(100);
}

function draw() {
    background(r.value, g.value, b.value);

    updateString();

    if ((parseInt(r.value) + parseInt(g.value) + parseInt(b.value) > 450) || (parseInt(r.value) > 180) || (parseInt(g.value) > 180) || (parseInt(b.value) > 180)) {
        rgbtext.style.color = 'black';
        hextext.style.color = 'black';
    }
    else {
        rgbtext.style.color = 'white';
        hextext.style.color = 'white';
    }
}

function updateString(){
    let tempR = parseInt(r.value);
    let tempG = parseInt(g.value);
    let tempB = parseInt(b.value);

    rgbtext.innerText = `RGB(${tempR}, ${tempG}, ${tempB})`;

    tempR = parseInt(tempR).toString(16);
    tempG = parseInt(tempG).toString(16);
    tempB = parseInt(tempB).toString(16);
    if(tempR.length < 2) tempR = "0" + tempR;
    if(tempG.length < 2) tempG = "0" + tempG;
    if(tempB.length < 2) tempB = "0" + tempB;

    hextext.innerText = `#${tempR}${tempG}${tempB}`;
}