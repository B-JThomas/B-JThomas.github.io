import React, { useState } from 'react'
import work1 from '../../assets/Project_img-1.png'
import work5 from '../../assets/Project_img-2.png'
import work3 from '../../assets/work3.jpg'
import work4 from '../../assets/work4.jpg'
import work2 from '../../assets/work5.jpg'
import './portfolio.css';

const Portfolio = () => {
    const [workType, setWorkType] = useState(0)

    const toggleType = (index) => {
        setWorkType(index);
    }

  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">My recent work</span>

        <div className="portfolio_container container grid">
            <div className="portfolio_menu">
                <ul className="portfolio_menu-items grid">
                    <li className={workType === 0 ? "portfolio_menu-item selected" : "portfolio_menu-item"} onClick={() => toggleType(0)}>
                        All
                    </li>
                    <li className={workType === 2 ? "portfolio_menu-item selected" : "portfolio_menu-item"} onClick={() => toggleType(2)}>
                        Web
                    </li>
                    <li className={workType === 3 ? "portfolio_menu-item selected" : "portfolio_menu-item"} onClick={() => toggleType(3)}>
                        App
                    </li>
                    <li className={workType === 5 ? "portfolio_menu-item selected" : "portfolio_menu-item"} onClick={() => toggleType(5)}>
                        Design
                    </li>
                </ul>
            </div>
            <div className="portfolio_projects container grid">
                <div className= {workType % 2 === 0 ? "portfolio_project active" : "portfolio_project"}>
                    <img className="portfolio_project-img" src={work1} alt="Portfolio img" />
                    <h3 className="portfolio_project-title" >Smart Gadgets - Eccomerce</h3>
                    <div className="portfolio_project-data">
                        <a 
                        href='https://smartgadgets.com.au/' 
                        target='_blank'
                        rel="noreferrer" >
                            See More
                        </a>
                        <i className="uil uil-arrow-right portfolio_project-icon"></i>
                    </div>
                </div>
                <div className= {workType % 5 === 0 ? "portfolio_project active" : "portfolio_project"}>
                    <img className="portfolio_project-img" src={work5} alt="Portfolio img" />
                    <h3 className="portfolio_project-title" >Lemuse - Design Web Presence</h3>
                    <div className="portfolio_project-data">
                        <a 
                        href='https://www.lemuse.com.au/' 
                        target='_blank'
                        rel="noreferrer" >
                            See More
                        </a>
                        <i className="uil uil-arrow-right portfolio_project-icon"></i>
                    </div>
                </div>
                <div className="portfolio_project active">
                    <img className="portfolio_project-img" src={work2} alt="Portfolio img" />
                    <h3 className="portfolio_project-title" >Project Name(All)</h3>
                    <div className="portfolio_project-data">
                        <p>See More</p>
                        <i className="uil uil-arrow-right portfolio_project-icon"></i>
                    </div>
                </div>
                <div className= {workType % 3 === 0 ? "portfolio_project active" : "portfolio_project"}>
                    <img className="portfolio_project-img" src={work4} alt="Portfolio img" />
                    <h3 className="portfolio_project-title" >Project Name(App)</h3>
                    <div className="portfolio_project-data">
                        <p>See More</p>
                        <i className="uil uil-arrow-right portfolio_project-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio

