import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
    const cartItems = [{
        id: 'c1 ',
        name: 'Sushi',
        amount: 2,
        price: 12.99
    }].map(item => <li>{item.name}</li>)

    return (
        <Modal onClick={props.onClose}>
            <ul className={styles['cart-items ']}>
                {cartItems}
            </ul>

            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.2</span>
            </div>

            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose} >Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;