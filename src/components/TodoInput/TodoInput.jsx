const TodoInput = () =>{
    return(
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input 
            type="text"
            className="focus:shadow-lg font-inter focus:shadow-gray-600 pl-12 w-full py-4 bg-slate-800 rounded-xl outline-none"
            placeholder="What's new "
            />                  
        </div>
    )
}

export {TodoInput}