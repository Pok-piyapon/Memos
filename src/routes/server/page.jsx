import { useSearchParams } from "react-router-dom"
import Chat from "../../components/global/chat" 

export default function Server() {

    const [params, SetParams] = useSearchParams()

    return (
        <div>
            <div className="flex justify-between items-start border-b-2 pb-5">
                <div>
                    <h1 className="text-xl">Server | {params.get("id")}</h1>
                </div>
                <div className="flex items-center justify-between w-20">
                    <img className="hover:rounded-full hover:bg-gray-200 p-2 w-8" src="/icons/calling.png" alt="" />
                    <img className="hover:rounded-full hover:bg-gray-200 p-2 w-8" src="/icons/video.png" alt="" />
                </div>
            </div>
            {/* Server Content */}
            <div>
                <Chat />
            </div>
        </div>
    )
}