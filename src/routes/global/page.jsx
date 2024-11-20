import Chat from "../../components/global/chat"

export default function GlobalChat() {

    return (
        <div>
            <div className="flex justify-between items-center border-b-2 pb-5">
                <div>
                    <h1 className="text-xl">Global Chat.</h1>
                </div>
                <div>
                    <h1 className="text-md bg-amber-200 p-1 rounded-md">⚠️ This Chat Maybe Violent Content.</h1>
                </div>
            </div>
            {/* Chat Content */}
            <Chat />
        </div>
    )
}