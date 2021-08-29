import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {Transition} from "react-transition-group";

import styles from './hero.module.scss';
import withWidth from '../../../HOC/withWidth/withWidth';

const Hero = () => {

    const [slide, setSlide] = useState(0);

    return (
        <Transition in timeout={400}>
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
                        <div className={slide === 0 ? styles.dot + ' ' + styles.active : styles.dot} />
                        <div className={slide === 1 ? styles.dot + ' ' + styles.active : styles.dot} />
                        <div className={slide === 2 ? styles.dot + ' ' + styles.active : styles.dot} />
                    </div>
                    <div className={styles.change}>
                        <span
                            className={styles.prev} style={{opacity: slide === 0 ? 0.5 : 1}}
                            onClick={() => setSlide(slide => slide !== 0 ? slide-1 : slide)}>
                            <i className="fas fa-chevron-left" />
                        </span>
                        <span
                            className={styles.next} style={{opacity: slide === 2 ? 0.5 : 1}}
                            onClick={() => setSlide(slide => slide !== 2 ? slide+1 : slide)}>
                            <i className="fas fa-chevron-right" />
                        </span>
                    </div>
                </div>
            </div>
        </Transition>
    )
}

export default withWidth(Hero, '#F366AF');