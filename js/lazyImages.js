(function () {

    function initializeLazyImages() {

        //console.log("lazy loading initializing");
        // Get images that has the data-src attribute
        var lazyImages = document.querySelectorAll('img[data-src]');
        var lazyVideos = document.querySelectorAll('iframe.video[data-src]');
        //const lazyImages = document.querySelectorAll('picture');

        // If browser doesn't support IntersectionObserver, load all images 
        if (!('IntersectionObserver' in window)) {

            console.log("no interesection observer");

            lazyImages.forEach((imageElement) => loadImage(imageElement));
            return false;
        }
        else {
            // Create observer
            const observer = new IntersectionObserver(function (entries) {

                entries.forEach(entry => {
                    if (entry.isIntersecting !== true) {
                        return;
                    }
                    const imageElement = entry.target;
                    loadImage(imageElement);
                    observer.unobserve(imageElement);
                    //window.setTimeout(() => imageElement.classList.remove("lazy-load-preload"), 250);
                });
            },
                // Configuration for the observer
                {
                    root: null,
                    threshold: .25,
                    rootMargin: "0px"
                } // load images if it gets within 100px
            );

            // Let all lazy images be observered
            lazyImages.forEach((imageElement) => {

                observer.observe(imageElement);
            });
        }
    }

    function loadVideo(iframeElement) {

    }

    function loadImage(imageElement) {
        // If image is within a picture element, set srcset attribute for all source elements
        const parent = imageElement.parentNode;

        // There are cases where parent can be null or undefined such that parent.tagName will fail
        if (parent !== null && typeof(parent) !== "undefined" && parent.tagName === 'PICTURE') {

            const sourceElements = parent.querySelectorAll('source');
            sourceElements.forEach((sourceElement) => {
                sourceElement.srcset = sourceElement.dataset.srcset;
            });
        }

        // Set img srcset attribute
        if (typeof (imageElement.dataset.srcset) !== "undefined" && imageElement.dataset.srcset !== null) {
            imageElement.srcset = imageElement.dataset.srcset;
        }
        
        imageElement.src = imageElement.dataset.src;
    }

    // wait for the page to load before we initialize the functionality
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(1, initializeLazyImages);
    } else {
        document.addEventListener("DOMContentLoaded", initializeLazyImages);
    }

})();