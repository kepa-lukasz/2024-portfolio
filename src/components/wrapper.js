export default function Wrapper({ className, child }) {

    return (
        <div className={className + " flex justify-center w-full text-black dark:text-white"} style={{ height: "200px" }}>
            <div className="w-full" style={{ maxWidth: "2100px" }}>
                {child}
            </div>
        </div>
    )
}