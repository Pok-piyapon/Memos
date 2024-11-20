import { useNavigate } from "react-router-dom"

export default function ServersList({ leave = true }) {

    // Hot Link
    const Link = useNavigate()

    return (
        <div>
            {
                new Array(10).fill(0).map((item, key) => (
                    <div key={key} className="flex mt-3 items-center overflow-auto">
                        <div className="">
                            <img className="w-10" src="/icons/market.ico" alt="" />
                        </div>
                        <div className="flex items-center justify-between ml-3 p-2 rounded-md bg-gray-100 border-2 w-full">
                            <div>
                                <h1>Wukong Black Myth Server</h1>
                            </div>
                            <div>
                                <h1>🤓 Online 17 People</h1>
                            </div>
                            <div className="">
                                <h1 className="flex justify-between overflow-auto">💻 owner<b className="text-gray-500 truncate">: piyapon kaewkebkam</b></h1>
                            </div>
                            <div>
                                <button onClick={()=> Link(`/server?id=${key}`)} className="bg-black text-white px-5 pt-2 pb-2 rounded-md">Open</button>
                                { leave ? <button className="bg-white text-black shadow-xl ml-2 px-5 pt-2 pb-2 rounded-md">Leave</button> : "" }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}