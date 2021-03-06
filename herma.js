window.addEventListener("DOMContentLoaded", (event) => {

  const projectVideos = {
 herma1: {
      id: 496625772,
      player: null,
    },
    herma2: {
      id: 496394819,
      player: null,
    },
    herma3: {
      id: 496398416,
      player: null,
    },
    herma4: {
      id: 496394424,
      player: null,
    },
    herma5: {
      id: 496393568,
      player: null,
    }
  };

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
  });

  let isPausing = false;

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      const elem = entry.target;
      const { player } = projectVideos[elem.id];

      if (!isPausing) {
        if (!entry.isIntersecting) {
          isPausing = true;
          player
            .pause()
            .then(() => {
              isPausing = false;
            })
            .catch();
        } else {
          player
            .play()
            .then(() => {})
            .catch();
        }
      }
    });
  }

  const imgs = document.querySelectorAll(".project-image");

  imgs.forEach(function (i) {
    const { width, height } = i.getBoundingClientRect();

    const vimeo = i.querySelector(".vimeo");

    if (vimeo) {
      const options = {
        id: projectVideos[vimeo.id].id,
        width,
        height,
        autoplay: 0,
        autopause: 0,
        loop: 1,
        byline: 0,
        title: 0,
        controls: 0,
        muted: 0,
      };

      projectVideos[vimeo.id].player = new Vimeo.Player(vimeo.id, options);

      observer.observe(vimeo);
    }
  });


  const mediaQuery = window.matchMedia("(min-width: 768px)");

  if (mediaQuery.matches) {
  } else {
    const marquee = document.querySelector(".marquee");
    marquee.setAttribute("scrollamount", 4);

    const videos = gsap.utils.toArray(".project .project-image .img-link");
    videos.forEach((el, i) => {
      if (i == 0) el.href = "https://alexenscoe.com/";

      if (i == 1)
        el.href =
          "https://www.figma.com/proto/omIA4RrRmPhSonsAB4jLlx/mobile-prototype?node-id=217%3A1&viewport=247%2C368%2C0.09171466529369354&scaling=scale-down";

      if (i == 2) el.style = "pointer-events: none;";

      if (i == 3) el.href = "pointer-events: none;";

      if (i == 4) el.href = "https://inrelation.me";

      if (i == 5) el.href = "https://purinroundtable.org/";
    });
  }

  const toggles = document.querySelectorAll(".side-projects .toggle");

  toggles.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();

      const summary = e.path[2];
      summary.classList.toggle("collapsed");
      summary.style.maxHeight = summary.scrollHeight + "px";
    });
  });
});