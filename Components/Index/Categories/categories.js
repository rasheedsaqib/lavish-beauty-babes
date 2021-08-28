import styles from './categories.module.scss';
import withWidth from '../../../HOC/withWidth/withWidth';
import Category from "./Category/category";

const Categories = props => {
    return(
        <div className={styles.categories}>
            <Category />
            <Category />
            <Category />
        </div>
    )
}

export default withWidth(Categories);