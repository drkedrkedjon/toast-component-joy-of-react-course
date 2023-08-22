import React, { useContext } from 'react';
import { ToastsContext } from '../ToastProvider/ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ closeToast }) {
  const { toasts } = useContext(ToastsContext);
  return (
    <ol
      role='region'
      aria-live='polite'
      aria-label='Notifications'
      className={styles.wrapper}>
      {toasts.map(toast => (
        <li key={toast.key} className={styles.toastWrapper}>
          <Toast UUID={toast.key} closeToast={closeToast} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
