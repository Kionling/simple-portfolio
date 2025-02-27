import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import gsap from "gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";



const ScrollComponent = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    // Create a timeline using gsap.timeline() instead of TimelineMax
    const wipeAnimation = gsap.timeline()
      .fromTo(
        "section.panel.turqoise",
        { x: "-100%" },
        { x: "0%", ease: "none", duration: 1 }
      )
      .fromTo(
        "section.panel.green",
        { x: "100%" },
        { x: "0%", ease: "none", duration: 1 }
      )
      .fromTo(
        "section.panel.bordeaux",
        { y: "-100%" },
        { y: "0%", ease: "none", duration: 1 }
      );

    new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "300%",
    })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addIndicators() // for debugging
      .addTo(controller);
  }, []);

  return (
    <div id="pinContainer">
      <section className="panel blue">
        <b>ONE</b>
      </section>
      <section className="panel turqoise">
        <b>TWO</b>
      </section>
      <section className="panel green">
        <b>THREE</b>
      </section>
      <section className="panel bordeaux">
        <b>FOUR</b>
      </section>
      <style jsx>{`
        #pinContainer {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .panel {
          height: 100%;
          width: 100%;
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default ScrollComponent;
