import Link from "next/link";
import Image from "next/image";

import styles from './hero.module.scss';
import withWidth from '../../../HOC/withWidth/withWidth';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Healthy Skin is a <br />Reflection of Wellness!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing, <br /> sed do eiusmod tempor incididunt ut labore.</p>
                    <Link href='/'><a>View all Products</a></Link>
                </div>

                <div className={styles.image}>
                    <Image src='/hero.png' width={400} height={360} />
                </div>
            </div>

            <div className={styles.slider}>
                <div className={styles.dots}>
                    <div className={styles.dot} />
                    <div className={styles.dot + ' ' + styles.active} />
                    <div className={styles.dot} />
                </div>
                <div className={styles.change}>
                    <span className={styles.prev} > <i className="fas fa-chevron-left" /> </span>
                    <span className={styles.next} > <i className="fas fa-chevron-right" /> </span>
                </div>
            </div>
        </div>
    )
}

export default withWidth(Hero, '#F366AF');