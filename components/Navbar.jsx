import Image from 'next/image'
import Reac,  {useState ,useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineMenu , AiOutlineClose  , AiOutlineMail}from "react-icons/ai"
import { FaLinkedinIn ,FaGithub }from "react-icons/fa"
import {  BsFillPersonLinesFill}from "react-icons/bs"
import {useRouter} from "next/router"
import logo from '../public/assets/logo1.svg'
function Navbar() {
    const [nav , setnav] = useState(false)
    const [shadow  , setShadsow ] = useState(false)
    const [navBg ,setNavBg]= useState("#ecf0f3")
    const [linkColor,setLinkColor]= useState("#1f2937")
const router = useRouter()
useEffect(() =>{
 if(
    router.asPath === "/Property" ||
    router.asPath === "/Property" ||
    router.asPath === "/Property" ||
    router.asPath === "/Property" ||
    router.asPath === "/Property" 
     ){
     setNavBg("transparent") 
     setLinkColor("transparent")

 }else{
    setNavBg('#ecf0f3')
    setLinkColor('#1f2937')
 }
},[router])

    const handleNav = ()=>{
        setnav(!nav)
    }
    useEffect(() => {
        const handleShadow = ()=>{
            if(window.scrollY >= 90 ){
                setShadsow(true)
            }else {
                setShadsow(false)

            }
        }
        window.addEventListener('scroll', handleShadow)
    },[])

  return (
    <div
    style={{backgroundColor: `${navBg}`}}
    className={shadow ? ' fixed w-full h-20 shadow-xl z-[100]  ' : ' fixed w-full h-20  z-[100]  '}>
        <div className=' flex justify-between items-center  h-full px-2 2xl:px-16'>
            <Link href="/" >
            <Image src={logo} alt="/" width="125" height="50"/>

            </Link>
          <div>
          <ul 
           style={{color: `${linkColor}`}}
            className=' hidden md:flex'>
            <Link href="/">
                <li className=' ml-10 text-sm uppercase hover:border-b' >Home</li>
            </Link>
            <Link href="/#about">
                <li className=' ml-10 text-sm uppercase hover:border-b' >About </li>
            </Link>
            <Link href="/#skills">
                <li className=' ml-10 text-sm uppercase hover:border-b' >Skills </li>
            </Link>
            <Link href="/#project">
                <li className=' ml-10 text-sm uppercase hover:border-b' >Porjects</li>
            </Link>
            <Link href="/#contact">
                <li className=' ml-10 text-sm uppercase hover:border-b' >Contact</li>
            </Link>
            </ul>  
            <div onClick={handleNav} className=' md:hidden file:'>
                <AiOutlineMenu size={25}/>
            </div>
          </div>  
        </div>
        <div className={nav ? ' md:hidden fixed top-0 left-0 w-full h-screen bg-black/70 ' : ''}>
         <div className={nav 
          ? ' fixed top-0 left-0   w-[75%] sm:w-[60%] md:w-[45%] h-screen p-3 bg-[#ecf0f3]  ease-in duration-500 '
          : ' fixed top-0 left-[100%]     p-3 ease-in duration-500]  '}>
                <div> 
                    <div className="flex w-full  items-center justify-between py-3 ">
                        <Link href="/" >
                        <Image src={logo} width="87" height='35' alt="/"/>

                        </Link>
                        <div onClick={handleNav} className=" rounded-full shadow-lg  p-3 shadow-gray-400 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='  border-b border-gray-300 my-4 '>
                        <p className= "w-[85%] md:w-[90%] py-4 ">Let's bulild something legendary  together</p>
                    </div>
                </div>
                <div className=' py-4 flex flex-col'>
                    <ul
                   
                    className='uppercase'>
                        <Link href="/">
                        <li onClick={()=> setnav(false)} className="py-4 text-sm" >Home</li>
                        </Link>
                        <Link href="/#about">
                        <li onClick={()=> setnav(false)}  className="py-4 text-sm" >About</li>
                        </Link>
                        <Link href="/#skills">
                        <li onClick={()=> setnav(false)}  className="py-4 text-sm" >Skills</li>
                        </Link>
                        <Link  href="/#project">
                        <li  onClick={()=> setnav(false)} className="py-4 text-sm" >Porject</li>
                        </Link>
                        <Link  href="/#contact">
                        <li  onClick={()=> setnav(false)} className="py-4 text-sm" >Contant</li>
                        </Link>
                    </ul>
                    <div className='pt-40 '>
                        <p className=' uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
                        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]" >
                           <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in">
                           <FaLinkedinIn/>
                           </div>
                           <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in">
                           <FaGithub/>
                           </div>
                           <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in">
                           <AiOutlineMail/>
                           </div>
                           <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in">
                           <BsFillPersonLinesFill/>
                           </div>
                        </div>
                    </div>
                </div>
         </div>
        </div>

    </div>
  )
}

export default Navbar