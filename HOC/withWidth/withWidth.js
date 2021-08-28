import styles from './withWidth.module.scss';

const wihWidth = (WrappedComponent, background, gradient) => {
    return props => (
        <div style={{width: '100%', background : background, backgroundImage: gradient}}>
            <div className={styles.width}>
                <WrappedComponent {...props} />
            </div>
        </div>
    )
}

export default wihWidth;