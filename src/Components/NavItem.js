import React from 'react'

function NavItem(props) {
  

 

  return (
      /*  <div className='flex items-center space-x-5 pt-7 pl-6'>
            <span className=' bg-violet-800 w-3 h-3 rounded-full'>
            </span>
            <div  >{props.title}</div>
            </div>
    
            <div className="w- text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <button type="button" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <span className=' bg-violet-800 w-3 h-3 rounded-full'/> {props.title}
            </button>  
            </div>*/
      <ol className="relative border-l border-gray-200 dark:border-gray-700 mx-6">
          <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-violet-800 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700    "></div>
              <h3 className="text-lg font-semibold text-violet-800 dark:text-white">{props.title}</h3>
          </li>

      </ol>
  )
}

export default NavItem