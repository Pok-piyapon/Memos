import { Link, useNavigate } from "react-router-dom"
import { useRef, useContext } from "react"
import { useSearchParams } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../states/Auth"
import { Signin } from "../../services/validate";

export default function page() {
    // Router Redirect
    const router = useNavigate()

    // Update AuthData
    const { updateUser } = useContext(AuthContext)
    const [params, Setparams] = useSearchParams()
    const notify = () => {
        if (params.get("session_expired") == 'true') {
            toast.error('Session is Expired.', {
                duration: 4000
            })
        }
    };
    // Mock Data
    const email = useRef("s64209010013@kktech.ac.th");
    const password = useRef("lion433");

    return (<>
        <div onLoad={notify}>
            <form onSubmit={()=> Signin({ email , password },router,updateUser)} className="rounded-md shadow-lg m-auto mt-10 w-2/4 bg-gray-100 p-10">
                <div className="flex flex-row justify-center items-center">
                    <img src="icons/market.png" width={60} height={60} alt="" />
                </div>
                <p className="text-center text-2xl text-gray-800">KBR</p>
                <div>
                    <p className="mb-2 text-md text-gray-800 text-bold font-bold">Email</p>
                    <input ref={email} defaultValue={"s64209010013@kktech.ac.th"} type="text" placeholder="" className="bg-gray-300 w-full border-0 p-1 rounded-sm" />
                    <p className="text-gray-800 text-sm">Example: assdf@gmail.com</p>
                </div>
                <div className="mt-2">
                    <p className="mb-2 text-md text-gray-800 text-bold font-bold">Password</p>
                    <input ref={password} defaultValue={"lion4333"} type="text" placeholder="" className="bg-gray-300 w-full border-0 p-1 rounded-sm" />
                    <p className="text-sm text-gray-800">Example: zxadqweqw_-</p>
                </div>
                <div className="mt-6 flex flex-row justify-end items-center">
                    <button className="bg-black text-white p-2 mx-2 rounded-md px-5">Signin</button>
                    <Link to={"/signup"} className="bg-gray-300 shadow-2xl text-black p-2 rounded-md px-5">Signup</Link>
                </div>
            </form>
        </div>
    </>)
}