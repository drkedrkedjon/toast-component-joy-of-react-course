import React, { useState, useContext } from 'react';
import { ToastsContext } from '../ToastProvider/ToastProvider';
import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { setToasts } = useContext(ToastsContext)
  const [form, setForm] = useState({
    message: '',
    variant: 'notice'
  })

  function handleForm(e) {
    const { name, value } = e.target
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))

  }

  function closeToast(UUID) {
    setToasts(prevState => prevState.filter(toast => toast.key !== UUID))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const UUID = crypto.randomUUID()

    setToasts(prevState => ([
      ...prevState,
      { ...form, key: UUID }
    ]))
    setForm({
      message: '',
      variant: 'notice'
    })
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf closeToast={closeToast} />

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
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
              <label key={variant} htmlFor={`variant-${variant}`}>
                <input
                  required={true}
                  onChange={handleForm}
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={form.variant === variant}
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
            <Button >Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
