import React, { useCallback, useEffect, useRef } from 'react'
import styles from './Modal.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import Portal from '../Portal/Portal'

interface ModalProps {
    className?:string
    children?:React.ReactNode
    isOpen?:boolean
    onClose?:() => void
}
const Modal = ({ className, children, onClose,isOpen }:ModalProps) => {

    const [isClosing, setIsClosing] = React.useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const closeHandler = useCallback(() => {
        if(onClose){
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, 300)
        }
    },[onClose]) 

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if(e.key === 'Escape'){
            closeHandler()
        }
    },[])

    useEffect(() => {
        if(isOpen){
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            if(timerRef.current){
                clearTimeout(timerRef.current)
            }
            window.removeEventListener('keydown', onKeyDown)
        }
    },[isOpen, onKeyDown])

    const mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }

  return (
    <Portal>
    <div className={classNames(styles.modal, mods, [className])}>
        <div className={styles.overlay} onClick={closeHandler}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    </div>
    </Portal>
  )
}

export default Modal