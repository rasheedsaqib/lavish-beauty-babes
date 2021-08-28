import styles from './category.module.scss';
import Link from "next/link";

const Category = props => {
    return(
        <div className={styles.category}>
            <div className={styles.text}>
                <h3>Skin Care</h3>
                <p>Organic Ingredients</p>
                <Link href='/'><a>View Products</a></Link>
            </div>
            <img className={styles.catImg} src='/cat-1.png' />
        </div>
    )
}

export default Category;