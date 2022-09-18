import React from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

const Toast = () => {
  return (
    <div>
        <div id="toast-success" className="flex items-center p-4 mb-4 w-full max-w-xs text-white bg-[#3a3e59] rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-gray-500 rounded-lg dark:bg-green-800 dark:text-green-200">
            <AiOutlineCheck />
        </div>
        <div className="ml-3 text-sm font-normal">message send successfully.</div>
        <button type="button" className="ml-auto -mx-1.5 -my-1.5 inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-gray-500 rounded-lg dark:bg-green-800 dark:text-green-200" data-dismiss-target="#toast-success" aria-label="Close">
           <AiOutlineClose />
        </button>
        </div>       
    </div>
  )
}

export default Toast