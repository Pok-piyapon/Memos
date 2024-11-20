import toast from "react-hot-toast"

async function SetLocalStorage({ accessToken , refreshToken }) {
    try {
        localStorage.setItem("accessToken",accessToken)
        localStorage.setItem("refreshToken",refreshToken)
        return true
    } catch (e) {
        toast(e.message,{
            type:"error"
        })        
        return
    }
}

async function GetLocalStorage(text) {
    try {
        return localStorage.getItem(text)
    }catch(e) {
        toast(e.message,{
            type:"error"
        })    
        return
    }
}

export { SetLocalStorage , GetLocalStorage }