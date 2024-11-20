import { Link , useNavigate } from "react-router-dom"
import { useRef } from "react"
import axios from "../../services/api"
import toast, { Toaster } from 'react-hot-toast';

export default function page() {
    // Hot Link
    const Nav = useNavigate()

    const firstname = useRef("")
    const lastname = useRef("")
    const email = useRef("")
    const password = useRef("")

    // signup
    const signup = async () => {
        try {
            // break behavior element
            event.preventDefault();
            const form = {
                firstname: firstname.current.value,
                lastname: lastname.current.value,
                email: email.current.value,
                password: password.current.value
            }
            // send request to the server
            const res = await axios.post("/signup", form)
            // Hot Toaster Fire
            if (res.status == 201) {
                toast.success("สร้างบัญชีสำเร็จ!")
                // Wait for change page
                setTimeout(()=> Nav('/signin'),2000)
            }
        }catch({ response:data }) {
            if (data.data.msg == "DUPLICATE_EMAIL") {
                toast.error("อีเมลล์ซ้ำในระบบ")
            }
        }

    }

    return (<>
        <Toaster />
        <div>
            <form onSubmit={signup} className="rounded-md shadow-lg m-auto mt-10 w-2/4 bg-gray-100 text-gray-800 p-10">
                <div className="flex flex-row justify-center items-center">
                    <img src="icons/market.png" width={60} height={60} alt="" />
                </div>
                <p className="text-center text-2xl text-gray-800">KBR</p>
                <div>
                    <p className="mb-2 text-md text-gray-800 text-bold font-bold">Firstname</p>
                    <input required ref={firstname} type="text" placeholder="" className="bg-gray-300 w-full border-0 p-1 rounded-sm" />
                    <p className="text-gray-800 text-sm">Example: john</p>
                </div>
                <div>
                    <p className="mb-2 text-md text-gray-800 text-bold font-bold">Lastname</p>
                    <input required ref={lastname} type="text" placeholder="" className="bg-gray-300 w-full border-0 p-1 rounded-sm" />
                    <p className="text-gray-800 text-sm">Example: Kather</p>
                </div>
                <div>
                    <p className="mb-2 text-md text-gray-800 text-bold font-bold">Email</p>
                    <input required ref={email} type="text" placeholder="" className="bg-gray-300 w-full border-0 p-1 rounded-sm" />
                    <p className="text-gray-800 text-sm">Example: assdf@gmail.com</p>
                </div>
                <div className="mt-2">
                    <p className="mb-2 text-md text-gray-800 text-bold font-bold">Password</p>
                    <input required ref={password} type="text" placeholder="" className="bg-gray-300 w-full border-0 p-1 rounded-sm" />
                    <p className="text-sm text-gray-800">Example: zxadqweqw_-</p>
                </div>
                <div className="mt-6 flex flex-row justify-end items-center">
                    <button className="bg-black text-white p-2 mx-2 rounded-md px-5">Signup</button>
                    <Link to={"/signin"} className="bg-gray-300 shadow-3xl text-black p-2 rounded-md px-5">Signin</Link>
                </div>
            </form>
        </div>
    </>)
}