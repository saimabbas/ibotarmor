import React, { useState, useEffect } from "react";
import "./style.css";
import Logo1 from "./assets/img/logo-2-white.png";
import HeroImg1 from "./assets/img/hero-img.svg";
import HeroCardImg1 from "./assets/img/hero-card-1.png";
import HeroCardImg2 from "./assets/img/hero-card-2.png";
import HeroCardImg3 from "./assets/img/hero-card-3.png";
import HeroCardImg4 from "./assets/img/hero-card-4.png";
import ServiceImg1 from "./assets/img/service-img-2.jpg";
import ServiceImg2 from "./assets/img/service-img-1.jpg";
import AboutImg from "./assets/img/about-img.png";
import WaveImg1 from "./assets/img/wave-1.png";
import WaveImg2 from "./assets/img/wave-2.png";
import DemoImgPng from "./assets/img/11.png";
import BgImg from "./assets/img/bg.jpg";
import ServicesImgBg from "./assets/img/services-bg.png";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import HeroImg from "./components/HeroImg";
import DemoImg from "./components/DemoImg";
import { MdMenu, MdClose } from "react-icons/md";
import gsap from "gsap";
import {
  Back,
  Power3,
  Power1,
  Power2,
  Power4,
  Linear,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    var headerAnim = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "bottom 75%",
        toggleActions: "restart none none reset",
      },
    });
    headerAnim
      .fromTo(
        "header",
        {
          backgroundColor: "rgba(47, 113, 201, 0)",
          backdropFilter: "blur(0px)",
          borderRadius: "0",
        },
        {
          backgroundColor: "rgba(47, 113, 201, 0.25)",
          backdropFilter: "blur(20px)",
          borderRadius: "0 0 2.5rem 2.5rem",
          duration: 0.5,
        }
      )
      .fromTo(
        ".header-content",
        {
          height: "8.5rem",
        },
        {
          height: "6rem",
          duration: 0.5,
        },
        0
      )
      .fromTo(
        ".header-mob-head",
        {
          height: "8.5rem",
        },
        {
          height: "6rem",
          duration: 0.5,
        },
        0
      );
  }, []);

  return (
    <main className="ibotarmor">
      {/* <img className="bg-img" src={BgImg} alt="" /> */}
      <header id="header">
        <div className="box">
          <div className="header-content">
            <img src={Logo1} alt="" />
            <div className="header-links">
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
              <a href="#requestademo">Request a Demo</a>
            </div>
            <div
              onClick={() => {
                setIsHeaderOpen(true);
              }}
              className="open-header"
            >
              <MdMenu />
            </div>
          </div>
        </div>
      </header>
      {isHeaderOpen ? (
        <div className="header-mob">
          <div className="box">
            <div className="header-mob-head">
              <img src={Logo1} alt="" />
              <div
                onClick={() => {
                  setIsHeaderOpen(false);
                }}
              >
                <MdClose />
              </div>
            </div>
            <div className="header-mob-body">
              <a
                onClick={() => {
                  setIsHeaderOpen(false);
                }}
                href="#services"
              >
                Services
              </a>
              <a
                onClick={() => {
                  setIsHeaderOpen(false);
                }}
                href="#about"
              >
                About Us
              </a>
              <a
                onClick={() => {
                  setIsHeaderOpen(false);
                }}
                href="#contact"
              >
                Contact
              </a>
              <a
                onClick={() => {
                  setIsHeaderOpen(false);
                }}
                href="#requestademo"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      ) : null}
      <section className="hero-section" id="home">
        <div className="box">
          <div className="hero-content">
            <div className="hero-content-left">
              <h1 className="ops">
                Shielding Your Cyber Space
                <span className="ops">.</span>
              </h1>
              <p>
                Our service utilizes state-of-the-art algorithms to identify and
                block malicious bots, ensuring a safe browsing experience for
                your users.
              </p>
              <div className="social-icons-grid">
                <a href="#">
                  <BsTwitter />
                </a>
                <a href="#">
                  <BsInstagram />
                </a>
                <a href="#">
                  <BsLinkedin />
                </a>
              </div>
              <a className="button-19" href="#requestademo">
                Request a Demo
              </a>
            </div>
            <div className="hero-content-right">
              <HeroImg className="hero-img" />
            </div>
          </div>
        </div>
      </section>
      <div className="box">
        <div className="hero-grid">
          <div className="hero-grid-card">
            <img src={HeroCardImg1} alt="" />
            <h3>Advanced Bot Detection.</h3>
            <p>
              Our service utilizes state-of-the-art algorithms to identify and
              block malicious bots, ensuring a safe browsing experience for your
              users.
            </p>
          </div>
          <div className="hero-grid-card">
            <img src={HeroCardImg2} alt="" />
            <h3>Real-time Threat Monitering.</h3>
            <p>
              We constantly monitor and analyze bot activity to stay one step
              ahead, adapting our security measures to counter evolving threats.
            </p>
          </div>
          <div className="hero-grid-card">
            <img src={HeroCardImg3} alt="" />
            <h3>Robust Bot Protection.</h3>
            <p>
              Our solution offers comprehensive protection against a wide range
              of bot attacks, including credential stuffing, scraping, and
              automated account creation.
            </p>
          </div>
          <div className="hero-grid-card">
            <img src={HeroCardImg4} alt="" />
            <h3>Easy Integration.</h3>
            <p>
              Integrating our anti-bot service is simple and hassle-free, with
              flexible options to fit your existing infrastructure and
              platforms.
            </p>
          </div>
        </div>
      </div>
      <section className="services-section" id="services">
        <img className="wave-img-1" src={WaveImg1} alt="" />
        {/* <img className="services-img-bg" src={ServicesImgBg} alt="" /> */}
        <div className="box">
          <div className="section-heading">
            <h2 className="ops">Services</h2>
          </div>

          <div className="services-content">
            <div className="services-grid">
              <div className="services-grid-card">
                <div className="services-grid-card-top">
                  <div className="services-img">
                    <img src={ServiceImg1} alt="" />
                  </div>
                  <div className="services-textbox">
                    <h3>VaultGuard</h3>
                    <p>
                      VaultGuard by BotArmor Technologies provides an innovative
                      anti-bot service, using dual approaches. It ensures
                      optimal user experiences by protecting login pages,
                      payment information and user accounts while offering
                      secure protection from bot threats and data breaches while
                      upholding user trust and satisfaction on platforms. With
                      advanced algorithms and machine learning to safeguard
                      these resources from bot attacks or data breaches.
                    </p>
                    <ul>
                      <li>Vulnerability Assessments and Penetration Testing</li>
                      <li>Managed Security Services:</li>
                      <li>
                        Firewall and Intrusion Detection/Prevention Systems
                      </li>
                      <li>Endpoint Protection</li>
                      <li>Data Encryption and Secure Communication</li>
                    </ul>
                  </div>
                </div>
                <div className="services-grid-card-bottom">
                  <div className="price-grid">
                    <div className="price-grid-card">
                      <h5>$15/Month</h5>
                      <ul>
                        <li>Price Feature no. 1 for $15/Month</li>
                        <li>Price Feature no. 2 for $15/Month</li>
                        <li>Price Feature no. 3 for $15/Month</li>
                      </ul>
                    </div>
                    <div className="price-grid-card">
                      <h5>$25/Month</h5>
                      <ul>
                        <li>Price Feature no. 1 for $25/Month</li>
                        <li>Price Feature no. 2 for $25/Month</li>
                        <li>Price Feature no. 3 for $25/Month</li>
                      </ul>
                    </div>
                    <div className="price-grid-card">
                      <h5>$35/Month</h5>
                      <ul>
                        <li>Price Feature no. 1 for $35/Month</li>
                        <li>Price Feature no. 2 for $35/Month</li>
                        <li>Price Feature no. 3 for $35/Month</li>
                      </ul>
                    </div>
                  </div>
                  <a className="button-19" href="#requestademo">
                    Request a Demo
                  </a>
                </div>
              </div>
              <div className="services-grid-card">
                <div className="services-grid-card-top">
                  <div className="services-img">
                    <img src={ServiceImg2} alt="" />
                  </div>
                  <div className="services-textbox">
                    <h3>Armor Bot Manager</h3>
                    <p>
                      VaultGuard by BotArmor Technologies provides an innovative
                      anti-bot service, using dual approaches. It ensures
                      optimal user experiences by protecting login pages,
                      payment information and user accounts while offering
                      secure protection from bot threats and data breaches while
                      upholding user trust and satisfaction on platforms. With
                      advanced algorithms and machine learning to safeguard
                      these resources from bot attacks or data breaches.
                    </p>
                    <ul>
                      <li>Managed Security Services:</li>
                      <li>
                        Firewall and Intrusion Detection/Prevention Systems
                      </li>
                      <li>Endpoint Protection</li>
                      <li>Data Encryption and Secure Communication</li>
                    </ul>
                  </div>
                </div>
                <div className="services-grid-card-bottom">
                  <div className="price-grid">
                    <div className="price-grid-card">
                      <h5>$15/Month</h5>
                      <ul>
                        <li>Price Feature no. 1 for $15/Month</li>
                        <li>Price Feature no. 2 for $15/Month</li>
                        <li>Price Feature no. 3 for $15/Month</li>
                      </ul>
                    </div>
                    <div className="price-grid-card">
                      <h5>$25/Month</h5>
                      <ul>
                        <li>Price Feature no. 1 for $25/Month</li>
                        <li>Price Feature no. 2 for $25/Month</li>
                        <li>Price Feature no. 3 for $25/Month</li>
                      </ul>
                    </div>
                    <div className="price-grid-card">
                      <h5>$35/Month</h5>
                      <ul>
                        <li>Price Feature no. 1 for $35/Month</li>
                        <li>Price Feature no. 2 for $35/Month</li>
                        <li>Price Feature no. 3 for $35/Month</li>
                      </ul>
                    </div>
                  </div>
                  <a className="button-19" href="#requestademo">
                    Request a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section" id="about">
        {/* <img className="about-img" src={AboutImg} alt="" /> */}
        <div className="box">
          <div className="section-heading">
            <h2 className="ops">About</h2>
          </div>
          <div className="about-grid">
            <div className="about-grid-right">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis non aliquid eius itaque ipsa fuga rem illum
                blanditiis? Nisi molestias ad inventore veritatis aperiam. Optio
                voluptatum, dolorem omnis quos sed, nulla sit quo mollitia minus
                ab explicabo vel! Recusandae placeat ducimus magnam mollitia
                iure illo, accusantium, saepe molestiae nemo, vitae dicta!
                Deleniti beatae perferendis nisi doloremque porro consequuntur
                illum maiores ab qui expedita assumenda explicabo soluta sint
                incidunt, et commodi consectetur obcaecati voluptates eum neque
                accusamus repudiandae velit earum! Quia adipisci distinctio et
                modi culpa asperiores eum reiciendis magnam esse sit ullam,
                commodi beatae, sapiente obcaecati id totam. Dolore, nam.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
                odit? Recusandae, error. Dolores quis eaque, quibusdam maiores
                consequatur optio ipsum quae. Sunt mollitia, nulla eveniet
                possimus labore c simos eum amet aspernatur autem, minus
                distinctio quia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="box">
          <div className="section-heading">
            <h2 className="ops">Contact</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-left">
              <p>BotArmor Technologies</p>
              <p>
                <MdEmail /> botarmortech@gmail.com
              </p>
              <p>
                <MdLocationOn /> 3069 Brighton 1st St, Brooklyn, NY, 11235
              </p>
              <p>
                <MdPhone /> (917) 528 8208
              </p>
              <div className="social-icons-grid">
                <a href="#">
                  <BsTwitter />
                </a>
                <a href="#">
                  <BsInstagram />
                </a>
                <a href="#">
                  <BsLinkedin />
                </a>
              </div>
            </div>
            <form className="contact-right">
              <input type="text" name="" id="" placeholder="Name" />
              <input type="text" name="" id="" placeholder="Email" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </section>
      <section className="demo-section" id="requestademo">
        <img className="wave-img-2" src={WaveImg2} alt="" />
        {/* <img className="section-bg" src={DemoBg} alt="" /> */}
        <div className="box">
          <div className="section-heading">
            <h2 className="ops">Request a Demo</h2>
          </div>
          <div className="demo-grid">
            <div className="demo-img">
              <DemoImg />
              {/* <img src={DemoImgPng} alt="" /> */}
            </div>

            <div className="demo-content">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="Position in Company" />
              <select name="" id="">
                <option value="">Select Service</option>
                <option value="VaultGuard">VaultGuard</option>
                <option value="Armor Bot Manager">Armor Bot Manager</option>
              </select>
              <button className="button-19">Request a Demo</button>
            </div>
          </div>
          <footer>© Copyright 2022 iBotArmor</footer>
        </div>
      </section>
    </main>
  );
};

export default Home;
