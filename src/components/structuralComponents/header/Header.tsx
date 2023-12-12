// 'use client'
// import MyContext from '../../../context/MyContext';
// import { useState, useContext } from 'react';
// import Link from 'next/link'
// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
//     const { setSubHead } = useContext(MyContext)
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     }
//     const toggleSubMenu = () => {
//         setIsSubMenuOpen(!isSubMenuOpen);
//     }
//     return (
//         <div className="container mx-auto z-50">
//             <nav className="flex lg:flex-col flex-wrap h-24 border-b">
//                 <Link href="/" className="my-auto mr-auto">
//                     <img src="images/logo/logo2.svg" className="dark:hidden block h-14 mr-3" alt="Spareöom Logo" />
//                     <img src="images/logo/night.svg" className="dark:block hidden h-14 mr-3" alt="Spareöom Logo" />                    </Link>
//                 <div className="flex items-center lg:order-2 lg:hidden">
//                     <button onClick={toggleMenu} className="flex items-center p-2 ml-1 text-sm text-black dark:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-950" >
//                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
//                         <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                     </button>
//                 </div>
//                 <div className={`${isMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1 `}>
// <ul className="flex w-2/4   flex-col mt-4 font-extralight lg:flex-row lg:space-x-8 lg:mt-0 ">
//     <li onClick={() => { setIsSubMenuOpen(true), setSubHead(10) }} >
//         <Link href="/" className="relative block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black dark:text-white" aria-current="page">Home</Link>
//     </li>
//     <li onClick={() => setIsSubMenuOpen(true)}>
//         <Link href="/about" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black dark:text-white">About</Link>
//     </li>
//     <li onClick={() => setIsSubMenuOpen(true)} >
//         <Link href="/projects" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  text-black dark:text-white">Projects</Link>
//     </li>
//     <li onClick={() => setIsSubMenuOpen(true)} >
//         <Link href="/products" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  text-black dark:text-white">Products</Link>
//     </li>
//     <li onClick={() => setIsSubMenuOpen(true)}>
//         <Link href="/contact" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black dark:text-white">Contact</Link>
//     </li>
//     {/* <li onClick={() => setIsSubMenuOpen(true)}>
//         <Link href="/about" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  text-black dark:text-white">Cart</Link>
//     </li> */}
//     <li>
//         <div className='flex '>
//             <Link href="/services" onClick={() => setSubHead(0)} className="block  py-2 pr-4 pl-3 lg:hover:text-primary-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black dark:text-white">Services</Link>
//             <div className='relative '>
//                 <button
//                     className="h-full p-2 text-black hover:animate-ping "
//                     onClick={toggleSubMenu}>
//                     <span className="sr-only">Menu</span>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4 dark:text-white"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                     >
//                         <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                 </button>
//                 <div
//                     className={`${isSubMenuOpen ? 'hidden' : 'block'} absolute z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white dark:bg-black shadow-lg dark:text-white`}
//                     role="menu">
//                     <div className="p-2" >
//                         <Link href="/services" onClick={() => {
//                             setSubHead(1.4)
//                             setIsSubMenuOpen(true)
//                         }}
//                             className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
//                             role="menuitem">
//                             Design Consultation
//                         </Link>
//                         <Link href="/services" onClick={() => {
//                             setSubHead(2.4)
//                             setIsSubMenuOpen(true)
//                         }}
//                             className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white">
//                             Room Planning & Layout
//                         </Link>
//                         <Link href="/services" onClick={() => {
//                             setSubHead(3.4)
//                             setIsSubMenuOpen(true)
//                         }}
//                             className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
//                             role="menuitem">
//                             Customization & Personalization:
//                         </Link>
//                         <Link href="/services" onClick={() => {
//                             setSubHead(4.4)
//                             setIsSubMenuOpen(true)
//                         }}
//                             className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
//                             role="menuitem">
//                             Installation & Assembly
//                         </Link>
//                         <Link href="/services" onClick={() => {
//                             setSubHead(5.4)
//                             setIsSubMenuOpen(true)
//                         }}
//                             className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
//                             role="menuitem"
//                         >
//                             Design Packages
//                         </Link>
//                         <Link href="/services" onClick={() => {
//                             setSubHead(5.4)
//                             setIsSubMenuOpen(true)
//                         }}
//                             className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
//                             role="menuitem"
//                         >
//                             Expert Advice & Tips
//                         </Link>
//                         <Link href="/services" onClick={() => {
//                             setSubHead(5.4)
//                             setIsSubMenuOpen(true)
//                         }}
//                             className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
//                             role="menuitem"
//                         >
//                             Design Packages
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </li>


//                     </ul>
//                 </div>
//             </nav>
//         </div>

//     )
// }

// export default Header;

'use client'
import MyContext from '../../../context/MyContext';
import { useState, useContext } from 'react';
import Link from 'next/link'
import ViewDetectAnimation from '@component/components/animationComponents/viewDetectAnimation/ViewDetectAnimation';
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
    const { setSubHead } = useContext(MyContext)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    }
    return (
        <header>
            <div className="container mx-auto absolute top-0 z-20">
                <div className='flex flex-col z-10 border-b'>
                    <div className='flex justify-between p-3 '>
                        <Link href="/" className="my-auto mr-auto">
                            <img src="images/logo/logo2.svg" className="dark:hidden block md:h-14 mr-3 h-8" alt="Spareöom Logo" />
                            <img src="images/logo/night.svg" className="dark:block hidden md:h-14 mr-3 h-8" alt="Spareöom Logo" />
                        </Link>
                        <button onClick={toggleMenu} className=" flex  sm:hidden items-center p-2 ml-1 text-sm text-black dark:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-950" >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className='flex'>
                        <ul className="sm:flex flex-row w-2/4 hidden mt-4 font-extralight lg:space-x-8 lg:mt-0 ">
                            <li onClick={() => { setIsSubMenuOpen(true), setSubHead(10) }} >
                                <Link href="/" className="relative block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black dark:text-white" aria-current="page">Home</Link>
                            </li>
                           
                            <li onClick={() => setIsSubMenuOpen(true)} >
                                <Link href="/projects" className="block py-2 pr-4 pl-3  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  text-black dark:text-white">Projects</Link>
                            </li>
                            <li onClick={() => setIsSubMenuOpen(true)} >
                                <Link href="/products" className="block py-2 pr-4 pl-3  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  text-black dark:text-white">Products</Link>
                            </li>
                            <li onClick={() => setIsSubMenuOpen(true)}>
                                <Link href="/sustainability" className="block py-2 pr-4 pl-3  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black dark:text-white">Sustainability</Link>
                            </li>
                            <li onClick={() => setIsSubMenuOpen(true)}>
                                <Link href="/about" className="block py-2 pr-4 pl-3  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black dark:text-white">About</Link>
                            </li>
                            {/* <li>
                                <div className='flex '>
                                    <Link href="/services" onClick={() => setSubHead(0)} className="block  py-2 pr-4 pl-3 lg:hover:text-primary-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black dark:text-white">Services</Link>
                                    <div className='relative'>
                                        <button
                                            className="h-full p-2 text-black hover:animate-ping "
                                            onClick={toggleSubMenu}>
                                            <span className="sr-only">Menu</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 dark:text-white"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <div
                                            className={`${isSubMenuOpen ? 'hidden ' : 'flex'} absolute z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white dark:bg-black shadow-lg dark:text-white`}
                                            role="menu">
                                            <div className="p-2" >
                                                <Link href="/services" onClick={() => {
                                                    setSubHead(1.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                    role="menuitem">
                                                    Design Consultation
                                                </Link>
                                                <Link href="/services" onClick={() => {
                                                    setSubHead(2.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white">
                                                    Room Planning & Layout
                                                </Link>
                                                <Link href="/services" onClick={() => {
                                                    setSubHead(3.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                    role="menuitem">
                                                    Customization & Personalization:
                                                </Link>
                                                <Link href="/services" onClick={() => {
                                                    setSubHead(4.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                    role="menuitem">
                                                    Installation & Assembly
                                                </Link>
                                                <Link href="/services" onClick={() => {
                                                    setSubHead(5.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block  border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                    role="menuitem"
                                                >
                                                    Design Packages
                                                </Link>
                                                <Link href="/services" onClick={() => {
                                                    setSubHead(5.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block  border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                    role="menuitem"
                                                >
                                                    Expert Advice & Tips
                                                </Link>
                                                <Link href="/services" onClick={() => {
                                                    setSubHead(5.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black  hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                    role="menuitem"
                                                >
                                                    Design Packages
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                        {isMenuOpen &&
                            <ViewDetectAnimation styles='flex w-screen sm:hidden ' direction={'X'} speed={600} level={100} to={0} repeat={true}>
                                <ul className="flex flex-col w-full lg:space-x-8 dark:bg-black dark:opacity-70 lg:mt-0 font-italianno">
                                    <li onClick={() => setIsSubMenuOpen(true)} >
                                        <Link href="/projects" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  text-black dark:text-white">Projects</Link>
                                    </li>
                                    <li onClick={() => setIsSubMenuOpen(true)} >
                                        <Link href="/products" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  text-black dark:text-white">Products</Link>
                                    </li>
                                    <li onClick={() => setIsSubMenuOpen(true)}>
                                        <Link href="/sustainability" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black dark:text-white">Sustainability</Link>
                                    </li>
                                    <li onClick={() => setIsSubMenuOpen(true)}>
                                        <Link href="/about" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black dark:text-white">About</Link>
                                    </li>

                                    {/* <li>
                                        <div className='flex border-b border-gray-100 '>
                                            <Link href="/services" onClick={() => setSubHead(0)} className="block py-2 pr-4 pl-3 lg:hover:text-primary-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0
                                             text-black dark:text-white">Services</Link>
                                            <div className='relative'>
                                                <button
                                                    className="h-full p-2 text-black hover:animate-ping "
                                                    onClick={toggleSubMenu}>
                                                    <span className="sr-only">Menu</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 dark:text-white"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                                <div
                                                    className={`${isSubMenuOpen ? 'hidden' : 'block'} absolute z-10 mt-2  w-56  divide-y divide-gray-100 rounded-md border border-gray-100 bg-white dark:bg-black shadow-lg dark:text-white`}
                                                    role="menu">
                                                    <div className="p-2" >
                                                        <Link href="/services" onClick={() => {
                                                            setSubHead(1.4)
                                                            setIsSubMenuOpen(true)
                                                        }}
                                                            className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                            role="menuitem">
                                                            Design Consultation
                                                        </Link>
                                                        <Link href="/services" onClick={() => {
                                                            setSubHead(2.4)
                                                            setIsSubMenuOpen(true)
                                                        }}
                                                            className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white">
                                                            Room Planning & Layout
                                                        </Link>
                                                        <Link href="/services" onClick={() => {
                                                            setSubHead(3.4)
                                                            setIsSubMenuOpen(true)
                                                        }}
                                                            className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                            role="menuitem">
                                                            Customization & Personalization:
                                                        </Link>
                                                        <Link href="/services" onClick={() => {
                                                            setSubHead(4.4)
                                                            setIsSubMenuOpen(true)
                                                        }}
                                                            className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                            role="menuitem">
                                                            Installation & Assembly
                                                        </Link>
                                                        <Link href="/services" onClick={() => {
                                                            setSubHead(5.4)
                                                            setIsSubMenuOpen(true)
                                                        }}
                                                            className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                            role="menuitem"
                                                        >
                                                            Design Packages
                                                        </Link>
                                                        <Link href="/services" onClick={() => {
                                                            setSubHead(5.4)
                                                            setIsSubMenuOpen(true)
                                                        }}
                                                            className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                            role="menuitem"
                                                        >
                                                            Expert Advice & Tips
                                                        </Link>
                                                        <Link href="/services" onClick={() => {
                                                            setSubHead(5.4)
                                                            setIsSubMenuOpen(true)
                                                        }}
                                                            className="block border-b border-gray-100 rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700 dark:text-white"
                                                            role="menuitem"
                                                        >
                                                            Design Packages
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li> */}
                                </ul>
                            </ViewDetectAnimation>
                        }
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;

