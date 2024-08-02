console.log("Welcome to Spotify");
//initize variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let mastersong = document.getElementById("mastersong");

let songs=[
    {songName:"LoveStory",filePath:"song/1.mp3",coverPath:"covers/cover1.jpg"},
    {songName:"Fearless",filePath:"song/2.mp3",coverPath:"covers/cover2.jpg"},
    {songName:"Badblood",filePath:"song/3.mp3",coverPath:"covers/cover3.jpg"},
    {songName:"Blankspace",filePath:"song/4.mp3",coverPath:"covers/cover4.jpg"},
    {songName:"Cruelsummer",filePath:"song/5.mp3",coverPath:"covers/cover5.jpg"},
];

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
}
)

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//audioElement.play();
//Listen to events
audioElement.addEventListener ("timeupdate",()=>{
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
});
myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
});
