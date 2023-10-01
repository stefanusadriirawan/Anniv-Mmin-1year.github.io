let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const audio = document.getElementById('audio');

showSlide(slideIndex);

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[slideIndex].style.display = 'block';
}

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audio.addEventListener('ended', function () {
            audio.currentTime = 0; // Reset audio to the beginning
            audio.play();
        });
        document.getElementById('audioBtn').textContent = 'Pause Audio';
    } else {
        audio.pause();
        document.getElementById('audioBtn').textContent = 'Play Audio';
    }
}
