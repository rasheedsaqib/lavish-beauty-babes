import styles from './product.module.scss';

const Product = props => {
    return(
        <div className={styles.product}>
            <img src='/product.png' />
            <h3>Medium BB Cream</h3>
            <p>$30.00</p>
        </div>
    )
}

export default Product;