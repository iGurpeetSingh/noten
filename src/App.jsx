import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import './App.css'
import img_0KLRMA5ElB1w15YFnVeQgO29is from './assets/images/0KLRMA5ElB1w15YFnVeQgO29is.png'
import img_2SU84K9DxqiXK0Cmoe9VHZsqqs from './assets/images/2SU84K9DxqiXK0Cmoe9VHZsqqs.png'
import img_2xgLVmeAzmhRhrKQhVATWAXBzQ8 from './assets/images/2xgLVmeAzmhRhrKQhVATWAXBzQ8.png'
import img_3qaedS7urrkN5pr60baprOoHP0 from './assets/images/3qaedS7urrkN5pr60baprOoHP0.png'
import img_7GnEAO11ZZ58L4QlNz6PVRGaTNU from './assets/images/7GnEAO11ZZ58L4QlNz6PVRGaTNU.png'
import img_fcNo6GOh3jXbzgAvmSu9eRvC7xs from './assets/images/fcNo6GOh3jXbzgAvmSu9eRvC7xs.png'
import img_Fmxcx55yE3wdb6PyP0pvX4jsQ from './assets/images/Fmxcx55yE3wdb6PyP0pvX4jsQ.png'
import img_GGoePBNI2uhkMYmYswfqrIVz8 from './assets/images/GGoePBNI2uhkMYmYswfqrIVz8.png'
import img_k267ut6psrOdVqxn6Q4POPhHVq4 from './assets/images/k267ut6psrOdVqxn6Q4POPhHVq4.png'
import img_KvBEayUpYp7M8eosMvsUa7dI90 from './assets/images/KvBEayUpYp7M8eosMvsUa7dI90.png'
import img_LQO4vk1FSLHots9OPREQs5Ux57o from './assets/images/LQO4vk1FSLHots9OPREQs5Ux57o.png'
import img_nfG6lqJSoNeFRGwozoOj3WMAU from './assets/images/nfG6lqJSoNeFRGwozoOj3WMAU.png'
import img_oqukidx4cglvHyPcwveD4bukfyc from './assets/images/oqukidx4cglvHyPcwveD4bukfyc.png'
import img_oVbPZWaIsgOrKoRftop1hJFKZs from './assets/images/oVbPZWaIsgOrKoRftop1hJFKZs.png'
import img_QpdIoAxyPQ1aks4N4zeNjLjNFzc from './assets/images/QpdIoAxyPQ1aks4N4zeNjLjNFzc.png'
import img_SC21JveQyRdppvUZThHFO9m848g from './assets/images/SC21JveQyRdppvUZThHFO9m848g.png'
import img_U3qBIebNC1p7GyOvy8bfJSv6U from './assets/images/U3qBIebNC1p7GyOvy8bfJSv6U.png'
import img_vF33kAYTZdKf2AxesMNhqM4Hbg from './assets/images/vF33kAYTZdKf2AxesMNhqM4Hbg.png'
import img_Vs0YXGvyY3Z2ajOevkWFDDU from './assets/images/Vs0YXGvyY3Z2ajOevkWFDDU.png'
import img_vvmtsWS2lVR6mA0g9Zlxqcroxlo from './assets/images/vvmtsWS2lVR6mA0g9Zlxqcroxlo.png'
import img_YcIIgSjWOe6rH7P7Fu2OdcfMC4 from './assets/images/YcIIgSjWOe6rH7P7Fu2OdcfMC4.png'
import img_ZMyq6TDGOMi5gGdG2ctuWCpduN8 from './assets/images/ZMyq6TDGOMi5gGdG2ctuWCpduN8.png'
import img_zWrwOrTYyU9d0ERSUUI3SdXCkqY from './assets/images/zWrwOrTYyU9d0ERSUUI3SdXCkqY.png'

export default function App() {
  useEffect(() => {
    // Accordion behavior
    const items = document.querySelectorAll('.accordion-item')
    items.forEach((item) => {
      const btn = item.querySelector('.accordion-btn')
      const content = item.querySelector('.accordion-content')
      const icon = item.querySelector('.accordion-icon')
      const closeItem = () => {
        item.classList.remove('active')
        if (btn) btn.setAttribute('aria-expanded', 'false')
        if (icon) icon.textContent = '+'
        if (content) content.style.maxHeight = null
      }
      const openItem = () => {
        items.forEach((other) => {
          const oBtn = other.querySelector('.accordion-btn')
          const oContent = other.querySelector('.accordion-content')
          const oIcon = other.querySelector('.accordion-icon')
          other.classList.remove('active')
          if (oBtn) oBtn.setAttribute('aria-expanded', 'false')
          if (oIcon) oIcon.textContent = '+'
          if (oContent) oContent.style.maxHeight = null
        })
        item.classList.add('active')
        if (btn) btn.setAttribute('aria-expanded', 'true')
        if (icon) icon.textContent = '-'
        if (content) content.style.maxHeight = content.scrollHeight + 'px'
      }
      if (btn) {
        btn.addEventListener('click', () => {
          if (item.classList.contains('active')) closeItem()
          else openItem()
        })
      }
    })
    const active = document.querySelector('.accordion-item.active')
    if (active) {
      const c = active.querySelector('.accordion-content')
      if (c) c.style.maxHeight = c.scrollHeight + 'px'
    }
  }, [])

  return (
    <>
      <div className="bg-lines"></div>
      <Navbar />
      <Hero />

      {/* SECTION 2: WHAT IS NOTEN */}
      <div className="noten-wrapper">
        <section className="noten-section">
          <div className="header-tag">
            <span className="dash"></span> WHAT IS NOTEN
          </div>
          <img src={img_QpdIoAxyPQ1aks4N4zeNjLjNFzc} alt="Cube" className="floating-element cube-icon" />
          <img src={img_SC21JveQyRdppvUZThHFO9m848g} alt="Gem" className="floating-element gem-icon" />
          <div className="content-wrapper">
            <h1 className="main-text">
              BEYOND <img src={img_Vs0YXGvyY3Z2ajOevkWFDDU} className="inline-icon inline-anim" alt="robot" /> POSSESSION <br />
              INTO IDENTITY <img src={img_GGoePBNI2uhkMYmYswfqrIVz8} className="inline-icon inline-anim" alt="coin" /> MINT THE <br />
              <img src={img_oqukidx4cglvHyPcwveD4bukfyc} className="inline-icon inline-anim" alt="cube" /> FUTURE OF DIGITAL <br />
              FASHION <img src={img_7GnEAO11ZZ58L4QlNz6PVRGaTNU} className="inline-icon inline-anim" alt="plus" /> WITH NOTEN
            </h1>
          </div>
        </section>
      </div>

      {/* SECTION 3: CHARACTER ART WORK */}
      <div className="artwork-wrapper">
        <section className="artwork-section">
          <div className="header-tag artwork-tag">
            <span className="dash"></span> CHARACTER
          </div>
          <h2 className="section-title font-display">ART WORK</h2>
          <div className="art-grid">
            <div className="art-card bg-green">
              <img src={img_vvmtsWS2lVR6mA0g9Zlxqcroxlo} alt="Character 1" />
              <div className="art-info">
                <div className="info-left"><span>ALEX</span><br /><span>TOM</span></div>
                <div className="info-right"><span className="label">BUY FOR</span><br /><span className="price">0.065 ETH</span></div>
              </div>
            </div>
            <div className="art-card bg-yellow">
              <img src={img_Fmxcx55yE3wdb6PyP0pvX4jsQ} alt="Character 2" />
              <div className="art-info">
                <div className="info-left"><span>CYBER</span><br /><span>PUNK</span></div>
                <div className="info-right"><span className="label">BUY FOR</span><br /><span className="price">0.075 ETH</span></div>
              </div>
            </div>
            <div className="art-card bg-green">
              <img src={img_2xgLVmeAzmhRhrKQhVATWAXBzQ8} alt="Character 3" />
              <div className="art-info">
                <div className="info-left"><span>NEON</span><br /><span>BOY</span></div>
                <div className="info-right"><span className="label">BUY FOR</span><br /><span className="price">0.080 ETH</span></div>
              </div>
            </div>
            <div className="art-card bg-green">
              <img src={img_zWrwOrTYyU9d0ERSUUI3SdXCkqY} alt="Character 4" />
              <div className="art-info">
                <div className="info-left"><span>VR</span><br /><span>GHOST</span></div>
                <div className="info-right"><span className="label">BUY FOR</span><br /><span className="price">0.055 ETH</span></div>
              </div>
            </div>
            <div className="art-card bg-yellow">
              <img src={img_ZMyq6TDGOMi5gGdG2ctuWCpduN8} alt="Character 5" />
              <div className="art-info">
                <div className="info-left"><span>SCUBA</span><br /><span>DIVER</span></div>
                <div className="info-right"><span className="label">BUY FOR</span><br /><span className="price">0.090 ETH</span></div>
              </div>
            </div>
            <div className="art-card bg-green">
              <img src={img_k267ut6psrOdVqxn6Q4POPhHVq4} alt="Character 6" />
              <div className="art-info">
                <div className="info-left"><span>DEVIL</span><br /><span>RED</span></div>
                <div className="info-right"><span className="label">BUY FOR</span><br /><span className="price">0.100 ETH</span></div>
              </div>
            </div>
          </div>
          <button className="btn-more">MORE COLLECTION +</button>
        </section>
      </div>

      {/* SECTION 4: ROADMAP */}
      <section className="roadmap-section">
        <div className="roadmap-container">
          <div className="roadmap-left">
            <div className="header-tag"><span className="dash"></span> ROADMAP</div>
            <h2 className="roadmap-title font-display">MINTING<br />TIMELINE</h2>
            <p className="roadmap-desc">STEP BY STEP, THE PROJECT<br />EVOLVES TOWARD MINT DAY AND ITS<br />TRUE WEB3 IDENTITY</p>
          </div>
          <div className="roadmap-right">
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="timeline-icon-box"><img src={img_0KLRMA5ElB1w15YFnVeQgO29is} alt="Origin" /></div>
              <div className="timeline-content"><h3 className="font-display">ORIGIN</h3><p>THE STORY BEGINS — CONCEPT AND<br />IDENTITY REVEALED.</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon-box"><img src={img_2SU84K9DxqiXK0Cmoe9VHZsqqs} alt="Genesis" /></div>
              <div className="timeline-content"><h3 className="font-display">GENESIS</h3><p>CHARACTER COMES ALIVE ON THE<br />BLOCKCHAIN.</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon-box"><img src={img_nfG6lqJSoNeFRGwozoOj3WMAU} alt="Awakening" /></div>
              <div className="timeline-content"><h3 className="font-display">AWAKENING</h3><p>COMMUNITY ENTERS THE WORLD<br />EXCLUSIVE ACCESS UNLOCKED.</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon-box"><img src={img_3qaedS7urrkN5pr60baprOoHP0} alt="Evolution" /></div>
              <div className="timeline-content"><h3 className="font-display">EVOLUTION</h3><p>NEW FORMS, COLLABORATIONS, AND<br />FUTURE DROPS UNFOLD.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURES */}
      <section className="features-section">
        <div className="glow-bg2"></div>
        <div className="glow-bg glow-yellow"></div>
        <div className="features-container">
          <div className="header-tag"><span className="dash"></span> FEATURES</div>
          <h2 className="features-title font-display">THE WEB3<br />BRAND ENGINE</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><img src={img_fcNo6GOh3jXbzgAvmSu9eRvC7xs} alt="Tokenize Icon" /></div>
              <div className="feature-text"><h3 className="font-display">TOKENIZE</h3><p>TURN ART AND IDEAS INTO<br />BLOCKCHAIN TOKENS.</p></div>
            </div>
            <div className="feature-card card-reverse">
              <div className="feature-text"><h3 className="font-display">COLLABORATE</h3><p>LINK CREATORS, BRANDS, AND<br />COMMUNITIES.</p></div>
              <div className="feature-icon"><img src={img_fcNo6GOh3jXbzgAvmSu9eRvC7xs} alt="Collaborate Icon" /></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><img src={img_YcIIgSjWOe6rH7P7Fu2OdcfMC4} alt="Evolve Icon" /></div>
              <div className="feature-text"><h3 className="font-display">EVOLVE</h3><p>ELEVATE YOUR PRESENCE<br />IN THE WEB3 WORLD.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR TEAM */}
      <section className="team-section">
        <div className="team-container">
          <div className="header-tag team-tag"><span className="dash"></span> OUR TEAM</div>
          <h2 className="team-title font-display">MEET THE<br />SQUAD</h2>
          <div className="team-cards-wrapper">
            <div className="team-card card-1">
              <div className="team-img-box bg-yellow">
                <img src={img_oVbPZWaIsgOrKoRftop1hJFKZs} alt="Suho" />
                <div className="team-socials"><span className="social-icon">??</span><span className="social-icon">in</span></div>
              </div>
              <div className="team-info"><h4>SUHO</h4><p>DIGITAL ARTIST</p></div>
            </div>
            <div className="team-card card-2">
              <div className="team-img-box bg-green">
                <img src={img_LQO4vk1FSLHots9OPREQs5Ux57o} alt="Yubico" />
                <div className="team-socials"><span className="social-icon">??</span><span className="social-icon">in</span></div>
              </div>
              <div className="team-info"><h4>YUBICO</h4><p>GRAPHIC DESIGN</p></div>
            </div>
            <div className="team-card card-3">
              <div className="team-img-box bg-yellow">
                <img src={img_U3qBIebNC1p7GyOvy8bfJSv6U} alt="Bazos" />
                <div className="team-socials"><span className="social-icon">??</span><span className="social-icon">in</span></div>
              </div>
              <div className="team-info"><h4>BAZOS</h4><p>LOGO & BRANDING</p></div>
            </div>
            <div className="team-card card-4">
              <div className="team-img-box bg-green">
                <img src={img_vF33kAYTZdKf2AxesMNhqM4Hbg} alt="Andre" />
                <div className="team-socials"><span className="social-icon">??</span><span className="social-icon">in</span></div>
              </div>
              <div className="team-info"><h4>ANDRE</h4><p>WEB DESIGN</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
            <div className="header-tag"><span className="dash"></span> COMMON QUESTIONS</div>
            <h2 className="faq-title font-display">THE FACTS</h2>
            <div className="accordion">
              <div className="accordion-item">
                <button className="accordion-btn" type="button" aria-expanded="false"><span className="accordion-text font-display">WHAT ARE NFTS AND HOW DO THEY WORK?</span><span className="accordion-icon">+</span></button>
                <div className="accordion-content"><p>NFTs (Non-Fungible Tokens) are unique digital assets verified on a blockchain. They represent ownership of a specific item such as digital art, music, collectibles, or virtual goods.</p></div>
              </div>
              <div className="accordion-item active">
                <button className="accordion-btn" type="button" aria-expanded="true"><span className="accordion-text font-display">HOW CAN I PURCHASE ONE OF YOUR NFTS?</span><span className="accordion-icon">-</span></button>
                <div className="accordion-content"><p>You can purchase one of our NFTs directly through our marketplace using a supported crypto wallet. Connect your wallet, browse the collection, and complete the transaction securely in just a few clicks.</p></div>
              </div>
              <div className="accordion-item">
                <button className="accordion-btn" type="button" aria-expanded="false"><span className="accordion-text font-display">WHAT IS THE STORY BEHIND YOUR COLLECTION?</span><span className="accordion-icon">+</span></button>
                <div className="accordion-content"><p>Our collection merges streetwear culture with web3 identity, creating a unique digital persona for every holder in the metaverse.</p></div>
              </div>
              <div className="accordion-item">
                <button className="accordion-btn" type="button" aria-expanded="false"><span className="accordion-text font-display">WHAT ARE THE BENEFITS OF BEING A HOLDER?</span><span className="accordion-icon">+</span></button>
                <div className="accordion-content"><p>Holders receive access to future drops, exclusive community events, special merchandise, and voting rights through our shared ecosystem.</p></div>
              </div>
              <div className="accordion-item">
                <button className="accordion-btn" type="button" aria-expanded="false"><span className="accordion-text font-display">WAS AI USED TO CREATE THE ART?</span><span className="accordion-icon">+</span></button>
                <div className="accordion-content"><p>All pieces are carefully crafted by our in-house designers and 3D artists to keep every drop authentic, refined, and highly collectible.</p></div>
              </div>
            </div>
          </div>
          <div className="faq-right">
            <div className="faq-image-wrapper">
              <div className="circle-backdrop"></div>
              <img className="faq-character" src={img_KvBEayUpYp7M8eosMvsUa7dI90} alt="VR character" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: JOIN THE COMMUNITY */}
      <section className="community-full-section">
        <div className="glow-spot glow-bottom-left"></div>
        <div className="glow-spot glow-top-right"></div>
        <div className="line-animation-container">
          <svg className="animated-svg-lines" viewBox="0 0 248 179" preserveAspectRatio="none">
            <path d="M 188.126 167.588 C 209.573 175.268 225.169 176.324 230.42 168.996 C 241.855 153.04 199.962 103.387 136.855 58.092 C 73.748 12.797 13.314 -10.993 1.88 4.963 C -3.491 12.461 2.908 27.395 17.747 45.822" fill="transparent" stroke="#b1ff32" strokeWidth="1.5" strokeDasharray="250 100" strokeLinecap="round" transform="translate(0 -4.918)" />
            <path d="M 188.772 167.813 C 209.886 175.284 225.224 176.247 230.425 168.992 C 241.859 153.037 199.967 103.384 136.86 58.089 C 73.752 12.794 13.319 -10.992 1.881 4.963 C -3.39 12.318 2.669 26.827 16.909 44.775 C 17.187 45.123 17.964 46.155 18.246 46.503" fill="transparent" stroke="#b1ff32" strokeWidth="1.5" strokeDasharray="250 100" strokeLinecap="round" transform="translate(8.59 -20.14)" />
          </svg>
        </div>
        <svg className="shape-cube" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#00f2fe" /><stop offset="100%" stopColor="#38f9d7" /></linearGradient>
            <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#eaff2b" /><stop offset="100%" stopColor="#b1ff32" /></linearGradient>
            <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#8b00ff" /><stop offset="100%" stopColor="#3b00ff" /></linearGradient>
          </defs>
          <polygon points="50,15 85,32 50,50 15,32" fill="url(#cubeTop)" />
          <polygon points="15,32 50,50 50,85 15,67" fill="url(#cubeLeft)" />
          <polygon points="50,50 85,32 85,67 50,85" fill="url(#cubeRight)" />
        </svg>
        <svg className="shape-ring" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ringDepth" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#123B9B" /><stop offset="100%" stopColor="#5B247A" /></linearGradient>
            <linearGradient id="ringFace" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#b1ff32" /><stop offset="50%" stopColor="#00f2fe" /><stop offset="100%" stopColor="#8b00ff" /></linearGradient>
          </defs>
          <g fill="url(#ringDepth)" fillRule="evenodd">
            <path d="M 60 15 A 35 45 0 1 0 60 105 A 35 45 0 1 0 60 15 Z M 60 35 A 15 25 0 1 1 60 85 A 15 25 0 1 1 60 35 Z" transform="translate(-2, 2)" />
            <path d="M 60 15 A 35 45 0 1 0 60 105 A 35 45 0 1 0 60 15 Z M 60 35 A 15 25 0 1 1 60 85 A 15 25 0 1 1 60 35 Z" transform="translate(-4, 4)" />
            <path d="M 60 15 A 35 45 0 1 0 60 105 A 35 45 0 1 0 60 15 Z M 60 35 A 15 25 0 1 1 60 85 A 15 25 0 1 1 60 35 Z" transform="translate(-6, 6)" />
            <path d="M 60 15 A 35 45 0 1 0 60 105 A 35 45 0 1 0 60 15 Z M 60 35 A 15 25 0 1 1 60 85 A 15 25 0 1 1 60 35 Z" transform="translate(-8, 8)" />
            <path d="M 60 15 A 35 45 0 1 0 60 105 A 35 45 0 1 0 60 15 Z M 60 35 A 15 25 0 1 1 60 85 A 15 25 0 1 1 60 35 Z" transform="translate(-10, 10)" />
          </g>
          <path d="M 60 15 A 35 45 0 1 0 60 105 A 35 45 0 1 0 60 15 Z M 60 35 A 15 25 0 1 1 60 85 A 15 25 0 1 1 60 35 Z" fill="url(#ringFace)" fillRule="evenodd" />
        </svg>
        <div className="community-content">
          <h2 className="community-title font-display">JOIN THE<br />COMMUNITY</h2>
          <p className="community-subtitle">STEP INSIDE THE HUB WHERE ART, CULTURE,<br />AND BLOCKCHAIN COLLIDE</p>
          <div className="community-buttons">
            <button className="btn-discord">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
              JOIN DISCORD
            </button>
            <button className="btn-twitter">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              JOIN TWITTER
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9: FOOTER */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-links-grid">
            <div className="footer-col">
              <h3 className="font-display">COMPANY</h3>
              <ul className="footer-nav">
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">CAREERS</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">BLOG DETAILS</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="font-display">RESOURCES</h3>
              <ul className="footer-nav">
                <li><a href="#">TEAM</a></li>
                <li><a href="#">DISCOVER</a></li>
                <li><a href="#">PRIVACY POLICY</a></li>
                <li><a href="#">TERMS & CONDITIONS</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="font-display">FOLLOW US</h3>
              <ul className="footer-nav">
                <li><a href="#"><svg className="social-mini-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> TWITTER (X)</a></li>
                <li><a href="#"><svg className="social-mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> INSTAGRAM</a></li>
                <li><a href="#"><svg className="social-mini-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/></svg> THREADS</a></li>
                <li><a href="#"><svg className="social-mini-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.509 1.183-.849 2.822-1.4 4.618-1.488l.899-4.205c.03-.15.161-.26.314-.271l3.19-.647zm-5.118 7.37c-1.328 0-2.404 1.076-2.404 2.404 0 1.327 1.076 2.404 2.404 2.404 1.327 0 2.404-1.077 2.404-2.404 0-1.328-1.077-2.404-2.404-2.404zm3.873 2.145c-.244 0-.442.198-.442.442 0 .245.198.443.442.443.245 0 .443-.198.443-.443 0-.244-.198-.442-.443-.442zm-7.746 0c-.245 0-.443.198-.443.442 0 .245.198.443.443.443.244 0 .442-.198.442-.443 0-.244-.198-.442-.442-.442zm3.873 3.39c-1.42 0-2.613-.642-2.92-1.503-.024-.067-.091-.106-.16-.094-.069.012-.116.074-.114.143.033 1.05 1.455 1.83 3.194 1.83 1.74 0 3.161-.78 3.194-1.83.002-.069-.045-.131-.114-.143-.069-.012-.136.027-.16.094-.307.861-1.5 1.503-2.92 1.503z"/></svg> REDDIT</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <div className="footer-big-logo">
              <div className="logo-composite">
                <div className="logo-n-shape"></div>
                <span className="logo-text-oten">oten</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
