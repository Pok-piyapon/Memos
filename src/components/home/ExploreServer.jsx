import ServersList from "../ServerList"

export default function ExploreServer() {

    return (
        <div>
            <div className="flex justify-between items-center border-b-2 pb-5">
                <div className="flex items-center">
                    <h1 className="text-xl">Explore Servers</h1>
                </div>
                <div>
                    <h1 className="text-xl"></h1>
                </div>
            </div>
            {/* Explore Servers Content */}
            <div className="mt-2">
                <div className="flex items-center">
                    <input type="text" placeholder="Server Name" className="p-2 rounded-md bg-gray-300 w-full border-0 p-1 rounded-sm" />
                    <button className="flex items-center w-28 bg-black text-white p-1 shadow-lg text-center justify-center">Search</button>
                </div>
                {/* Servers List */}
                <ServersList leave={false} />
            </div>
        </div>
    )
}