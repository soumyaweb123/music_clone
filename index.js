console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio("songs/1.mp3");
let masterPlay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById("myprogressBar");
let gif=document.getElementById("gif");
let masterSongName=document.getElementById("masterSongName");
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"Asmas si ",filePath:"songs/1.mp3",coverPath:"cover/1.jpeg"},
    {songName:"Alan walker",filePath:"songs/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"Roar",filePath:"songs/4.mp3",coverPath:"cover/3.jpg"},
    {songName:"mad at u",filePath:"songs/5.mp3",coverPath:"cover/4.jpg"},
    {songName:"cant be ",filePath:"songs/4.mp3",coverPath:"cover/5.jpeg"},
    {songName:"u feel ",filePath:"songs/2.mp3",coverPath:"cover/6.jpeg"},
    {songName:"not too bad",filePath:"songs/2.mp3",coverPath:"cover/7.jpeg"},



    


]
songitem.forEach((element ,i)=> {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

    
});
//let audio=new Audio("1.mp3");
//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
//update seeker
progress = parseInt ((audioElement.currentTime/audioElement.duration)*100);
myprogressBar.value=progress;
})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value * audioElement.duration/100;

})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName("songItemsPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
            masterSongName.innerText=songs[songIndex].songName;

        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;

        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7)
    {
        songIndex=0
    }
    else{
    songIndex+=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0
    }
    else{
    songIndex+=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    

})