import { Link } from 'react-router-dom'
export default function AtomButton({border, shadow, className, text, ...rest }) {

    return (
        <div className='button-hover rounded-lg p-0 m-0'>
            <button className='  m-0 p-0 rounded-lg'>
                <div className={shadow + '  shadow1 '}></div>
                <div className={shadow + ' shadow2 '}></div>
                <div className={border+  ' con p-1 rounded'} >
                    <div
                        {...rest}
                        className={className + " button-top py-1 px-10 rounded-lg"}
                    >
                        {text}
                    </div>
                </div>
            </button>
        </div>

    )
}