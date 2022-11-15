import React from "react";
const Button = ({title,icon}) => {
    return (
      
            <div className='flex items-center px-2 text-white cursor-pointer hover:bg-[#2f333d]'>
                <div className='mr-1'>{icon}</div>
                <p className='ml-1'>{title}</p>
        </div>
    );
}
export default Button;