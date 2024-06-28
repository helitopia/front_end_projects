const songTitle = document.querySelector(".song-title");
const songAuthor = document.querySelector(".author-name");
const prevSongButton = document.querySelector(".prev-song");
const nextSongButton = document.querySelector(".next-song");

class Track {
    constructor(title, authorName, trackPath, albumCoverPath) {
        this.title = title;
        this.authorName = authorName;
        this.trackPath = trackPath;
        this.albumCoverPath = albumCoverPath;
    }
}

function initSwiper() {
    new Swiper('.album-covers-wrapper', {
        direction: 'horizontal',
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: currSongIdx,
        spaceBetween: 50,

        effect: "coverflow",
        coverflowEffect: {
            slideShadows: false,
            rotate: 20,
        },
        navigation: {
            nextEl: '.next-song',
            prevEl: '.prev-song',
        },
    });
}

function defineButtonEventHandlers() {
    prevSongButton.addEventListener("click", () => updatePlayingSong(--currSongIdx));
    nextSongButton.addEventListener("click", () => updatePlayingSong(++currSongIdx));
}

function updatePlayingSong(targetSongIdx) {
    let currTrack = tracks[targetSongIdx];
    songTitle.textContent = currTrack.title;
    songAuthor.textContent = currTrack.authorName;
}


const tracks = [
    new Track(
        "Symphony",
        "Clean Bandit ft. Zara Larsson",
        "assets/1.png",
        "assets/song-list_Clean-Bandit-Symphony.mp3"
    ),
    new Track(
        "As It Was",
        "Harry Styles",
        "assets/4.png",
        "assets/song-list_Harry-Styles-As-It-Was.mp3"
    ),
    new Track(
        "Physical",
        "Dua Lipa",
        "assets/5.png",
        "assets/song-list_Dua-Lipa-Physical.mp3"
    )
]
let currSongIdx = 1

initSwiper();
updatePlayingSong(currSongIdx);
defineButtonEventHandlers();