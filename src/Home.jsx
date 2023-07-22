import React from "react";
import "./style.css";
import Logo1 from "./assets/img/logo-2.png";
import HeroImg1 from "./assets/img/hero-img-8.jpg";
import HeroCardImg1 from "./assets/img/hero-card-1.png";
import HeroCardImg2 from "./assets/img/hero-card-2.png";
import HeroCardImg3 from "./assets/img/hero-card-3.png";
import HeroCardImg4 from "./assets/img/hero-card-4.png";
import ServiceImg1 from "./assets/img/service-img-1.jpg";
import ServiceImg2 from "./assets/img/service-img-2.jpg";
import AboutImg from "./assets/img/about-img.jpg";
import TelephoneImg from "./assets/img/telephone.png";
import EmailImg from "./assets/img/email.png";
import LocationImg from "./assets/img/location.png";
import SectionBg from "./assets/img/hero-img-3.jpg";
import BgImg from "./assets/img/bg.jpg";

const Home = () => {
  return (
    <main className="ibotarmor">
      <img className="bg-img" src={BgImg} alt="" />
      <header>
        <div className="box">
          <div className="header-content">
            <img src={Logo1} alt="" />
            <div className="header-links">
              <a href="">Home</a>
              <a href="">Services</a>
              <a href="">About Us</a>
              <a href="">Contact</a>
              <button>Request a Demo</button>
            </div>
          </div>
        </div>
      </header>
      <section className="hero-section">
        <img className="hero-img" src={HeroImg1} alt="" />
        <div className="hero-blade"></div>
        <div className="box">
          <div className="hero-content">
            <h1 className="ops">
              Shielding Your <br /> Cyber Space<span className="ops">.</span>
            </h1>
            <div className="hero-grid">
              <div className="hero-grid-card">
                <img src={HeroCardImg1} alt="" />
                <h3>Advanced Bot Detection.</h3>
                <p>
                  Our service utilizes state-of-the-art algorithms to identify
                  and block malicious bots, ensuring a safe browsing experience
                  for your users.
                </p>
              </div>
              <div className="hero-grid-card">
                <img src={HeroCardImg2} alt="" />
                <h3>Real-time Threat Monitering.</h3>
                <p>
                  We constantly monitor and analyze bot activity to stay one
                  step ahead, adapting our security measures to counter evolving
                  threats.
                </p>
              </div>
              <div className="hero-grid-card">
                <img src={HeroCardImg3} alt="" />
                <h3>Robust Bot Protection.</h3>
                <p>
                  Our solution offers comprehensive protection against a wide
                  range of bot attacks, including credential stuffing, scraping,
                  and automated account creation.
                </p>
              </div>
              <div className="hero-grid-card">
                <img src={HeroCardImg4} alt="" />
                <h3>Easy Integration.</h3>
                <p>
                  Integrating our anti-bot service is simple and hassle-free,
                  with flexible options to fit your existing infrastructure and
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="box">
          <h2 className="ops">Services</h2>
          <div className="services-content">
            <div className="services-grid">
              <div className="services-grid-card">
                <div className="services-img">
                  <img src={ServiceImg1} alt="" />
                </div>
                <div className="services-content">
                  <h3>VaultGuard</h3>
                  <p>
                    VaultGuard by BotArmor Technologies provides an innovative
                    anti-bot service, using dual approaches. It ensures optimal
                    user experiences by protecting login pages, payment
                    information and user accounts while offering secure
                    protection from bot threats and data breaches while
                    upholding user trust and satisfaction on platforms. With
                    advanced algorithms and machine learning to safeguard these
                    resources from bot attacks or data breaches.
                  </p>
                  <ul>
                    <li>Vulnerability Assessments and Penetration Testing</li>
                    <li>Managed Security Services:</li>
                    <li>Firewall and Intrusion Detection/Prevention Systems</li>
                    <li>Endpoint Protection</li>
                    <li>Data Encryption and Secure Communication</li>
                  </ul>
                  <div className="price-grid">
                    <h5>$15/Month</h5>
                    <h5>$25/Month</h5>
                    <h5>$35/Month</h5>
                  </div>
                  <button>Request a Demo</button>
                </div>
              </div>
              <div className="services-grid-card">
                <div className="services-img">
                  <img src={ServiceImg2} alt="" />
                </div>
                <div className="services-content">
                  <h3>Armor Bot Manager</h3>
                  <p>
                    VaultGuard by BotArmor Technologies provides an innovative
                    anti-bot service, using dual approaches. It ensures optimal
                    user experiences by protecting login pages, payment
                    information and user accounts while offering secure
                    protection from bot threats and data breaches while
                    upholding user trust and satisfaction on platforms. With
                    advanced algorithms and machine learning to safeguard these
                    resources from bot attacks or data breaches.
                  </p>
                  <ul>
                    <li>Vulnerability Assessments and Penetration Testing</li>
                    <li>Managed Security Services:</li>
                    <li>Firewall and Intrusion Detection/Prevention Systems</li>
                    <li>Endpoint Protection</li>
                    <li>Data Encryption and Secure Communication</li>
                  </ul>
                  <div className="price-grid">
                    <h5>$15/Month</h5>
                    <h5>$25/Month</h5>
                    <h5>$35/Month</h5>
                  </div>
                  <button>Request a Demo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="box">
          <h2 className="ops">About Us</h2>
          <div className="about-grid">
            <div className="about-grid-left">
              <img src={AboutImg} alt="" />
            </div>
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
      <section className="contact-section">
        <div className="box">
          <h2 className="ops">Contact</h2>
          <div className="contact-grid">
            <div className="contact-left">
              <p>BotArmor Technologies</p>
              <p>
                <img src={EmailImg} alt="" /> botarmortech@gmail.com
              </p>
              <p>
                <img src={LocationImg} alt="" /> 3069 Brighton 1st St, Brooklyn,
                NY, 11235
              </p>
              <p>
                <img src={TelephoneImg} alt="" /> (917) 528 8208
              </p>
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
      <section className="demo-section">
        <img className="section-bg" src={SectionBg} alt="" />
        <div className="box">
          <h2 className="ops">Request a Demo</h2>
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
            <button>Request a Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;