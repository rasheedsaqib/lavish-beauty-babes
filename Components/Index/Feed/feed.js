import Image from "next/image";

import styles from './feed.module.scss';
import withWidth from "../../../HOC/withWidth/withWidth";

const Feed = props => {
    return(
        <div className={styles.feed}>
            <h2>Instagram feed</h2>
            <div className={styles.posts}>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <Image src='/testimonial1.jpg' height={150} width={150} alt='Feed' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <Image src='/testimonial2.jpg' height={150} width={150} alt='Feed' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <Image src='/testimonial3.jpg' height={150} width={150} alt='Feed' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <Image src='/testimonial1.jpg' height={150} width={150} alt='Feed' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <Image src='/testimonial2.jpg' height={150} width={150} alt='Feed' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <Image src='/testimonial3.jpg' height={150} width={150} alt='Feed' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <Image src='/testimonial2.jpg' height={150} width={150} alt='Feed' />
                </div>
            </div>
        </div>
    )
}

export default withWidth(Feed);