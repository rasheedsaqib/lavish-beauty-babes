import {useState} from "react";

import styles from './navbar.module.scss';
import withWidth from "../../HOC/withWidth/withWidth";
import Link from "next/link";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return(
        <div className={toggle ? styles.nav + ' ' + styles.navActive : styles.nav}>
            <div className={styles.logo}><Link href='/'><a><img src='/logo.png' /></a></Link></div>

            <span onClick={()=>setToggle(!toggle)} className={styles.hamburger}>{toggle ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}  </span>

            <div className={styles.logo2}><Link href='/'><a><img src='/logo.png' /></a></Link></div>

            <ul>
                <li onClick={()=>setToggle(false)}>
                    <Link href='/'><a>Lips</a></Link>
                </li>

                <li onClick={()=>setToggle(false)}>
                    <Link href='/'><a>Eyes</a></Link>
                </li>

                <li onClick={()=>setToggle(false)}>
                    <Link href='/'><a>Face</a></Link>
                </li>

                <li onClick={()=>setToggle(false)}>
                    <Link href='/'><a>Skincare</a></Link>
                </li>

                <li onClick={()=>setToggle(false)}>
                    <Link href='/'><a>Sportswear</a></Link>
                </li>

                <li onClick={()=>setToggle(false)}>
                    <Link href='/'><a>Contact</a></Link>
                </li>
            </ul>

            <div className={styles.account}>
                <span> <i className="fas fa-search" /> </span>
                <div className={styles.cart}>
                    <span className={styles.icon}> <i className="fas fa-shopping-cart" /> </span>
                    <p className={styles.total}> 5 </p>
                </div>
                {/*<div className={styles.dp} style={{backgroundImage: 'url("/dp.jpg")'}} />*/}
            </div>
        </div>
    )
}

export default withWidth(Navbar, '#F366AF');