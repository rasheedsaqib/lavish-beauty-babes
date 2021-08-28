import styles from './reviews.module.scss';

const Reviews = props => {
    return(
        <div className={styles.reviews}>
            <h2>Customer Reviews</h2>
            <div className={styles.allReviews}>
                <div className={styles.review}>
                    <div className={styles.upper}>
                        <div className={styles.commas}><p>&apos;&apos;</p></div>
                        <div className={styles.name}>
                            <h3>Lana Rohdes</h3>
                            <p>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                            </p>
                        </div>
                    </div>
                    <p className={styles.comment}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className={styles.review}>
                    <div className={styles.upper}>
                        <div className={styles.commas}><p>&apos;&apos;</p></div>
                        <div className={styles.name}>
                            <h3>Lana Rohdes</h3>
                            <p>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                            </p>
                        </div>
                    </div>
                    <p className={styles.comment}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className={styles.review}>
                    <div className={styles.upper}>
                        <div className={styles.commas}><p>&apos;&apos;</p></div>
                        <div className={styles.name}>
                            <h3>Lana Rohdes</h3>
                            <p>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                            </p>
                        </div>
                    </div>
                    <p className={styles.comment}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className={styles.review}>
                    <div className={styles.upper}>
                        <div className={styles.commas}><p>&apos;&apos;</p></div>
                        <div className={styles.name}>
                            <h3>Lana Rohdes</h3>
                            <p>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                                <span><i className="fas fa-star" /></span>
                            </p>
                        </div>
                    </div>
                    <p className={styles.comment}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;