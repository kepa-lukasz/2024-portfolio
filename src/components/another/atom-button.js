import "./another-styles.css"
import React from "react"
import { useRef } from "react"
const AtomButton = ({ border, shadow, className, text, ...rest }) => {

    const button = useRef()

    return (
            <button ref={button} className=' atom-button p-1 px-3  m-0 rounded-lg'
                onMouseEnter={() => {
                    button.current.classList.add("button-hover")
                    button.current.classList.remove("button-after-hover")
                }}
                onMouseLeave={(ev) => {
                    button.current.classList.add("button-after-hover")
                    button.current.classList.remove("button-hover")
                }}
            >
                <p className="bg-rose dark:bg-darkSlate" >
                    {text}
                </p>

            </button>
    )
}
export default AtomButton;