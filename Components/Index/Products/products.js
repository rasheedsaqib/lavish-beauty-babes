import Link from "next/link";

import styles from './products.module.scss';
import withWidth from "../../../HOC/withWidth/withWidth";
import Product from "../../../UI/Product/product";

const Products = props => {

    return(
        <div className={styles.products}>
            <h2>Our Products</h2>
            <div className={styles.allProducts}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <div className={styles.button}>
                <Link href='/'><a>View all products</a></Link>
            </div>

        </div>
    )
}

export default withWidth(Products);