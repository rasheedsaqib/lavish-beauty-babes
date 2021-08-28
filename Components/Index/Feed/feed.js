import styles from './feed.module.scss';
import withWidth from "../../../HOC/withWidth/withWidth";

const Feed = props => {
    return(
        <div className={styles.feed}>
            <h2>Instagram feed</h2>
            <div className={styles.posts}>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <img src='/testimonial1.jpg' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <img src='/testimonial2.jpg' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <img src='/testimonial3.jpg' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <img src='/testimonial1.jpg' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <img src='/testimonial2.jpg' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <img src='/testimonial3.jpg' />
                </div>
                <div className={styles.post} >
                    <div className={styles.layer} />
                    <img src='/testimonial2.jpg' />
                </div>
            </div>
        </div>
    )
}

export default withWidth(Feed);