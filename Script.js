function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
}

function loader() {
    var tl = gsap.timeline()

    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
    });

    tl.from("#loader h4", {
        duration: 0.6,
        delay: 0.5,
        opacity: 0,
    });

    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5t = document.querySelector("#line1-part1 h5");
            var count = 0;
            setInterval(function () {
                if (count < 100) {
                    h5t.innerHTML = count++;
                } else {
                    h5t.innerHTML = count;
                }
            }, 20)
        }
    });

    tl.to(".line h2", {
        animationName: "ani",
        opacity: 1,
    })

    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 2,
    });

    tl.from("#page1", {
        y: 1600,
        opacity: 0,
        delay: 0.2,
        ease: Power4,
        duration: 0.6,
    });

    tl.to("#loader", {
        display: "none",
    });

    tl.from("#nav", {
        opacity: 0
    });

    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero3 h3, #hero4 h1", {
        y: 140,
        stagger: 0.2,
    });

    tl.from("#one, #page2", {
        opacity: 0,
    }, "-=1.2");
}

function cursor() {
    Shery.makeMagnet(".magnet");
    count = 0;
    if (count == 0) {
        document.addEventListener("mousemove", function (dets) {
            gsap.to(".mousefollower", {
                left: dets.x,
                top: dets.y,
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            });
        })
        count = 1;
    } else {
        document.addEventListener("mouseleave", function () {
            gsap.to(".mousefollower", {
                opacity: 0,
            });
        })
        count = 0;
    }
}

function vidCursor() {
    var div = document.querySelector("#vdodiv");
    div.addEventListener("mouseenter", function () {
        div.addEventListener("mousemove", function (dets) {
            gsap.to(".mousefollower", {
                opacity: 0,
            });

            gsap.to("#video-cursor", {
                left: dets.x - 470,
                top: dets.y - 220,
            });
        })
    })

    div.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1,
        });

        gsap.to("#video-cursor", {
            top: "-10%",
            left: "66%",
            delay: 0.3,
            duration: 0.5,
        });
    })
}

function videoAni() {
    var vid = document.querySelector("#vdodiv video");
    var div = document.querySelector("#vdodiv");
    var click = 0;
    div.addEventListener("click", function () {
        if (click == 0) {
            vid.play();

            gsap.to("#vdodiv video", {
                opacity: 1,
            });

            gsap.to("#video-cursor", {
                scale: 0.5,
            });

            click = 1;

            document.querySelector("#video-cursor i").classList.replace("ri-play-mini-fill", "ri-pause-mini-line");
        } else {
            vid.pause();

            gsap.to("#video-cursor", {
                scale: 1,
            });

            gsap.to("#vdodiv video", {
                opacity: 0,
            });

            click = 0;

            document.querySelector("#video-cursor i").classList.replace("ri-pause-mini-line", "ri-play-mini-fill");
        }
    })
}

function sheryAnimation() {
    Shery.imageEffect(".img-div", {
        style: 6,
        config: { "noiseDetail": { "value": 7.44, "range": [0, 100] }, "distortionAmount": { "value": 0.76, "range": [0, 10] }, "scale": { "value": 100, "range": [0, 100] }, "speed": { "value": 0.79, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7999773611096631 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.37, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.47, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        gooey: true,
    })
}

function bluYeldiv() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#flag", {
            x: dets.x,
            y: dets.y,
        })
    })

    var hero3 = document.querySelector("#hero3");
    hero3.addEventListener("mouseenter", function () {
        gsap.to("#flag", {
            opacity: 1,
        });
    })

    hero3.addEventListener("mouseleave", function () {
        gsap.to("#flag", {
            opacity: 0,
        });
    })
}

function footerAnimation() {

    var clutter = ""
    var clutter2 = ""
    document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
        clutter += `<span>${elem}</span>`
    })
    document.querySelector("#footer h1").innerHTML = clutter
    document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
        clutter2 += `<span>${elem}</span>`
    })
    document.querySelector("#footer h2").innerHTML = clutter2


    document.querySelector("#ft").addEventListener("mouseenter", function () {
        gsap.to("#footer h1 span", {
            opacity: 0,
            stagger: 0.05
        })
        gsap.to("#footer h2 span", {
            delay: 0.35,
            opacity: 1,
            stagger: 0.1,
        })
        
        gsap.to(".button__arrow4", {
            right: "18%",
            delay: 1,
        })
    })
    document.querySelector("#ft").addEventListener("mouseleave", function () {
        gsap.to("#footer h1 span", {
            opacity: 1,
            stagger: 0.1,
            delay: 0.35,

        })
        gsap.to("#footer h2 span", {
            opacity: 0,
            stagger: 0.05
        })

        
        gsap.to(".button__arrow4", {
            right: "23%",
            delay: 1,
        })
    })
}

locomotive();
loader();
cursor();
vidCursor();
videoAni();
sheryAnimation();
bluYeldiv();
footerAnimation();