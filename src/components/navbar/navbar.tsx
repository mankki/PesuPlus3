import './navbar.css'
import { navItems } from '../../constants/constants'
import logo from '../../assets/IMG-20241031-WA0001.jpg'
import { useState } from 'react'

const Navbar = ()  => {
    const [MobileMenuOpen, setMobileMenuOpen] = useState(false)
    const toggleMobileMenu  = ()  =>  {
        setMobileMenuOpen(!MobileMenuOpen)
    };
    
    const handleClick = () => {
    
    }

    return (
        <nav className = "sticky top-0 z-50 pt-3 bg-white xl:pb-3">
          <div className = "container px-4 mx-auto relative lg:text-sm">
            <div className = "flex justify-between items-center">
              <div className = "flex items-center flex-shrink-0">
                <a href = '#hero'><img className = "h-14 w-14 mr-2" src = {logo} alt = "Logo" /></a>
              </div>
              <div className='navSlide'></div>
              <ul className = "hidden xl:flex mr-16 space-x-12 text-lg" style = {{color:"rgb(0,61,88,1)"}}>
                {navItems.map((item, index)  => (
                  <li key = {index}>
                    {item.label === "Hinnasto" ?  <a href = {item.href} className = 'hover:underline' onClick={handleClick}>{item.label}</a>:  <a href = {item.href} className = 'hover:underline'>{item.label}</a>}
                    {/* <a href = {item.href} className = 'hover:underline'>{item.label}</a> */}
                  </li>
                ))}
              </ul>
              <div className = "xl:hidden md:flex flex-col justify-end">
                <button onClick = {toggleMobileMenu}>
                  {MobileMenuOpen ? 
                    <button>
                        <div className = 'w-6 h-1 rotate-45 bg-[rgb(0,61,88,1)]'/>
                        <div className = 'w-6 h-1 -rotate-45 bg-[rgb(0,61,88,1)]'/>
                    </button> :
                    <button className = 'space-y-1 group'>
                        <div className = 'w-6 h-1 bg-[rgb(0,61,88,1)]'/>
                        <div className = 'w-6 h-1 bg-[rgb(0,61,88,1)]'/>
                        <div className = 'w-6 h-1 bg-[rgb(0,61,88,1)]'/>
                    </button>}
                </button>
              </div>
            </div>
            {MobileMenuOpen && (
              <div className = "fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center text-white lg:hidden">
                <ul>
                  {navItems.map((item, index)  => (
                    <li key = {index} className = "py-4">
                      <a href = {item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      );
}

export default Navbar