const Wrapper = ({ className, child }) => {

    return (
        <div className={className + " flex justify-center w-full text-black dark:text-white"} >
            {/* <div className="w-full" style={{ maxWidth: "2100px" }}> */}
                {child}
            {/* </div> */}
        </div>
    )
}

export default Wrapper