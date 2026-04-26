import React from "react";
import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'

export function Footer() {
  return (
    <Container className="footer">

      {/* Logo / Branding */}
      <a href="/" className="logo">
        <span>Tushar</span>
        <span>Bindal</span>
      </a>

      {/* Tech line */}
      <div>
        <p>
          Built with <img src={reactIcon} alt="React" />
        </p>
      </div>

      {/* Social Links */}
      <div className="social-media">

        <a
          href="https://www.linkedin.com/in/tushar-bindal-bb3029204/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>

        <a
          href="https://github.com/tusharbindal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=919720961324&text=Hello%20Tushar%20Bindal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>

        <a
          href="https://t.me/your_username"   // 👉 apna username daalna
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="Telegram" />
        </a>

      </div>

    </Container>
  )
}