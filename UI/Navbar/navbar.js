import {useState} from "react";

import styles from './navbar.module.scss';
import withWidth from "../../HOC/withWidth/withWidth";
import Link from "next/link";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return(
        <div className={toggle ? styles.nav + ' ' + styles.navActive : styles.nav}>
            <img className={styles.logo} src='/logo.png' />

            <span onClick={()=>setToggle(!toggle)} className={styles.hamburger}>{toggle ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}  </span>

            <ul>
                <li>
                    <Link href='/'><a>Shop</a></Link>
                </li>

                <li>
                    <Link href='/'><a>Reviews</a></Link>
                </li>

                <li>
                    <Link href='/'><a>Blog</a></Link>
                </li>

                <li>
                    <Link href='/'><a>FAQ</a></Link>
                </li>

                <li>
                    <Link href='/'><a>About</a></Link>
                </li>
            </ul>

            <div className={styles.account}>
                <span> <i className="fas fa-search" /> </span>
                <div className={styles.cart}>
                    <span className={styles.icon}> <i className="fas fa-shopping-cart" /> </span>
                    <p className={styles.total}> 5 </p>
                </div>
                <div className={styles.dp} style={{backgroundImage: 'url("/dp.jpg")'}} />
            </div>
        </div>
    )
}

export default withWidth(Navbar, '#F366AF');