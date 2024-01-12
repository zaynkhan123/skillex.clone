function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();




}

init()

var image = document.querySelector("#picture .card1")
var change = document.querySelector("#picture .card1 img")
var kam = document.querySelector("#picture .card1 h3")
var ran = document.querySelector("#picture .card1 h4")
image.addEventListener("mouseenter", function () {
    image.style.width = `100%`
    change.style.borderRadius = "10%"
    kam.style.rotate = "0deg"
    kam.style.top = "72%"
    kam.style.left = "10%"
    kam.style.color = "#f1f1f1"
    // kam.style.opacity = "1"
    //yeh h3 wale ke liye hai.
    ran.style.rotate = "0deg"
    ran.style.top = "87%"
    ran.style.left = "65%"
    ran.style.color = "#f1f1f1"
    ran.style.opacity = "1"
})
image.addEventListener("mouseleave", function () {
    image.style.width = `50%`
    change.style.borderRadius = "5%"
    kam.style.rotate = "-90deg"
    kam.style.top = "40%"
    kam.style.left = "-5%"
    kam.style.color = "#f1f1f1"
    // kam.style.opacity = "1"
    //yeh h3 wale ke liye hai.
    ran.style.rotate = "-90deg"
    ran.style.top = "40%"
    ran.style.left = "60%"
    ran.style.color = "#f1f1f1"
    ran.style.opacity = "0"
})


// dusre card ke liya h...
var image2 = document.querySelector("#picture .card2")
var change2 = document.querySelector("#picture .card2 img")
var kam2 = document.querySelector("#picture .card2 h3")
var ran2 = document.querySelector("#picture .card2 h4")
image2.addEventListener("mouseenter", function () {
    image2.style.width = `100%`
    change2.style.borderRadius = "10%"
    kam2.style.rotate = "0deg"
    kam2.style.top = "72%"
    kam2.style.left = "10%"
    kam2.style.color = "#f1f1f1"
    // kam.style.opacity = "1"
    //yeh h3 wale ke liye hai.
    ran2.style.rotate = "0deg"
    ran2.style.top = "87%"
    ran2.style.left = "65%"
    ran2.style.color = "#f1f1f1"
    ran2.style.opacity = "1"
})
image2.addEventListener("mouseleave", function () {
    image2.style.width = `30%`
    change2.style.borderRadius = "5%"
    kam2.style.rotate = "-90deg"
    kam2.style.top = "40%"
    kam2.style.left = "-5%"
    kam2.style.color = "#f1f1f1"
    // kam.style.opacity = "1"
    //yeh h3 wale ke liye hai.
    ran2.style.rotate = "-90deg"
    ran2.style.top = "40%"
    ran2.style.left = "60%"
    ran2.style.color = "#f1f1f1"
    ran2.style.opacity = "0"
})

var image3 = document.querySelector("#picture .card3")
var change3 = document.querySelector("#picture .card3 img")
var kam3 = document.querySelector("#picture .card3 h3")
var ran3 = document.querySelector("#picture .card3 h4")
image3.addEventListener("mouseenter", function () {
    image3.style.width = `100%`
    change3.style.borderRadius = "10%"
    kam3.style.rotate = "0deg"
    kam3.style.top = "72%"
    kam3.style.left = "10%"
    kam3.style.color = "#f1f1f1"
    // kam.style.opacity = "1"
    //yeh h3 wale ke liye hai.
    ran3.style.rotate = "0deg"
    ran3.style.top = "87%"
    ran3.style.left = "65%"
    ran3.style.color = "#f1f1f1"
    ran3.style.opacity = "1"

})
image3.addEventListener("mouseleave", function () {
    image3.style.width = `30%`
    change3.style.borderRadius = "5%"
    kam3.style.rotate = "-90deg"
    kam3.style.top = "40%"
    kam3.style.left = "-5%"
    kam3.style.color = "#f1f1f1"
    // kam.style.opacity = "1"
    //yeh h3 wale ke liye hai.
    ran3.style.rotate = "-90deg"
    ran3.style.top = "40%"
    ran3.style.left = "60%"
    ran3.style.color = "#f1f1f1"
    ran3.style.opacity = "0"
})

//second card effect
var chn = document.querySelector("#card2")
var add = document.querySelector("#addition .pat-1")

chn.addEventListener("click", function () {
    add.style.opacity = 1
    add.style.left = "32%"
    var icone = document.querySelector("#addition .ri-close-line").addEventListener("click", function () {
        add.style.opacity = 0
        add.style.left = "-100%"
    })
})

//fourth card effect
var chn2 = document.querySelector("#card4")
var add2 = document.querySelector(".pat-2")

chn2.addEventListener("click", function () {
    add2.style.opacity = 1
    add2.style.right = "32%"
    var icone2 = document.querySelector(".pat-2 .ri-close-line").addEventListener("click", function () {
        add2.style.opacity = 0
        add2.style.right = "-120%"
    })
})

//first card effect
var chn3 = document.querySelector("#card1")
var add3 = document.querySelector(".pat-3")

chn3.addEventListener("click", function () {
    add3.style.opacity = 1
    add3.style.left = "32%"
    var icone3 = document.querySelector(".pat-3 .ri-close-line").addEventListener("click", function () {
        add3.style.opacity = 0
        add3.style.left = "-100%"
    })
})

//third card effect
var chn4 = document.querySelector("#card3")
var add4 = document.querySelector(".pat-4")

chn4.addEventListener("click", function () {
    add4.style.opacity = 1
    add4.style.right = "33%"
    var icone4 = document.querySelector(".pat-4 .ri-close-line").addEventListener("click", function () {
        add4.style.opacity = 0
        add4.style.right = "-140%"
    })
})


gsap.to("#overlay h1", {
    scale: 1.2,
    color: "white",
    transition: "0.6s ease",
})
gsap.to("#overlay", {
    top: "-100%",
    delay: "1.5",
})

var a = gsap.timeline();

a.to("#page1 h1", {
    left: "6%",
    transition: .5,
})
a.to("#nav-prt1", {
    left: "2.5%",
    transition: 1.5,
})
a.to("#nav-prt2", {
    right: "-79%",
    transition: 1,
})
a.to(".txt", {
    left: "2.5vw",
    transition: .5,
})

gsap.to("#picture", {
    left: "28vw",
    transition: 2,
    delay: 1.1,
})

var t1 = gsap.timeline();
t1.to("#page2 h1", {
    opacity: 1,
    // transition: "0.5s ease",
    scrollTrigger: {
        scroller: "#main",
        Trigger: "#page2 h1",
        top: "50%",
        start: "50%",
        end: "50%",
        // markers: true,
        scrub: 3,
    }
})

t1.to(".nav-prt3", {
    top: "1%",
    opacity: 1,
    // transition: "0.5s ease",
    scrollTrigger: {
        scroller: "#main",
        Trigger: ".nav-prt3",
        top: "50%",
        start: "50%",
        end: "50%",
        // markers: true,
        scrub: 3,
    }
})

t1.to("#page2 #cards", {
    opacity: 1,
    transition: ".2s ease",
    scrollTrigger: {
        scroller: "#main",
        Trigger: "#page2 #cards",
        top: "90%",
        start: "75%",
        end: "50%",
        // markers: true,
        scrub: 3,
    }
})

var t2 = gsap.timeline();

t2.to("#page3 .text h1", {
    left: "6.5vw",
    transition: ".2s ease",
    scrollTrigger: {
        scroller: "#main",
        Trigger: "#page3 .text h1",
        top: "70%",
        start: "117%",
        end: "100%",
        // markers: true,
        scrub: 3,
    }
})

t2.to("#page3 .text h3", {
    right: "-59vw",
    transition: ".2s ease",
    scrollTrigger: {
        scroller: "#main",
        Trigger: "#page3 .text h1",
        top: "70%",
        start: "117%",
        end: "100%",
        // markers: true,
        scrub: 3,
    }
})

t2.to(".ui", {
    right: "10vw",
    scrollTrigger: {
        scroller: "#main",
        Trigger: "#page3 .text h1",
        top: "70%",
        start: "110%",
        end: "100%",
        // markers: true,
        scrub: 3,
    }
})

t2.to("#crd", {
    left: "50vw",
    scrollTrigger: {
        scroller: "#main",
        Trigger: "#crd",
        top: "120%",
        start: "250%",
        end: "250%",
        // markers: true,
        scrub: 3,
    }
})
