import React, { useEffect } from "react";
import "./sponsorsection.css";

const SponsorsSection = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // Check if prefers-reduced-motion is enabled
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }

    function addAnimation(scrollers) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <section className="sponsorsection">
      <div className="scroller" data-speed="fast" data-direction = "left">
        <ul className="tag-list scroller__inner">
          <li><img src="/logo192.png" alt="companylogo"></img></li>
          <li><img src="/devfoliologo.png" alt="companylogo"></img></li>
        </ul>
      </div>

      <div className="scroller" data-speed="fast" data-direction = "right">
        <ul className="tag-list scroller__inner">
          <li><img src="/logo192.png" alt="companylogo"></img></li>
          <li><img src="/devfoliologo.png" alt="companylogo"></img></li>
        </ul>
      </div>
      
      <div className="scroller" data-speed="fast" data-direction = "left">
        <ul className="tag-list scroller__inner">
          <li><img src="/logo192.png" alt="companylogo"></img></li>
          <li><img src="/devfoliologo.png" alt="companylogo"></img></li>
        </ul>
      </div>
      
      <div className="scroller" data-speed="fast" data-direction = "right">
        <ul className="tag-list scroller__inner">
          <li><img src="/logo192.png" alt="companylogo"></img></li>
          <li><img src="/devfoliologo.png" alt="companylogo"></img></li>
        </ul>
      </div>
      
    </section>
  );
};

export default SponsorsSection;
