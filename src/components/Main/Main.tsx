import Particles from "react-tsparticles";
import { Container } from "./styles";

import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

// ✅ Only relevant icons
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function Main() {
  return (
    <Container>

      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          detectRetina: true,
          fpsLimit: 60,

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 6
              }
            }
          },

          particles: {
            number: {
              value: 12,
              density: { enable: true, area: 800 }
            },

            move: {
              enable: true,
              speed: 1.5,
              outMode: "out"
            },

            opacity: {
              value: 0.8,
              random: true
            },

            rotate: {
              value: 0,
              random: true,
              animation: {
                enable: true,
                speed: 3
              }
            },

            shape: {
              type: "image",
              image: [
                { src: htmlIcon, width: 20, height: 20 },
                { src: cssIcon, width: 20, height: 20 },
                { src: jsIcon, width: 20, height: 20 },
                { src: reactIcon, width: 20, height: 20 },
                { src: boostrapIcon, width: 20, height: 20 }
              ]
            },

            size: {
              value: 18,
              random: false
            }
          }
        }}
      />

      <Hero />
      <About />
      <Project />
      <Contact />

    </Container>
  );
}