import styles from './product.module.scss';

const Product = props => {
    return(
        <div className={styles.product}>
            <img src='/product.png' />
            <h3>Medium BB Cream</h3>
            <p>$30.00</p>
            <p className={styles.stars}>
                <span><i className="fas fa-star" /></span>
                <span><i className="fas fa-star" /></span>
                <span><i className="fas fa-star" /></span>
                <span><i className="fas fa-star" /></span>
                <span><i className="fas fa-star" /></span>
            </p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product;