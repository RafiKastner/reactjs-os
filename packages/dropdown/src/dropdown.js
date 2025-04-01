import React, { Children, cloneElement, isValidElement, useContext, useEffect, useRef, useState } from 'react'
import "./index.css"
import { Arrow } from '@reactjs-os/shared'
import { DropdownContext } from './context'

export function Dropdown({ inner, offset, children }) {
   return (
        <div className='dropdown flex-center'>
            <DropdownGeneric display='vertical' {...{inner, offset, children}}/>
        </div>
   )
}

export function SubDropdown({ text, right, offset, children }) {
    return (
        <div className='sub-dropdown' style={{ position: 'relative'}}>
            <DropdownGeneric display='horizontal'
                offset={ offset || { right: 15, left: 5 } }
                inner={
                <div className='flex-between'>
                    <span>{text}</span>
                    <span>{right || <Arrow stroke={'#aeaeae'}/>}</span> 
                    {/* make above also change color with the rest */}
                </div>
            }>
                {children}
            </DropdownGeneric>
        </div>
    )
}

function DropdownGeneric({ inner, children, display, offset }) {
    //do something with this so shifts when window resizes
    //but if can connect all dropdowns to one universal eventlistener to reduce lag
    const [open, setOpen] = useState(false)
    const childrenRef = useRef(null)
    const buttonRef = useRef(null)
    useEffect(() => {
        const listener = (e) => {
            if (buttonRef.current && buttonRef.current.contains(e.target)) {
                return
            }
            else if (childrenRef.current && !childrenRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", listener)
        return () => document.removeEventListener("mousedown", listener)
    }, [])
    return (
        <>
            <button ref={buttonRef} className="control-button" onClick={() => setOpen(!open)}>
                {inner}
            </button>
            {open && 
                <DropdownChildren type={display} offsetRef={buttonRef} offsetCustom={offset} {...{childrenRef, setOpen}}>
                    {children}
                </DropdownChildren>
            }
        </>
    )
}

function DropdownChildren({ offsetRef, childrenRef, children, setOpen, type, offsetCustom }) {
    offsetCustom = { top: 0, left: 0, right: 0, bottom: 0, ...offsetCustom}
    const { windowSize, } = useContext(DropdownContext)
    const [style, setStyle] = useState({ top: 0, left: 0 })
    useEffect(() => {
        if (!offsetRef) return
        const offset = offsetRef.current
        const offsetPos = offset.getBoundingClientRect()
        const childrenWidth = childrenRef.current.offsetWidth
        const childrenHeight = childrenRef.current.offsetHeight
        if (type === 'vertical') {
            if (windowSize.height - offsetPos.bottom > childrenHeight) {
                setStyle({ top: offset.offsetHeight + offsetCustom.top, left: 0 })
            } else {
                setStyle({ top: -childrenHeight - offsetCustom.bottom, left: 0 })
            }
        } else if (type === 'horizontal') {
            if (windowSize.width - offsetPos.right > childrenWidth) {
                setStyle({ top: 0, left: offset.offsetWidth + offsetCustom.left})
            } else {
                setStyle({ top: 0, left: -childrenWidth - offsetCustom.right })
            }
        }
    }, [windowSize])
    return (
        <div ref={childrenRef} className='dropdown-children' style={{ top: style.top + offsetCustom.top, left: style.left + offsetCustom.left}}>
            {Children.map(children, (child) => {
                if (isValidElement(child) && typeof child.type === 'function') {
                    return cloneElement(child, {setOpen})
                }
                return child
            })}
        </div>
    )
}

export function DropdownItem({ text, right, callback, setOpen }) {
    return (
        <button className='dropdown-item flex-between' onClick={() => {setOpen(false); callback()}}>
            <span className='shortcut-name'>{text} </span>
            <div className='kbd-container'>
                {right}
            </div>
        </button>
    )
}

export function ShortCut({ keys }) {
    return (
       <> 
            {keys.map((key, index) => (
                <React.Fragment key={index}>
                    <kbd>{key}</kbd>
                </React.Fragment>
            ))}
        </>
    )
}