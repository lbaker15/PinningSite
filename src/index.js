import '../scss/main.scss';
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

console.log('index updated new')
//WHEN PINNING, THE NEXT START IS EG 1PX ON FROM THE LAST END (DEFAULTS TO 100%)
//SO START 1PX TOP IS 1PX ON FROM WHERE THE LAST PIN ENDED? END DEFAULTS TO BOTTOM OF UPPER ELEMENT 
//IF WERE NOT USING FIXED POSITIONS YOU COULD JUST SET PADDING BOTTOM OF THE UPPER ELEMENT
gsap.to(".panel3", {
    height: 0.1 + "vh", 
    ease: "none",
    // stagger: 0.5,
    scrollTrigger: {
      trigger: "#container",
      start: "0px top",
      end: '+=120%',
      scrub: 0.5,
      onUpdate: (self) => {
        let num = -(self.progress * 400) + 525;      
        gsap.to('.extraImg', {y: num})
      },
      pin: true,
      pinSpacing: true
    }
});

gsap.to(".panel2", {
    height: 0.1 + "vh", 
    ease: "none",
    // stagger: 0.5,
    scrollTrigger: {
      trigger: "#container",
      start: () => "1px top",
      end: '+=120%',
      onUpdate: (self) => {},
      scrub: 0.5,
      pin: true,
      pinSpacing: true,
      // markers: {startColor: 'yellow'}
    }
});
let fired;
gsap.to(".panel1", {
  height: 0.1 + "vh", 
  ease: "none",
  // stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: () => "2px top",
    end: '+=120%',
    onUpdate: (self) => {
      let num = - ((self.progress * 100 * 3) - 300)
      console.log('OLD NUM', num)
      gsap.to(".extraImg2", {y: num})
      if (self.progress > 0.53) {
        if (!fired) {
          gsap.to('.zeroPng', {visibility: 'visible'})
          gsap.to('.extraImg2', {visibility: 'visible'})
          fired = true;
        }
      } else {
        if (fired) {
          gsap.to('.zeroPng', {visibility: 'hidden'})
          gsap.to('.extraImg2', {visibility: 'hidden'})
          fired = false;
        }
      }
    },
    scrub: 0.5,
    pin: true,
    pinSpacing: true,
    // markers: {startColor: 'blue'}
  }
})

gsap.to(".panel0", {
  // height: 0.1 + "vh", 
  ease: "none",
  // stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: () => "3px top",
    end: '+=120%',
    onUpdate: (self) => {
      //-50 decreasing
      if (self.progress * 300 - 50 < 100) {
        let num = 50 - (self.progress * 300) - 50
        console.log(50 - (self.progress * 300) - 100)
        gsap.to(".extraImg2", {y: num})
      }
    },
    scrub: 0.5,
    pin: true,
    pinSpacing: true,
    markers: {startColor: 'blue', endColor: 'blue'}
  }
})







