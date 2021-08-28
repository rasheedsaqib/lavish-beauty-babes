import styles from './branding.module.scss';
import withWidth from '../../../HOC/withWidth/withWidth';

const Branding = props => {
    return(
        <div className={styles.branding} >
            <div className={styles.logo} style={{backgroundImage: 'url("/logo2.png")'}} />
            <img className={styles.brandImg} src='/branding.png' alt='Branding' />
        </div>
    )
}

export default withWidth(Branding,'#F366AF', 'linear-gradient(to bottom, #F366AF , #F3ADD1)');