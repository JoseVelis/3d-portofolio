import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src="/images/bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="hero-content">
        <header className="hero-text-container">
          <div className="hero-text">
            <h1 className="hero-heading">
              Shaping
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 md:gap-3 pb-2"
                    >
                 <img                    src={word.imgPath}
                     alt="icon"
                   className="word-icon"
                />
                 <span>{word.text}</span>
                </span>
                ))}
                </span>
              </span>
            </h1>
            <h1 className="hero-heading">into Real Projects</h1>
            <h1 className="hero-heading">that Deliver Results</h1>
          </div>

          <p className="hero-description">
            Hi, I'm Jose, a developer based in Peru with a passion for learning
            and creating impactful web experiences.
          </p>

          <Button
            text="See My Work"
            className="w-60 h-12 md:w-80 md:h-12"
            id="counter"
          />
        </header>

        <figure className="hero-3d-container">
          <HeroExperience />
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;