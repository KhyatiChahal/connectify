import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();
    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Connectify</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => router("/aljk23")} className="nav-guest">
                        Join as Guest
                    </p>
                    <p onClick={() => router("/auth")} className="nav-register">
                        Register
                    </p>
                    <div 
                        onClick={() => router("/auth")} 
                        role='button' 
                        className="nav-login"
                    >
                        Login
                    </div>
                </div>
            </nav>
            <div className="landingMainContainer">
                <div className="landing-text">
                    <h1>
                        <span className="highlight">Connect</span> with 
                        your Loved Ones
                    </h1>
                    <p className="subheadline">
                        Bridge distances with Connectify
                    </p>
                    <div role='button' className="cta-button">
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div className="landing-image">
                    <img 
                        src="/mobile.png" 
                        alt="Connectify Video Call Interface" 
                    />
                </div>
            </div>
        </div>
    )
}