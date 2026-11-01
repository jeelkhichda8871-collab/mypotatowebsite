
// ===================================
// OUR PHOTO ALBUM
// ===================================

// Add your photos here.
// The filename must match your images folder exactly.

const albumPhotos = [

    {
        image: "images/photo1.jpg.jpeg",
        caption: "Every love story is beautiful, but ours is my favourite. ❤️"
    },

    {
        image: "images/photo2.jpg.jpeg",
        caption: "Some moments become memories, and some become forever. 💗"
    },

    {
        image: "images/photo3.jpg.jpeg",
        caption: "With you, I can be my most unfiltered self. 🥹"
    },

    {
        image: "images/photo4.jpg.jpeg",
        caption: "If I could relive one moment, I'd choose one with you. 💕"
    },

    {
        image: "images/photo5.jpg.jpeg",
        caption: "In a world full of people, my heart chose you. ❤️"
    },

    {
        image: "images/photo6.jpg.jpeg",
        caption: "Here's to a thousand more memories together. 💌"
    },

    {
        image: "images/photo7.jpg.jpeg",
        caption: "You make ordinary days feel like little pieces of magic. ✨"
    },

    {
        image: "images/photo8.jpg.jpeg",
        caption: "Some days are special simply because you're in them. 💖"
    },

    {
        image: "images/photo9.jpg.jpeg",
        caption: "You're my favourite kind of chaos and my sweetest peace. 🫶"
    },

    {
        image: "images/photo10.jpg.jpeg",
        caption: "If happiness had a face, I know exactly whose I'd see. 🥰"
    },

    {
        image: "images/photo11.jpg.jpeg",
        caption: "Two silly souls, one beautiful little world. 🤍"
    },

    {
        image: "images/photo12.jpg.jpeg",
        caption: "You're not just my favourite person; you're my favourite feeling. ❤️"
    },

    {
        image: "images/photo13.jpg.jpeg",
        caption: "My heart has a habit of finding its way back to you. 💗"
    },

    {
        image: "images/photo14.jpg.jpeg",
        caption: "I'd choose your hand to hold in every lifetime. 👫"
    },

    {
        image: "images/photo15.jpg.jpeg",
        caption: "You turned my little moments into my biggest memories. 🌷"
    },

    {
        image: "images/photo16.jpg.jpeg",
        caption: "Home isn't always a place; sometimes, it's a person. 🏡❤️"
    },

    {
        image: "images/photo17.jpg.jpeg",
        caption: "I never knew a person could feel so much like sunshine. ☀️"
    },

    {
        image: "images/photo18.jpg.jpeg",
        caption: "My favourite view will always be a moment with you. 🌸"
    },

    {
        image: "images/photo19.jpg.jpeg",
        caption: "You're the little notification my heart always waits for. 💌"
    },

    {
        image: "images/photo20.jpg.jpeg",
        caption: "Even silence feels special when I'm sharing it with you. 🤍"
    },

    {
        image: "images/photo21.jpg.jpeg",
        caption: "You make my heart smile in ways words never could. 💞"
    },

    {
        image: "images/photo22.jpg.jpeg",
        caption: "Of all the people I could have met, I'm glad it was you. 🥹"
    },

    {
        image: "images/photo23.jpg.jpeg",
        caption: "You're my favourite hello and the hardest goodbye. 💕"
    },

    {
        image: "images/photo24.jpg.jpeg",
        caption: "I collect moments with you like they're pieces of forever. 📸"
    },

    {
        image: "images/photo25.jpg.jpeg",
        caption: "No matter how much changes, I hope we keep choosing each other. ❤️"
    },

    {
        image: "images/photo26.jpg.jpeg",
        caption: "You're the plot twist I never knew my story needed. 💗"
    },

    {
        image: "images/photo27.jpg.jpeg",
        caption: "A million little things about you make me fall again. 🌹"
    },

    {
        image: "images/photo28.jpg.jpeg",
        caption: "If I had to do it all over again, I'd still find you. ♾️"
    },

    {
        image: "images/photo29.jpg.jpeg",
        caption: "My favourite adventures are the ones where you're beside me. 🌍"
    },

    {
        image: "images/photo30.jpg.jpeg",
        caption: "You make the future feel like something beautiful to look forward to. ✨"
    },

    {
        image: "images/photo31.jpg.jpeg",
        caption: "Some people are once in a lifetime. You feel like that to me. 💖"
    },

    {
        image: "images/photo32.jpg.jpeg",
        caption: "Whatever life brings, I hope we always have stories to tell. 💌"
    },

    {
        image: "images/photo33.jpg.jpeg",
        caption: "And if our story never ends, I'll still want one more page with you. ❤️"
    },

];


// Album elements

let currentPhoto = 0;

const albumCover = document.getElementById("albumCover");
const albumViewer = document.getElementById("albumViewer");

const albumImage = document.getElementById("albumImage");
const albumCaption = document.getElementById("albumCaption");
const photoCounter = document.getElementById("photoCounter");


// Display current photo

function showAlbumPhoto() {

    const photo = albumPhotos[currentPhoto];

    albumImage.src = photo.image;
    albumCaption.textContent = photo.caption;

    photoCounter.textContent =
        `${currentPhoto + 1} / ${albumPhotos.length}`;

}


// Open album

albumCover.addEventListener("click", function () {

    albumCover.style.display = "none";

    albumViewer.classList.add("active");

    currentPhoto = 0;

    showAlbumPhoto();

});


// Close album

document.getElementById("closeAlbum").addEventListener("click", function () {

    albumViewer.classList.remove("active");

    albumCover.style.display = "block";

});


// Next photo

document.getElementById("nextPhoto").addEventListener("click", function () {

    currentPhoto = (currentPhoto + 1) % albumPhotos.length;

    showAlbumPhoto();

});


// Previous photo

document.getElementById("prevPhoto").addEventListener("click", function () {

    currentPhoto =
        (currentPhoto - 1 + albumPhotos.length) % albumPhotos.length;

    showAlbumPhoto();

});


// ===================================
// SWIPE LEFT AND RIGHT
// ===================================

let touchStartX = 0;
let touchEndX = 0;

const albumContent = document.querySelector(".album-content");

albumContent.addEventListener("touchstart", function (event) {

    touchStartX = event.changedTouches[0].screenX;

}, { passive: true });


albumContent.addEventListener("touchend", function (event) {

    touchEndX = event.changedTouches[0].screenX;

    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) > 45) {

        if (difference > 0) {

            // Swipe left = next photo
            currentPhoto =
                (currentPhoto + 1) % albumPhotos.length;

        } else {

            // Swipe right = previous photo
            currentPhoto =
                (currentPhoto - 1 + albumPhotos.length)
                % albumPhotos.length;

        }

        showAlbumPhoto();

    }

}, { passive: true });


// ===================================
// SURPRISE BUTTON
// ===================================

const surpriseButton = document.getElementById("surpriseButton");

const surpriseMessage =
    document.getElementById("surpriseMessage");


surpriseButton.addEventListener("click", function () {

    surpriseMessage.classList.toggle("show");

    if (surpriseMessage.classList.contains("show")) {

        surpriseButton.textContent = "Aww, one more time? 💗";

    } else {

        surpriseButton.textContent = "Tap for a surprise 💗";

    }

});
