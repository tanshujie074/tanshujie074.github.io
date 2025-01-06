document.querySelectorAll('.lazy-bg').forEach(el => {
    el.style.backgroundImage = `url(${bgImage})`;
});


document.addEventListener("DOMContentLoaded", function () {
    const lazyVideos = document.querySelectorAll(".lazy-video");

    function handleVideoSwitch() {

        lazyVideos.forEach(video => video.classList.remove("show"));


        const screenWidth = window.innerWidth;
        lazyVideos.forEach(video => {
            if (screenWidth > 800 && video.id === "localVideo-desktop") {
                video.classList.add("show");
            } else if (screenWidth <= 800 && video.id === "localVideo-phone-table") {
                video.classList.add("show");
            }
        });
    }

    function loadVideo(video) {
        if (video.tagName === "IFRAME") {
            const src = video.getAttribute("data-src");
            if (src) {
                video.src = src;
                video.removeAttribute("data-src");
            }
        } else {
            const sources = video.querySelectorAll("source");
            sources.forEach(source => {
                const src = source.getAttribute("data-src");
                if (src) {
                    source.src = src;
                    source.removeAttribute("data-src");
                }
            });

            video.load();
            if (video.autoplay) {
                video.play();
            }
        }
    }

    if ("IntersectionObserver" in window) {
        const videoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;

                    const screenWidth = window.innerWidth;
                    if ((screenWidth > 900 && video.id === "localVideo-desktop") ||
                        (screenWidth <= 900 && video.id === "localVideo-phone-table")) {
                        loadVideo(video);
                    }

                    observer.unobserve(video);
                }
            });
        });

        lazyVideos.forEach(video => {
            videoObserver.observe(video);
        });
    } else {
        lazyVideos.forEach(video => loadVideo(video));
    }

    handleVideoSwitch();

    window.addEventListener("resize", handleVideoSwitch);
});

