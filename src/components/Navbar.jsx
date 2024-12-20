import { navItems } from "../constants"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <nav className="text-slate-300 sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink">

                        <span className="text-xl tracking-tight">YourBrand</span>
                    </div>

                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a className="hover:underline" href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 hover:underline">About</a>
                        <a href="#" className="bg-gradient-to-r from-slate-500 to-blue-600 py-2 px-3 rounded-md hover:underline">Contact Us</a>
                    </div>

                    <div className="lg:hidden md:flex flex-col justify-end hover:underline">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3">About</a>
                            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Contact Us</a>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar