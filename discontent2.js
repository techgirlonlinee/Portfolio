window.addEventListener("DOMContentLoaded", (event) => {

  const projectVideos = {
 discontenti1: {
      id: 496421464,
      player: null,
    },
    discontenti2: {
      id: 496424315,
      player: null,
    },
    discontenti3: {
      id: 496424294,
      player: null,
    },
    discontenti4: {
      id: 496424291,
      player: null,
    },
    discontenti5: {
      id: 496424265,
      player: null,
    },
    discontenti6: {
      id: 496424235,
      player: null,
    },
    discontenti7: {
      id: 496424233,
      player: null,
    },

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
        muted: 1,
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