let mySong = document.getElementById('mysong')
let playBtn = document.getElementById('playbtn')
let pauseBtn = document.getElementById('pausebtn')
let ffBtn = document.getElementById('ffbtn')
let fbBtn = document.getElementById('fbbtn')
let dancer = document.getElementById('dancer')

// jgijhokohijrihhijk

playBtn.onclick = function(){
    mySong.play();
    playBtn.style.backgroundColor = '#E6CCA9';
    pauseBtn.style.backgroundColor = '#FF6D6D';
    dancer.src = "images/giphy.gif";
}

pauseBtn.onclick = function(){
    mySong.pause();
    pauseBtn.style.backgroundColor = '#E6CCA9';
    playBtn.style.backgroundColor = '#FF6D6D';
    dancer.src = "images/bgltmusic2bgr.png";

}

fbBtn.onclick = function(){
    mySong.pause();
    dancer.src = "images/bgltmusic2bgr.png";
    playBtn.style.backgroundColor = '#FF6D6D';
    pauseBtn.style.backgroundColor = '#FF6D6D';
    alert('Only one song available for now....other songs coming soon')
}

ffBtn.onclick = function(){
    mySong.pause();
    dancer.src = "images/bgltmusic2bgr.png";
    playBtn.style.backgroundColor = '#FF6D6D';
    pauseBtn.style.backgroundColor = '#FF6D6D';
    alert('Only one song available for now....other songs coming soon')
}
