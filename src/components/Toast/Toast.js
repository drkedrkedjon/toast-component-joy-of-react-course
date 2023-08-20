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

function handleIcon(variant) {
  switch (variant) {
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
function Toast({ children, variant, setPopToast }) {
  // const Icon = ICONS_BY_VARIANT[variant]
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        {/* <Icon size={24} /> */}
        {handleIcon(variant)}
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button onClick={() => setPopToast(false)} className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
