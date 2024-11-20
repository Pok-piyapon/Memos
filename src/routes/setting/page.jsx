import Modal from "../../components/etc/Modal"
import { useState , useEffect , useContext } from "react"
import toast , { Toaster } from "react-hot-toast"
import { fileInput } from "../../services/fileUpload"
import UpdateProfileForm from "../../components/setting/FormUpdateProfile"
import { AuthContext } from "../../states/Auth"

export default function Setting() {
        const { user } = useContext(AuthContext)
        // Modal Open Post
        const [post,SetPost] = useState(false)
        // Image Profile Upload
        const [profile,SetProfile] = useState(false)
        // Form State
        const [form,SetForm] = useState(false)

        // Authenticate
        const [data,SetData] = useState(false)
        useEffect(()=> {
            user.isAuth ? SetData(user) : false
            console.log(user)
        },[user])

    return (
        <div>
            <div className="flex justify-between items-start border-b-2 pb-5">
                <div>
                    <h1 className="text-xl">Setting</h1>
                </div>
                <div>
                    <h1 className="text-xl"></h1>
                </div>
            </div>
            {/* Setting Content */}
            <div className={`${data ? '' : 'hidden'} flex justify-between items-start`}>
                <div className="w-2/5 border-2 bg-gray-100 mt-3 rounded-md shadow-md">
                    {/* left Side */}
                    <div className="m-3 border-b-2 pb-2 relative">
                        <img className="w-full rounded-md" src={ data.image?.length > 0 ? `/images/${data.image}` : "/images/avatar.png" } alt="" />
                        <button onClick={()=> fileInput(SetProfile)} className="absolute top-2 right-2 bg-white text-black border border-black p-2 rounded-sm shadow-xl">UPLOAD</button>
                    </div>
                    <div className="m-3">
                        <h1 className="bg-white p-2 mb-2 rounded-md shadow-xl"><b>Firstname</b> : piyapon</h1>
                        <h1 className="bg-white p-2 mb-2 rounded-md shadow-xl"><b>Lastname</b> : keawkebkam</h1>
                        <h1 className="bg-white p-2 mb-2 rounded-md shadow-xl"><b>Email</b> : piyapon.k@kkumail.com</h1>
                    </div>
                    <div className="m-3">
                        <button onClick={()=> SetForm(true)} className="bg-black text-white w-full py-1 rounded-sm">EDIT</button>
                    </div>
                </div>
                <div className="w-3/4 ml-5 border-2 bg-gray-100 mt-3 rounded-md shadow-md">
                    {/* Right Side */}
                    <div className="flex items-center justify-between m-3 rounded-md">
                        <div className="flex items-center justify-between bg-white p-2 rounded-md shadow-xl w-full m-1">
                            <h1 className="text-xl">Servers <b className="text-gray-600">120</b></h1>
                            <p>💻</p>
                        </div>
                        <div className="flex items-center justify-between bg-white p-2 rounded-md shadow-xl w-full m-1">
                            <h1 className="text-xl">Followers <b className="text-gray-600">6,428</b></h1>
                            <p>🤓</p>
                        </div>
                        <div className="flex items-center justify-between bg-white p-2 rounded-md shadow-xl w-full m-1">
                            <h1 className="text-xl">Post <b className="text-gray-600">543</b></h1>
                            <p>📷</p>
                        </div>
                    </div>
                    {/* Posts Content */}
                    <div className="grid grid-cols-3 justify-center justify-items-center m-3 overflow-auto scrollable" style={{
                        height:window.innerHeight
                    }}>
                        {
                            new Array(24).fill(0).map((item, _) => 
                                (<div key={_} className="border border-2 relative">
                                    <div className="absolute top-0 left-0 rounded-md overflow-hidden">
                                        <button onClick={()=> (toast("กำลังโหลด...",{duration:1000}),SetPost(true))} className="p-1 bg-black text-white">View</button>
                                        <button className="p-1 bg-red-500 text-white">Delete</button>
                                    </div>
                                    <img className="" src="/images/person.jpg" alt="" />
                                </div>)
                            )
                        }
                    </div>
                </div>
            </div>
            {/* Modal Optional */}
            <Modal Container={<UpdateProfileForm />}  state={form} stater={SetForm} />
            <Modal Container={<img src="/images/person.jpg" alt="" />} state={post} stater={SetPost} />
            <Toaster    
            />
        </div>
    )
}