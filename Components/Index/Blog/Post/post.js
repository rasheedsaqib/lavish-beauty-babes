import styles from './post.module.scss';

const Post = props => {
    return(
        <div className={styles.post} style={{backgroundImage: 'url("/blog1.jpg")'}}>
            <div className={styles.layer} />
            <div className={styles.text}>
                <h2>Pro-age makeup tips for dazzling eyes</h2>
                <img src='/arrow.png' alt='Post' />
            </div>
        </div>
    )
}

export default Post;