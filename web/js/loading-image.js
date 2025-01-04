document.querySelectorAll('.lazy-bg').forEach(el => {
    const bg = el.getAttribute('data-bg');
    if (bg) {
        el.style.backgroundImage = `url(${bg})`;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const lazyVideos = document.querySelectorAll(".lazy-video");

    if ("IntersectionObserver" in window) {
        const videoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;

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

                    observer.unobserve(video);
                }
            });
        });

        lazyVideos.forEach(video => {
            videoObserver.observe(video);
        });
    } else {
        lazyVideos.forEach(video => {
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
        });
    }
});