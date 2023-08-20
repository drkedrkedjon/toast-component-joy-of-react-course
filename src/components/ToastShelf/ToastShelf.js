import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, closeToast }) {
  return (
    <ol className={styles.wrapper}>
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
