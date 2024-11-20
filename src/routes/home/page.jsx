import ServersList from "../../components/ServerList"
import Modal from "../../components/etc/Modal"
import CreateServer from "../../components/home/CreateSever"
import ExploreServer from "../../components/home/ExploreServer";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../states/Auth";
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from "react-router-dom";

export default function Home() {
    let [searchParams, setSearchParams] = useSearchParams();
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (searchParams.get("welcome") == "true" && user.isAuth) {
            console.log(user)
            toast.success(`ยินดีตอนรับ ${user.name}`, { duration: 5000 })
            setSearchParams({ welcome:false })
        }
    }, [user,searchParams])

    // Modal State
    const [modal, SetModal] = useState(false)
    const [explore, SetExplore] = useState(false)

    return (
        <div>
            <Toaster />
            <div className="flex justify-between items-center border-b-2 pb-5">
                <div className="flex items-center">
                    <h1 className="text-xl">Servers</h1>
                    <button onClick={() => SetModal(true)} className="text-lg ml-2 text-white bg-black p-2 py-0 flex items-center justify-between rounded-md"><b className="text-2xl mr-1">+</b> Create</button>
                    <button onClick={() => SetExplore(true)} className="text-black bg-white border border-black rounded-md ml-2 py-1 px-3 shadow-lg">Explore</button>
                </div>
                <div>
                    <h1 className="text-xl">🟢 Your Servers | 43</h1>
                </div>
            </div>
            {/* Servers Content */}
            <br />
            <ServersList />
            <Modal Container={<CreateServer />} state={modal} stater={SetModal} />
            <Modal Container={<ExploreServer />} state={explore} stater={SetExplore} />
        </div>)
}