import React from 'react'

const FileTypeListItem = ({item, SendFileTypeToChange}) => {
  return (
    <div onClick={() => SendFileTypeToChange(item.name)} className='hover:bg-gray-500 bg-gray-300 border-b border-gray-400 hover:text-gray-100 px-2 py-[2px] text-[16px] font-semibold text-gray-600 cursor-pointer'>
        {item?.name}
    </div>
  )
}

export default FileTypeListItem