import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const [display, setdisplay] = useState(false)
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        if (location.state === "none") {
            setdisplay(false)

        } else {
            setdisplay(true)

        }
    }, [])
    const style = {
        navbar: "w-full h-[80px] bg-[#231F20]",
        container: "flex justify-between items-center h-full",
        logo: "text-white flex-[.4] flex items-center justify-center font-bold text-[30px]",
        ul: 'flex-[.3] flex items-center list-none',
        link: ' decoration-none text-[20px] font-bold border-r-[1px]  border-r-white px-[20px] text-white last:border-none hover:text-[#7ABBC6] hover:underline',
        contact: 'flex-[.2] flex justify-center',
        contact_link: 'text-white border-[2px] border-white py-[2px] px-[20px] text-[20px] flex items-center hover:border-[#7ABBC6] hover:text-[#7ABBC6] font-bold'
    }

    return (<>
        {display &&
            <div className={style.navbar}>
                <div className={`container ${style.container}`}>
                    <div className={style.logo}>
                        <Link to={'/'} >
                            <h1>LOGO</h1>
                        </Link>
                    </div>
                    <ul className={style.ul}>
                        <li><Link to="home" className={style.link}>Home</Link></li>
                        <li><Link to="blog" className={style.link}>Blog</Link></li>
                    </ul>
                    <div className={style.contact}>
                        <Link className={style.contact_link} to="/contactus"><span>contact us</span></Link>
                    </div>
                </div>

            </div>
        }
    </>

    )
}

export default Navbar