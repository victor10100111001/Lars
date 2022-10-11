/*
var playing = false;
var audio = new Audio('./Pictures/Simon & Garfunkel - The Sound of Silence (from The Concert in Central Park).mp3');
function play(){
    playing = !playing;
    if (playing == true){
        audio.play();
        window.document.getElementById("play").innerHTML = "Pause"
    } else{
        audio.pause();
        window.document.getElementById("play").innerHTML = "Play"
    }
}

*/
var box1 = document.getElementById("box1");
var counter = 0;
var bonus = 1;
var dinMor = 50;
var dinFar = 500;
var larsMælk = 5000;
var songsrc = document.getElementById('song')
songsrc.src = ("https://img.youtube.com/vi/7nvGliGLJ44/maxresdefault.jpg")

function surLars(){
    window.document.getElementById("larsbillede").src = "../static/surLars.png"
    const box = document.querySelector('#larsbillede');
    box.setAttribute('class', 'larsshake');
    setTimeout(gladLars, 3000);
    function gladLars(){
        console.log("glad")
        window.document.getElementById("larsbillede").src = "../static/lars.png"
        box.removeAttribute('class', 'larsshake')
    }
}

function yturl(){
    YouTubeURL = document.getElementById('inputText5').value;
    const myArray = YouTubeURL.split("=");
    var word = myArray[1];
    console.log(word)
    songsrc.src = ("https://img.youtube.com/vi/"+ word +"/maxresdefault.jpg");
}

function u1(){
    if (counter>dinMor){
        counter -= dinMor;
        bonus++;
        dinMor *= 2
        window.document.getElementById("dinMor").innerHTML = "pris: " + dinMor + " giver: 1";
        window.document.getElementById("box1").innerHTML = "Mælk: " + counter + ".00";
    }
    else{
        surLars();
    }
}
function u2(){
    if (counter>dinFar){
        counter -= dinFar;
        bonus += 10;
        dinFar *= 2
        window.document.getElementById("dinFar").innerHTML = "pris: " +  dinFar + " giver: 10";
        window.document.getElementById("box1").innerHTML = "Mælk: " + counter + ".00";
    }
    else{
        surLars();
    }
}
function u3(){
    if (counter>larsMælk){
        counter -= larsMælk;
        bonus += 100;
        larsMælk *= 2
        window.document.getElementById("larsMælk").innerHTML = "pris: " + larsMælk + " giver: 100";
        window.document.getElementById("box1").innerHTML = "Mælk: " + counter + ".00";
    }
    else{
        surLars();
    }
}
function knaps(){
    counter += bonus;
    window.document.getElementById("box1").innerHTML = "Mælk: " + counter + ".00";
}



