import "./another-styles.css"
import React, { useEffect } from "react"
import { useRef } from "react"
const AtomButton = ({ border, shadow, className, text, ...rest }) => {

    const button = useRef()
    useEffect(()=>{
        console.log(button.current.after)

    }, [])

    return (
            <button ref={button} className='dark:text-white button-after-hover atom-button p-1 px-3  m-0 rounded-lg'
                style={{maxHeight : "36px",}}
                onMouseEnter={() => {
                    button.current.classList.add("button-hover")
                    button.current.classList.remove("button-after-hover")
                }}
                onMouseLeave={() => {
                    button.current.classList.add("button-after-hover")
                    button.current.classList.remove("button-hover")
                }}
            >
                <p className="dark:bg-darkSlate bg-lightPink" >
                    {text}
                </p>

            </button>
    )
}
export default AtomButton;