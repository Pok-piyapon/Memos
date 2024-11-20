import { useRef , useState } from "react"
import EmojiPicker from 'emoji-picker-react';


export default function Chat() {

    // text
    const text = useRef("")
    // State open or close for emoji
    const [emojiState,SetEmojiState] = useState(false)

    const send = async () => {
        event.preventDefault()
        try {
            alert("Sending Text")
            text.current.value = ""
        } catch (e) {
            console.log(e)
        }
    }

    const appendEmoji = async ({ emoji })=> {
        try {
            text.current.value += emoji
        }catch(e) {
            console.log(e)
        }
    }

    return (
        <div>
            <div>
                <div style={{
                    width: "100%",
                    height: "400px"
                }}
                    className="bg-gray-100 mt-3 rounded-md relative"
                >
                    <div onMouseLeave={()=> SetEmojiState(false)} className="absolute top-5 right-5">
                        <EmojiPicker
                            open={emojiState}
                            lazyLoadEmojis={true}
                            height={360}
                            searchDisabled={true}
                            onEmojiClick={appendEmoji}
                            skinTonesDisabled={true}
                        />
                    </div>
                </div>
                {/* Typing Text or attachment file */}
                <form onSubmit={send} className=" mt-2 flex items-center">
                    <input ref={text} placeholder="Say hello or something..." className="rounded-md border-2 border-gray-300 w-full p-1" type="text" />
                    <button onMouseEnter={()=> (event.preventDefault(),SetEmojiState(true))} className="p-1 ml-1 px-5 rounded-sm bg-white shadow-xl border border-black text-black">EMOJI</button>
                    <button className="p-1 ml-1 px-5 rounded-sm bg-black text-white">SEND</button>
                </form>
            </div>
        </div>
    )
}