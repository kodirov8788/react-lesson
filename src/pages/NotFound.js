import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"

function NotFound() {
    let location = useLocation()
    useEffect(() => {

        location.state = "none"

    }, [])
    return (
        <div className='text-[54px] text-red-400 text-center'>
            <h1>404 error : Page Not Found</h1>
        </div>

    )
}

export default NotFound