import {useState} from "react";
import {Transition} from "react-transition-group";

import styles from './testimonial.module.scss';
import withWidth from '../../../HOC/withWidth/withWidth';

const Testimonial = props => {

    const [active, setActive] = useState(0);

    const reviews = [
        {review: 'The shapewear gives me such a confidence boost! Great price & great quality.', name: 'Keana S.', role: 'Model', image: '/testimonial1.jpg'},
        {review: 'Love the Matte Lipstick! I am adding every color to my collection. Just wow!', name: 'Paulina C.', role: 'Makeup Artist', image: '/testimonial2.jpg'},
        {review: 'Wow! I love my Jade Roller! I love the skincare products that you offer. ', name: 'Audrey B.', role: 'Model', image: '/testimonial3.jpg'}
    ];

    return (
        <Transition in timeout={400}>
            {state => (
                <div>
                    <h2 className={styles.heading}>Our Beloved Customers</h2>
                    <div className={styles.testimonial}>
                        <div className={styles.image}>
                            <img src={reviews[active].image} />
                            <div className={styles.layer} />
                        </div>
                        <div className={styles.review}>
                            <br />
                            <p className={styles.commas}>&apos;&apos;</p>
                            <h1>{reviews[active].review}</h1>
                            <div className={styles.client}>
                                <div className={styles.clientImage} style={{backgroundImage: 'url("' + reviews[active].image + '")'}} />
                                <div>
                                    <h2>{reviews[active].name}</h2>
                                    <p className={styles.role}>{reviews[active].role}</p>
                                </div>
                            </div>
                            <div className={styles.dots}>
                                {reviews.map((item, index) => {
                                    return (<div key={index} className={active === index ? styles.dot + ' ' + styles.active : styles.dot} onClick={()=>setActive(index)} />)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    )
}

export default withWidth(Testimonial);