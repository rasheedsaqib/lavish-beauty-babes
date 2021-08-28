import Image from "next/image";

import styles from './experience.module.scss';
import withWidth from "../../../HOC/withWidth/withWidth";

const Experience = props => {
    return(
        <div className={styles.experience}>
            <div className={styles.image}>
                <Image src='/experience.png' width={500} height={448} />
                <div className={styles.review}>
                    <p>How was your experience?</p>
                    <p className={styles.emoji}> <span>😡</span> <span>😢</span> <span>😊</span> <span>😃</span> <span>😘</span></p>
                </div>
            </div>
            <div className={styles.text}>
                <h1>A community for every <br /> Stage of your Journey!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing,  sed do eius mod tempor incididunt ut labore.</p>
            </div>
        </div>
    )
}

export default withWidth(Experience);