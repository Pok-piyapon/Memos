import { useRef } from "react"


export default function UpdateProfileForm() {

    // Referrence Data accessing
    // Firstname
    const firstname = useRef()
    // Lastname
    const lastname = useRef()
    // Email
    const email = useRef()
    // Password
    const password = useRef()

    const Update = async ()=> {
        try {
            
        }catch (e) {
            console.log(e)
        }
    }
    
    return (
        <div>
            <div className="flex justify-between items-start border-b-2 pb-5">
                <div>
                    <h1 className="text-xl">Update Profile</h1>
                </div>
                <div>
                    <h1 className="text-xl"></h1>
                </div>
            </div>
            {/* Content Updaet Profile */}
            <form className="mt-2">
                <div className="mt-2">
                    <p>Firstname</p>
                    <input ref={firstname} defaultValue={"Piyapon"} className="border w-full p-1 bg-gray-200" type="text" />
                </div>
                <div className="mt-2">
                    <p>Lastname</p>
                    <input ref={lastname} defaultValue={"Kaewkebkam"} className="border w-full p-1 bg-gray-200" type="text" />
                </div>
                <div className="mt-2">
                    <p>Email</p>
                    <input ref={email} defaultValue={"piyapon.k@kkumail.com"} className="border w-full p-1 bg-gray-200" type="email" />
                </div>
                <div className="mt-2">
                    <p>Password</p>
                    <input ref={password} defaultValue={"lion4333"} className="border w-full p-1 bg-gray-200" type="password" />
                </div>
                {/* Submit */}
                <div className="mt-5">
                    <button className="w-full bg-black text-white p-1">UPDATE</button>
                </div>
            </form>
        </div>
    )
}