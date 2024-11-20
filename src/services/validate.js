import validator from 'validator';
import axios from './api';
import toast from 'react-hot-toast';
import { SetLocalStorage } from "./session"

async function CheckSignin({ email, password } , toast) {
    try {
        if (validator.isEmpty(email) || validator.isEmpty(password)) throw new Error("กรอกแบบฟอร์มให้ครบถ้วน")
        if (!validator.isEmail(email,{ allow_utf8_local_part:false , allow_ip_domain:true })) throw new Error("รูปแบบอีเมลล์ไม่ถูกต้อง")
        if (!validator.isLength(password,{ min:6 })) throw new Error("ขนาดรหัสผ่านต้องมากกว่า 6 ตัว")
        return true
    } catch (e) {
        toast(e.message,{
            type:"error"
        })
        return false
    }
}

async function Signin({ email , password } , router , updateUser) {
    event.preventDefault();
    try {
        const form = {
            email: email.current.value,
            password: password.current.value
        }
        if (!(await CheckSignin(form,toast))) return
        const res = await axios.post('/signin', form)
        if (res.status === 204) toast("ไม่พบผู้ใช้งาน",{type:"error"})
        if (res.status === 200) {
            SetLocalStorage(res.data)
            updateUser(res.data)
            router("/")
            return;
        }

    } catch (e) {
        toast(e.message,{
            type:"error"
        })
    }
}

export {
    CheckSignin,
    Signin
}