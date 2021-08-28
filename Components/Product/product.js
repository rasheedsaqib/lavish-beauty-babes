import styles from './product.module.scss';
import withWidth from "../../HOC/withWidth/withWidth";
import Reviews from "./Reviews/reviews";
import {default as SingleProduct} from '../../UI/Product/product';

const Product = props => {
    return(
        <div className={styles.product}>
            <div className={styles.top}>
                <img src='/scrub.png' />
                <div className={styles.text}>
                    <h1>Strawberry Sugar Scrub</h1>
                    <p>$15.00</p>
                    <div className={styles.total}>
                        <p className={styles.sub}>-</p>
                        <p>1</p>
                        <p className={styles.add}>+</p>
                    </div>
                    <div className={styles.buttons}>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
            <h2>Description:</h2>
            <p className={styles.description}>
                A gentle vegan lip scrub that cleanses, exfoliates, and conditions the lips with natural organic ingredients. Try the new mango flavor.
                A gentle lip scrub that cleanses, exfoliates, and conditions, leaving lips incredibly soft, smooth, and hydrated. It gently buffs away dry flakes with sugar crystals and natural humectants, while conditioning chapped lips with Shea butter and Jojoba oil, leaving them incredibly soft, smooth, and ready for lipstick application. The lip scrub is the perfect prep step to incorporate into any lip ritual for the sweetest, softest lips. This Gluten-free, Vegan lip scrub infused with Coconut oil, Avocado oil, Vitamin E which leaves your lips feeling soft and super supple and creates luscious, kissable lips.
                <ul>
                    <li>Vegan, gluten-free, paraben-free.</li>
                    <li>Good for normal, dry, combination skin type.</li>
                    <li>Enriched with organic coconut Oil, shea butter, avocado oil, jojoba oil, and vitamin E.</li>
                </ul>

                Apply lip Scrub to the lips and gently massage away dull skin. Rinse with a damp wash cloth. Use two to three times a week for irresistibly kissable lips.
            </p>
            <div className={styles.share}>
                <p className={styles.fb}> <span><i className="fab fa-facebook-f" /></span> Share</p>
                <p className={styles.insta}> <span><i className="fab fa-instagram" /></span> Share</p>
                <p className={styles.tweet}> <span><i className="fab fa-twitter" /></span> Share</p>
            </div>

            <hr />

            <Reviews />

            <hr />

            <h2 style={{margin: '1rem 0'}}>You may also like</h2>

            <div className={styles.allProducts}>
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
            </div>
        </div>
    )
}

export default withWidth(Product);