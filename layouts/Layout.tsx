import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

interface LayoutProp {
    children: JSX.Element
}

const Layout = ({children}: LayoutProp) => {
  return (
    <main className='flex h-screen w-screen flex-col lg:flex-row'>
        <Navbar/>
        <Sidebar />
        <section className='debug w-full h-full'>{children}</section>
    </main>
  )
}

export default Layout