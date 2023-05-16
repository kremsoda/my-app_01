import styles from './Post.module.scss';

function PostList({children}) {
    return(
        <div className={styles.postList}>{children}</div>
    );
}

export default PostList;