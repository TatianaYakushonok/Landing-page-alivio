/*================= MOBILE NAV ====================*/

const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const headerNav = document.querySelector('.header-item');
const headerButton = document.querySelector('.header-button');

mobileNavButton.addEventListener('click', function() {
    mobileNavIcon.classList.toggle('active');
    headerNav.classList.toggle('active');
    headerButton.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
    /*window.addEventListener('scroll', function() {return false;});*/
})

/*==================== VIDEO ======================*/

const videoStoryButton = document.querySelector('#video-story-button');
const videoStoryIco = document.querySelector('.story-iconplay');
const videoStory = document.querySelector('#video-story');
const overlay = document.querySelector('.story-video-overlay');

videoStoryButton.addEventListener('click', function() {

    function toggleOverlay(event) {
        if(event.type === 'mouseleave') {
            overlay.classList.add('hidden');
            videoStoryIco.classList.add('hidden');
        } else {
            overlay.classList.remove('hidden');
            videoStoryIco.classList.remove('hidden');
        }
    }

    if(videoStory.paused) {
        videoStory.play();
        videoStoryIco.src = "./img/ico_pause.svg";

        videoStoryIco.onmouseleave = toggleOverlay;
        videoStoryIco.onmouseenter = toggleOverlay;

    } else {
        videoStory.pause();
        videoStoryIco.src = "./img/ico-play.svg";

        videoStoryIco.onmouseleave = null;
        videoStoryIco.onmouseenter = null;
    }
})