function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to(".nav-bottom", {
      height: "23vh",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to(".nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}

function BtnAnimation() {
  var blueBtn = document.querySelector(".blue-btn");

  blueBtn.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to(".blue-btn h4 ", {
      x: 0,
      // duration:0.3,
      stagger: {
        amount: 0.3,
      },
    });
  });
  blueBtn.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".blue-btn h4 ", {
      x: 5,
      stagger: {
        amount: 0.2,
      },
    });
  });
}

function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");
  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        sclae: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 95,
      });
    });
  });
}

function page3Animation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector(".page3 video");
  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

function sec_right() {
  var sections = document.querySelectorAll(".sec-right");

  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}

function page4Animation() {
  var rightElems = document.querySelectorAll(".sec-right");
  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[5], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[5], {
        opacity: 0,
        sclae: 0,
        duration: 0.5,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[5], {
        x: dets.x - elem.getBoundingClientRect().x - 1000,
        y: dets.y - elem.getBoundingClientRect().y - 10,
      });
    });
  });
}

function scrollAnimation() {
  gsap.from(".btm6-part2 h4", {
    x: 0,
    delay: 1,
    scrollTrigger: {
      trigger: ".btm6-part2",
      scroller: "body",
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
  gsap.from(".btm6-part3 h4", {
    x: 0,
    delay: 1,
    scrollTrigger: {
      trigger: ".btm6-part2",
      scroller: "body",
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
  gsap.from(".btm6-part4 h4", {
    x: 0,
    delay: 0.1,
    scrollTrigger: {
      trigger: ".btm6-part2",
      scroller: "body",
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from(".page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from(".page1 h1, .page1 p,page1 div ,.page1-box", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}

// locomotiveAnimation();
loadingAnimation();
navAnimation();
page2Animation();
page3Animation();
sec_right();
page4Animation();
scrollAnimation();
BtnAnimation();
