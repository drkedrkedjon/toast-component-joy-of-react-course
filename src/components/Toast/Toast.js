import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

// const ICONS_BY_VARIANT = {
//   notice: Info,
//   warning: AlertTriangle,
//   success: CheckCircle,
//   error: AlertOctagon,
// };

function handleIcon(type) {
  switch (type) {
    case 'notice':
      return <Info size={24} />
    case 'warning':
      return <AlertTriangle size={24} />
    case 'success':
      return <CheckCircle size={24} />
    case 'error':
      return <AlertOctagon size={24} />
    default:
      return <Info size={24} />
  }
}
function Toast({ children, variant, closeToast, UUID }) {
  // const Icon = ICONS_BY_VARIANT[variant]
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        {/* <Icon size={24} /> */}
        {handleIcon(variant)}
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {children}
      </p>
      <button aria-label='"Dismiss message' aria-live='off' onClick={() => closeToast(UUID)} className={styles.closeButton}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
