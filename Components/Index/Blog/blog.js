import styles from './blog.module.scss';
import withWidth from "../../../HOC/withWidth/withWidth";
import Post from "./Post/post";

const Blog = props => {
    return(
        <div className={styles.blog}>
            <h2>Popular Blogs</h2>
            <div className={styles.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default withWidth(Blog);