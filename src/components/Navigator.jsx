import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navigator(Extend,fade) {
    // Hot Link
    const Link = useNavigate()
    // Toggle Sidebar
    const [toggle, SetToggle] = useState(false)

    return (
        <div style={{ height: `${window.innerHeight}px` }} className='sticky top-0'>
            <Sidebar className='bg-white shadow-xl h-full'
                collapsedWidth='60px'
                collapsed={toggle}
                onMouseEnter={() => (SetToggle(false),Extend.Extend(true))}
                onMouseLeave={() => (SetToggle(!toggle),Extend.Extend(!fade))}
            >
                <div onClick={() => Link("/")} className='border-b-2 cursor-pointer flex items-center'>
                    <img className='w-10 m-3' src="/icons/market.png" alt="" />
                    <h1 className='text-xl'>KIMBERY</h1>
                </div>
                <Menu>
                    <SubMenu label="🛜 Servers">
                        <MenuItem>Wukong Black Myth</MenuItem>
                        <MenuItem>Domino</MenuItem>
                    </SubMenu>
                    <MenuItem onClick={()=> Link('/global')}>🌎 Global Chat </MenuItem>
                    <MenuItem onClick={()=> Link('/setting')}>🔨 Setting </MenuItem>
                    <div className='h-80'>
                    </div>
                    <MenuItem onClick={()=> (localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),window.location.reload())}>🏃‍♀️ Signout </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}