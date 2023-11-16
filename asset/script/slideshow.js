let slideshows = {};

setInterval(() => {
    for (const id of Object.keys(slideshows)) {
        if (!slideshows[id].cur) slideshows[id].cur = 0;
        // increase current slide
        let cur = slideshows[id].cur++ % slideshows[id].images.length;
        // change background image
        document.getElementById(id).style.backgroundImage =
            `url(${slideshows[id].images[cur]})`;
    }
}, 7000);