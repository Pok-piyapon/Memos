import { useEffect, useRef, useState } from "react"
import { fileInput } from "../../services/fileUpload"

export default function CreateServer() {

    // file icon base64 content
    const [image, SetImage] = useState(false)
    // Server Name
    const ServerName = useRef("")
    const [ServerName_, SetServerName_] = useState("Server Name")
    // members 
    const members = useRef(2)
    const [members_, SetMembers] = useState("2")

    const CreateServerReq = async () => {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center border-b-2 pb-5">
                <div className="flex items-center">
                    <h1 className="text-xl">Create Server</h1>
                </div>
                <div>
                    <h1 className="text-xl"></h1>
                </div>
            </div>
            {/* Create Server Content */}
            <div>
                {/* Show Data */}
                <div className="mt-2 flex items-center justify-between border-2 p-1 rounded-md bg-gray-100">
                    <div className="flex items-center">
                        <img className="w-10" src={image ? image : "/icons/market.ico"} alt="" />
                        <h1 className="ml-2">{ServerName_ ? ServerName_ : "Server Name"}</h1>
                    </div>
                    <h1>🤓 {members_} members</h1>
                </div>
                <form onSubmit={CreateServerReq}>
                    <div className="mt-2"></div>
                    <div>
                        <p className="mb-2 text-md text-gray-800 text-bold font-bold">Icon Image ( file .ico )</p>
                        <h1 onClick={()=> fileInput(SetImage)} className="shadow-xl border text-gray-500 border-black w-full p-1 rounded-md text-center flex items-center justify-center" > <b className="text-2xl mr-2">+</b> Click here to add file</h1>
                    </div>
                    <div>
                        <p className="mb-2 text-md text-gray-800 text-bold font-bold">Server Name</p>
                        <input onChange={(e) => SetServerName_(e.target.value)} ref={ServerName} type="text" placeholder="" className="bg-gray-300 w-full border-0 p-1 rounded-sm" />
                        <p className="text-gray-800 text-sm">Example: Myname , MyServer , MyBro..</p>
                    </div>
                    <div className="mt-2">
                        <p className="mb-2 text-md text-gray-800 text-bold font-bold">Password ( Option )</p>
                        <input type="text" placeholder="" className="bg-gray-300 w-full border-0 p-1 rounded-sm" />
                        <p className="text-sm text-gray-800">Example: zxadqweqw_-</p>
                    </div>
                    <div className="mt-2">
                        <p className="mb-2 text-md text-gray-800 text-bold font-bold">Members</p>
                        <input onChange={(e) => SetMembers(e.target.value)} type="number" min={2} ref={members} defaultValue={members.current.valueOf()} className="bg-gray-300 w-full border-0 p-1 rounded-sm" />
                        <p className="text-sm text-gray-800">Example: 10 , 5 , 6</p>
                    </div>
                    <div className="mt-6 flex flex-row justify-end items-center">
                        <button className="bg-black w-full text-white p-2 rounded-md px-5">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}