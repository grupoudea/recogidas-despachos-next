import React, { useState } from 'react'
import { MdMenu, MdMenuOpen } from "react-icons/md";


const Navbar = () => {
	const [openSideBar, setOpenSideBar] = useState<boolean>(false)

  return (
    <nav className='flex justify-between lg:hidden'>
			<div className='text-xl px-2'>
				<button className='hover:text-gray-900' type="button" onClick={()=>{setOpenSideBar(!openSideBar)}}>
					{openSideBar ? <MdMenuOpen/> : <MdMenu/>}
				</button>
			</div>
			<div>NOmbre</div>
			<div>logo</div>

    </nav>
  )
}

export default Navbar