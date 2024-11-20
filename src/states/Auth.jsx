import { createContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import axios from '../services/api';

function LoadingComponent() {
    return (<>
        <div className='flex items-center justify-center min-h-screen'>
            <button type="button" className="bg-black h-max w-max rounded-lg text-white hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
                <div className="flex items-center justify-center m-[10px]">
                    <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                    <div className="ml-2"> Authenticating ...</div>
                </div>
            </button>
        </div>
    </>)
}

export const AuthContext = createContext();

function Preload() {
    axios.get("/profile").then(({ data }) => {
        if (!data.login) {
            window.location.href = '/signin?session_expired=true'
        }
    })
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        image: '',
        isAuth: false
    });

    const updateUser = (newData) => {
        setUser({
            name: `${newData.firstname} ${newData.lastname}`,
            email: newData.email,
            image: newData.image,
            isAuth: true
        });
    };
    const [loading, SetLoading] = useState(false)

    useEffect(() => {
        Preload()
        Preload = async () => {
            function Waiter(ms) {
                return new Promise((resolve, reject) => setTimeout(() => resolve(true), [ms]))
            }
            await Waiter(200)
            SetLoading(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, updateUser }}>
            <Toaster />
            {
                loading ? children : <LoadingComponent />
            }
        </AuthContext.Provider>
    );
};