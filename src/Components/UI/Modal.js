import React from 'react';
import ReactDom from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick} ></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
}

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById('overlays'))}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </React.Fragment>
    );
}

export default Modal;