import React, { createContext, useContext, useEffect, useState } from "react";
import { client } from '../../../api'

export const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context

        this.currentForm = context.currentForm
        this.setCurrentForm = context.setCurrentForm

        this.email = context.email
        this.setEmail = context.setEmail

        this.userName = context.userName
        this.setUserName = context.setUserName

        this.passWord = context.passWord
        this.setPassWord = context.setPassWord

        this.handleLogin = context.handleLogin
        this.handleRegister = context.handleRegister
    }

}

export function LoginProvider({ children }) {
    const [currentForm, setCurrentForm] = useState(0);
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

    function handleLogin(){
        const data = {
            username: this.userName,
            password: this.passWord

        }
        console.log(data)
        client.post('/login',data)
            .then(res => {
                localStorage.setItem('token', res.data.access_token)
                localStorage.setItem('user', res.data.user)
                window.location.reload(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function handleRegister(){
        const data = {
            email: this.email,
            username: this.userName,
            password: this.passWord
        }
        console.log(data)
        client.post('/register',data)
            .then(res => {
                console.log(res)
                window.location.reload(false)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    return (
        <context.Provider
            value={{
                currentForm,
                setCurrentForm,
                email,setEmail,
                userName,setUserName,
                passWord,setPassWord,
                handleLogin,handleRegister
            }}
        >
            {children}
        </context.Provider>
    )
}