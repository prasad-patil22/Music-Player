let progrss =document.getElementById("progrss");
let song =document.getElementById("song");
let ctrlIcon =document.getElementById("ctrlIcon");


song.onloadedmetadata=function(){
    progrss.max=song.duration; 
    progrss.value=song.currentTime;
}

function playpause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if(song.play){
    setInterval(()=>{ 
        progrss.value=song.currentTime;
    },500); 
}


progrss.onchange=function(){
    song.play();
    song.currentTime=progrss.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    
}



function backward(){
    window.location.href="song4.html"
}


function forward(){
    window.location.href="song.html"
}




// song html

function backward1(){
    window.location.href="index.html"
} 


function forward1(){
    window.location.href="song1.html"
}


// song1 html

function backward2(){
    window.location.href="song.html"
}
 
function forward2(){
    window.location.href="song2.html"
}



// song2 html

function backward3(){
    window.location.href="song1.html"
}

function forward3(){
    window.location.href="song3.html"
}



// song3 html

function backward4(){
    window.location.href="song2.html"
}

function forward4(){
    window.location.href="song4.html"
}


// song4 html
function backward5(){
    window.location.href="song3.html"
}

function forward5(){
    window.location.href="index.html"
}

