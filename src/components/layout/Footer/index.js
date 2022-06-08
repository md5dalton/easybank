import React from 'react'
import CTAButton from '../../UI/CTAButton'
import Logo from '../../UI/Logo'

import './styles.sass'

const socialLinks = [
    "facebook",
    "youtube",
    "twitter",
    "pinterest",
    "instagram"
]

export default () => (
    <footer>
        <div className="container">
            <div className="left-wrapper">
                <div className="logo-and-icons">
                    <Logo color="#fff" />
                    <div className="social-links">{socialLinks.map((item, index) => (
                        <img key={index} src={`images/icon-${item}.svg`} alt={item} />
                    ))}</div>
                </div>
                <div className="site-map">
                    <a href="#">about us</a>
                    <a href="#">contact</a>
                    <a href="#">blog</a>
                    <a href="#">careers</a>
                    <a href="#">support</a>
                    <a href="#">privacy policy</a>
                </div>
            </div>
            <div className="right-wrapper">
                <CTAButton />
                <div className="copyright">© Easybank. All Rights Reserved</div>
            </div>
        </div>
    </footer>
)