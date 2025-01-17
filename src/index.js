import React, { useEffect } from 'react'
import styles from './styles.module.css'

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      e.key === 'Escape' && onClose()
    }
    isOpen && document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }
  const handleOverlayClick = (e) => {
    e.target === e.currentTarget && onClose()
  }

  return (
    <div className={styles['modal-overlay']} onClick={handleOverlayClick}>
      <div className={styles['modal-content']}>
        <button className={styles['modal-close']} onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  )
}
