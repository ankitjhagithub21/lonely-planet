import { Bookmark, Earth, Search } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='bg-white '>
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
                        <button className='bg-indigo-500 text-white rounded-full px-4 py-2'>Save</button>
                    </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar