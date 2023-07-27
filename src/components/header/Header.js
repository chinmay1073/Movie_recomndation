import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://celebaltech.com/assets/img/celebal.webp" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="https://www.linkedin.com/company/celebaltechnologies/" style={{textDecoration: "none"}}><span>Affiliated By ==></span></Link>
                <Link to="https://www.linkedin.com/in/biswajit-pradhan-679125253" style={{textDecoration: "none"}}><span>(Biswajit)</span></Link>
                <Link to="https://www.linkedin.com/in/rout-chinmay/" style={{textDecoration: "none"}}><span>(Chinmay)</span></Link>
            </div>
        </div>
    )
}

export default Header