let arr = [
  {
    songName: "Narayan Mil Jayega",
    url: "./Songs/Narayan Mil Jayega [320] Kbps-(SongsPk.com.se).mp3",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b4/af/4b/b4af4b1f-e8c2-84ac-2199-4e84227deb2a/8903431975515_cover.jpg/1200x1200bf-60.jpg",
  },
  {
    songName: "Lutt Putt Gaya",
    url: "./Songs/Lutt Putt Gaya - Dunki 320 Kbps.mp3",
    img: "https://feeds.abplive.com/onecms/images/uploaded-images/2023/11/21/5d323023be8c94389d29f8befcd0f7811700582295883274_original.jpg?impolicy=abp_cdn&imwidth=720",
  },
  {
    songName: "Satranga",
    url: "./Songs/Satranga - Animal 320 Kbps.mp3",
    img: "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-10/whatsapp_image_2023-10-26_at_5.59.34_pm.jpeg?VersionId=hxAGaFekoTlHn03SAUMBH54OHzIFejRH",
  },
  {
    songName: "Tair Jaa",
    url: "./Songs/Tair Jaa - Shaan [320] Kbps-(SongsPk.com.se).mp3",
    img: "https://c.saavncdn.com/789/Tair-Jaa-Hindi-2023-20231025153030-500x500.jpg",
  },
];

const allsongs = document.querySelector(".all-songs");
const poster = document.querySelector(".left");
const play = document.querySelector("#play");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");
const audio = new Audio();

let currentSongIndex = 0;
let songs = "";

arr.forEach(function (param, index) {
  songs += `<div class="song-card" id="${index}">
                <div class="part1">
                    <img src="${param.img}" alt="image">
                    <h4>${param.songName}</h4>
                </div>
            </div>`;
});

allsongs.innerHTML = songs;

allsongs.addEventListener("click", function (event) {
  const songCard = event.target.closest(".song-card");
  if (songCard) {
    const id = songCard.id;
    currentSongIndex = id;
    audio.src = arr[id].url;
    poster.style.backgroundImage = `url(${arr[id].img})`;
    audio.play();
    play.innerHTML = `<i class="ri-pause-line"></i>`;
  }
});

play.addEventListener("click", function () {
  if (audio.src === "") {
    audio.src = arr[currentSongIndex].url;
    poster.style.backgroundImage = `url(${arr[currentSongIndex].img})`;
  }
  if (audio.paused) {
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    audio.play();
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    audio.pause();
  }
});

forward.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % arr.length;
  audio.src = arr[currentSongIndex].url;
  poster.style.backgroundImage = `url(${arr[currentSongIndex].img})`;
  audio.play();
});

backward.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + arr.length) % arr.length;
  console.log(currentSongIndex);
  audio.src = arr[currentSongIndex].url;
  poster.style.backgroundImage = `url(${arr[currentSongIndex].img})`;
  audio.play();
});
