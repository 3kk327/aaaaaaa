import React from "react"
import img1 from '../Images/logo.svg'
import img2 from '../Images/calculation.svg'
import img3 from '../Images/measering.svg'
import styles from './Nav.module.css'
import { Route,Routes,Link } from "react-router-dom"

function Nav(){
    return(
        
        <header className = {styles.Head_style}>
            <img src={img1}/>
            <div className = {styles.atribute}>
                <Link className = {styles.a_href} to="/Services">Services</Link>
                <Link className = {styles.a_href} to="/Products">Products</Link>
                <Link className = {styles.a_href} to="/About">About us</Link>
                <Link className = {styles.a_href} to="/Portfolio">Portfolio</Link>
                <Link className = {styles.a_href} to="/FAQ">FAQ</Link>
                <Link className = {styles.a_href} to="/Contacts">Contacts</Link>
            </div>
            <div className = {styles.buttons}>
                <button className={styles.button2}><img src={img3}/> <div>Make Request</div></button>
                <button className={styles.button1}><img src={img2}/> <div>Calculate</div></button>            
            </div>
        </header>
        
    )
}

export default Nav;