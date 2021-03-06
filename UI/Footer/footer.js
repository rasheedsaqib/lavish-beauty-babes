import Link from "next/link";

import styles from './footer.module.scss';
import withWidth from "../../HOC/withWidth/withWidth";

const Footer = props => {
    return(
        <div className={styles.footer}>

            <div className={styles.columns}>
                <div className={styles.column}>
                    <Link href='/'><a><img src='/logo.png' /></a></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing,  sed do eius mod tempor <br />
                        incididunt ut labore.</p>
                </div>

                <div className={styles.column}>
                    <h3>Weekly Top Chart</h3>
                    <ul>
                        <li>Lips</li>
                        <li>Rose</li>
                        <li>Skin</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>About</h3>
                    <ul>
                        <li>About</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Social Media</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>SnapChat</li>
                    </ul>
                </div>
            </div>

            <p className={styles.end}>© 2021, Lavish Beauty Babes</p>

        </div>
    )
}

export default withWidth(Footer, '#F366AF');