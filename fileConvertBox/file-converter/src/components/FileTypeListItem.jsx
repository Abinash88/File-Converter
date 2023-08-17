import React from 'react'

const FileTypeListItem = ({item, SendFileTypeToChange}) => {
  return (
    <div onClick={() => SendFileTypeToChange(item)} className='hover:bg-gray-500  hover:text-gray-100 px-2 py-[2px] text-[16px] font-semibold text-gray-600 cursor-pointer'>
        {item}
    </div>
  )
}

export default FileTypeListItem