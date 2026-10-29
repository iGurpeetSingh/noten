import React from 'react'
import img_zoisTR9ELQk5uJIQQbsFSO4Cak from '../assets/images/zoisTR9ELQk5uJIQQbsFSO4Cak.png'

export default function Hero() {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <div className="born-on-container">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="hero-icon">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          <div className="dash-line"></div>
          <h2 className="born-text font-display">BORN ON<span className="text-neon">"</span></h2>
        </div>

        <h1 className="minted-title font-display">MINTED</h1>
        <p className="hero-subtitle">Streetwear vibes into web3 culture</p>
      </div>

      <div className="character-container">
        <div className="character-model">
          <img src={img_zoisTR9ELQk5uJIQQbsFSO4Cak} alt="3D Robot Character" />
        </div>
      </div>

      <div className="float-coin-1">
        <div className="coin-orange">
          <div className="coin-inner"></div>
        </div>
      </div>

      <div className="float-coin-2">
        <div className="coin-black">
          <div className="coin-inner"></div>
        </div>
      </div>

      <div className="left-details">
        <div className="minted-desc">
          <p>Minted with<br />purposeborn through<br />manifold's creative<br />power</p>
        </div>

        <div className="circular-text-container">
          <svg className="star" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2 10 10 2-10 2-2 10-2-10-10-2 10-2 2-10z" />
          </svg>
          <svg className="text-ring" viewBox="0 0 100 100">
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
            <text fontSize="12" fontFamily="Space Grotesk" fontWeight="bold" letterSpacing="2">
              <textPath href="#circlePath" startOffset="0%">Join now - Join now - Join now -</textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="right-details">
        <div className="video-card">
          <div className="video-thumb">
            <div className="video-overlay"></div>
            <div className="play-btn-wrapper">
              <div className="play-btn">
                <div className="play-triangle"></div>
              </div>
            </div>
          </div>
          <div className="video-title-row">
            <span className="video-title">Intro Video</span>
            <div className="video-line"></div>
          </div>
        </div>

        <div className="scroll-down">
          <div className="scroll-bars">
            <div className="scroll-bar"></div>
            <div className="scroll-bar"></div>
            <div className="scroll-bar"></div>
          </div>
          Scroll Down
        </div>
      </div>

      <div className="radar-1"></div>
      <div className="radar-2"></div>
      <div className="radar-text">001</div>
    </main>
  )
}
