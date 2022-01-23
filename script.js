console.log("wecome");

let songIndex = 0;
let audioElement = new Audio("/SOngs/1.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let Gif = document.getElementById("gif");
let SongItem = Array.from(document.getElementsByClassName("songItem"));
let masteSongName = document.querySelector(".masteSongName");

let Songs = [
  {
    songName: "Any Color You Like",
    filepath:
      "/SOngs/Any Colour You Like - Pink Floyd HD (Studio Quality)_160k.mp3",
  },
  {
    songName: "On The Run",
    filepath: "/SOngs/On The Run_160k.mp3",
  },
  {
    songName: "Breathe",
    filepath: "/SOngs/Pink Floyd - Breathe_160k.mp3",
  },
  {
    songName: "Money",
    filepath: "/SOngs/Pink Floyd - Money (Official Music Video)_160k.mp3",
  },
  {
    songName: "Time",
    filepath: "/SOngs/Pink Floyd - Time (2011 Remastered)_160k.mp3",
  },
  {
    songName: "The great gig in the sky",
    filepath: "/SOngs/The Great Gig In The Sky_160k.mp3",
  },
  {
    songName: "US and Them",
    filepath: "/SOngs/Us And Them_160k.mp3",
  },
];

SongItem.forEach((element, i) => {
  //   console.log(element, i);
  element.getElementsByClassName("songName")[0].innerText = Songs[i].songName;
});

masterPlay.addEventListener("click", (e) => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    Gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    Gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("time update");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //   console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPay")).forEach(
    (element) => {
      element.classList.add("fa-play-circle");
      element.classList.remove("fa-pause-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();

      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `SOngs/${songIndex}.mp3`;
      masteSongName.innerText = Songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      Gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", (e) => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `SOngs/${songIndex}.mp3`;
  masteSongName.innerText = Songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", (e) => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `SOngs/${songIndex}.mp3`;
  masteSongName.innerText = Songs[songIndex].songName;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
