export default function ProgressBar(props) {
    return (
        <div className="p-4 w-11/12 sm:w-6/12 md:w-4/12 lg:w-3/12 ">
                <div className=" rounded dark:bg-lightLemon text-black bg-white w-full flex justify-center flex-wrap mb-2">
                    <div className="w-full text-center">
                        <div  className="w-full flex my-3  justify-center">{props.icon}</div>
                        {props.name}
                    </div>
                    <div className="w-8/12  py-2">
                        <div class="w-full  rounded-full h-2.5 dark:bg-darkSlate bg-darkGreen">
                            <div class="bg-fiolet dark:bg-lightBlue h-2.5 rounded-full" style={{ width: props.width }}></div>
                        </div>
                    </div>
                    <div className="px-2">
                        {props.description}
                    </div>
                </div>
            </div>
        
    )
}