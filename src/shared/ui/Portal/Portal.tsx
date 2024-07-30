import React from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children:React.ReactNode
    element?:HTMLElement
}
const Portal = ({children, element}:PortalProps) => {
  return createPortal(children, element || document.body)
}

export default Portal