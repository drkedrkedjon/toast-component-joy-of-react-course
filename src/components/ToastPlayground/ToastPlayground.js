// import { useState } from 'react';
import React, { useState } from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [popToast, setPopToast] = useState(false)
  const [form, setForm] = useState({
    message: '',
    variant: ''
  })

  function handlePopToast(bol) {
    setPopToast(bol)
  }

  function handleForm(e) {
    const { name, value } = e.target
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))

  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {popToast && <Toast setPopToast={setPopToast} variant={form.variant}>
        {form.message}
      </Toast>}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea name='message' value={form.message} onChange={handleForm} id="message" className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant) => (
              <label key={`${variant}`} htmlFor={`variant-${variant}`}>
                <input
                  onChange={handleForm}
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={`${variant}`}
                />
                {`${variant}`}
              </label>
            ))}

          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => handlePopToast(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
