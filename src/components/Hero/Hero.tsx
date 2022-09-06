import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hey 👋, this is</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Rana Vivek Singh</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Software Developer | DevOps | SharePoint & MS Teams | Web Security</h3>
          <h4>Made Best Microsoft Teams app  in the World in 2022</h4>
          &nbsp;
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Four+ years of experience facilitating cutting-edge engineering solutions with a wide range of web application and technology skills. Proven ability to leverage full-stack expertise to build interactive and user-centered website designs to scale. Extensive expertise in large system architecture development and administration, as well as network design and configuration.
</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.8*1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contato" className="button">Contact me</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          <img src={Illustration} alt="Ilustração"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}