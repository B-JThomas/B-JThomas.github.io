import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Footer</h1>
            
            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>
                <li>
                    <a href="#services" className="footer_link">Services</a>
                </li>
            </ul>

            <div className="footer_social">
                <a 
                    href="https://github.com/B-JThomas" 
                    className="footer_social-link" 
                    target='_blank'
                    rel="noreferrer"
                >
                    <i class="uil uil-github-alt"></i>
                </a>

                <a 
                    href="https://www.linkedin.com/in/bailey-thomas-394802248/" 
                    className="footer_social-link" 
                    target='_blank'
                    rel="noreferrer"
                >
                    <i class="uil uil-linkedin"></i>
                </a>

                <a 
                    href="https://www.facebook.com/bailey.thomas.10297701" 
                    className="footer_social-link" 
                    target='_blank'
                    rel="noreferrer"
                >
                    <i class="uil uil-facebook-f"></i>
                </a>
            </div>

            <span className="footer_copy">
                &#169; BT Dev. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
