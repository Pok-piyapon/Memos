import { Outlet } from "react-router-dom"
import Navigator from "./Navigator"
import { useState } from "react"
import Skeleton from 'react-loading-skeleton'

export default function Layout() {

    // Fade Content
    const [fade,Setfade] = useState(false)

    return (
        <div className="flex items-start">
            <Navigator Extend={Setfade} fade={fade} />
            <div className={`ml-10 m-10 bg-white p-5 rounded-md w-full`}>
                {
                    fade ? <Skeleton count={20} /> : <Outlet />
                }
            </div>
        </div>
    )
}