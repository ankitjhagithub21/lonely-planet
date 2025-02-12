import { Bookmark, ChevronRight, Earth, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  const menu = ["Destinations","Planning","Inspiration","Shop"]
  return (
    <nav className='bg-white relative'>
        <div className="container mx-auto px-4 py-4 text-sm">
            <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-10'>
                    <div className='flex items-center text-blue-700 text-lg font-semibold'>
                        <span className='font-bold'>lonely</span>
                        <Earth size={18}/>
                        <span className='font-bold'>planet</span>
                    </div>
                  <ul className='lg:flex gap-3 items-center font-semibold hidden'>
                        <a href="#" className='hover:text-blue-800 transition'>Destinations</a>
                        <a href="#">Planning</a>
                        <a href="#">Inspiration</a>
                        <a href="#">Shop</a>
                    </ul>
                  </div>
                    <div className='flex gap-3 items-center'>
                        <div className='flex gap-2 items-center'>
                            <Search />
                            <span className='lg:block hidden'>Search</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Bookmark/>
                           <span className='lg:block hidden'>Saves</span>
                        </div>
                        <button className='bg-indigo-500 text-white rounded-full px-4 py-2'>Sign in</button>
                        <Menu className='block md:hidden' onClick={()=>setIsOpen(true)}/>
                    </div>
            </div>
        </div>
        {
          isOpen && <div className="bg-white z-50 h-screen w-full fixed top-0 left-0 flex flex-col p-5">
            <div className='flex items-center justify-between mb-5'>
              <Earth color='blue'/>
              <X onClick={()=>setIsOpen(false)}/>
            </div>
            <ul>
            {
              menu.map((item,idx)=>{
                return <li key={idx} className='flex w-full font-semibold items-center justify-between border-b border-gray-400 p-2'>
                  {item}
                  <ChevronRight/>
                </li>
              })
            }
            </ul>
          </div>
        }
        
    </nav>
  )
}

export default Navbar