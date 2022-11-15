import Image from 'next/image';
import React from 'react';
import logo from '../assets/chat logo.png';
import { BsFileEarmarkMedicalFill } from 'react-icons/bs'
import {BsFillChatSquareDotsFill} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai';
import {ImStatsDots} from 'react-icons/im';
import {BsPeopleFill} from 'react-icons/bs'
import {BsToggle2On,BsMoon,BsSun} from 'react-icons/bs'
import {IoCallOutline} from 'react-icons/io5'
import {MdNotificationsNone} from 'react-icons/md'

import Button from './Button';
const Navbar = () => {
    const navbuttons=[
    {title:"Resume", icon:<BsFileEarmarkMedicalFill/>},
    {title:"Contacts",icon:<BsPeopleFill/>},
    {title:"Statistics",icon:<ImStatsDots/>},
    {title:"Chats",icon:<BsFillChatSquareDotsFill/>},
    {title:"Settings",icon:<AiFillSetting/>},

    ]
    const [isDark,setDark]=React.useState(true);
    
    return (
        <div className={`flex items-center justify-between ${isDark?"bg-gray-400":"bg-[#20232b]"}  h-20 px-4`}>
           
           <div className='flex items-center h-full  px-6' >
            <div className="mr-2 w-20 text-white">
                <Image src={logo} alt="logo" className='shrink-0'/>
           </div>
           <p className='text-white font-bold'>Chatter Box</p>
        </div>
        
        {navbuttons.map((button)=>(<Button title={button.title} icon={button.icon}/>))}
        
        <div className="flex  items-center space-x-4 text-white">
       
        </div>
        
        
        <div className='cursor-pointer' onClick={()=>setDark(!isDark)}>
       {  isDark ?
            <div className='relative flex items-center text-purple-700'>
                <BsToggle2On className='h-12 w-12 rotate-180'/>
                <BsSun className='absolute text-white left-1.5'/>
            </div>
                               :            
       
            <div className='relative flex items-center text-purple-700'>
                <BsToggle2On className='h-12 w-12'/>
                <BsMoon className='absolute text-white right-1.5'/>
                
            </div>
            
        }
             
        
            {/*DarkMode Off*/}
            
            </div>
            <IoCallOutline className='w-6 h-6 '/>
            <div className='relative '>
            <MdNotificationsNone className='w-6 h-6'/>
            <div className=' bg-white absolute top-0 right-0 h-[0.4rem] w-[0.4rem] rounded-full'></div>
            </div>


        </div>
    
    );
    }
    export default Navbar;